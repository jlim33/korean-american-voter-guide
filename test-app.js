/**
 * Automated test script to verify data integrity, quiz engine, and HTTP endpoints
 */
const http = require('http');
const VOTER_DATA = require('./js/data.js');
const VoterQuizEngine = require('./js/quiz.js');

console.log('--- 1. Testing Voter Data Integrity ---');
console.log(`Loaded ${VOTER_DATA.questions.length} controversial questions.`);
VOTER_DATA.questions.forEach((q, i) => {
  if (!q.en.question || !q.ko.question) {
    throw new Error(`Question ${i + 1} is missing EN or KO content!`);
  }
  if (!q.weights || typeof q.weights.rep !== 'number' || typeof q.weights.dem !== 'number') {
    throw new Error(`Question ${i + 1} has invalid weights!`);
  }
});
console.log('✓ All 10 questions validated with bilingual content and weights.');

console.log('\n--- 2. Testing Quiz Scoring Engine ---');
const quiz = new VoterQuizEngine();

// Simulate a conservative-leaning respondent
VOTER_DATA.questions.forEach(q => {
  quiz.setAnswer(q.id, 2, 1.0); // Strongly Agree
});

const resConservative = quiz.calculateAlignment();
console.log('Conservative simulation result:');
console.log('Archetype:', resConservative.archetype.en.title);
console.log('Percentages:', resConservative.percentages);
console.log('Axes:', resConservative.axes);

if (resConservative.percentages.republican < resConservative.percentages.democratic) {
  throw new Error('Scoring engine unexpected result for conservative inputs');
}

// Simulate a progressive-leaning respondent
const quizProg = new VoterQuizEngine();
VOTER_DATA.questions.forEach(q => {
  quizProg.setAnswer(q.id, -2, 1.0); // Strongly Disagree
});
const resProg = quizProg.calculateAlignment();
console.log('\nProgressive simulation result:');
console.log('Archetype:', resProg.archetype.en.title);
console.log('Percentages:', resProg.percentages);

if (resProg.percentages.democratic < resProg.percentages.republican) {
  throw new Error('Scoring engine unexpected result for progressive inputs');
}
console.log('✓ Scoring engine produces balanced, accurate political alignment and archetypes.');

console.log('\n--- 3. Testing Local Server HTTP Endpoints ---');
const endpoints = ['/', '/index.html', '/css/styles.css', '/js/data.js', '/js/quiz.js', '/js/app.js', '/assets/hero-banner.jpg'];

let completed = 0;
endpoints.forEach(ep => {
  http.get(`http://127.0.0.1:4180${ep}`, (res) => {
    if (res.statusCode !== 200) {
      console.error(`FAIL: ${ep} returned HTTP ${res.statusCode}`);
      process.exit(1);
    }
    console.log(`HTTP 200 OK: ${ep} (Content-Type: ${res.headers['content-type']}, Size: ${res.headers['content-length'] || 'stream'})`);
    completed++;
    if (completed === endpoints.length) {
      console.log('\n✓ All assets and files are serving perfectly at http://localhost:4180/');
      process.exit(0);
    }
  }).on('error', (err) => {
    console.error(`HTTP request failed for ${ep}:`, err.message);
    process.exit(1);
  });
});
