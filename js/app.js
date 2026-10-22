/**
 * Korean American Voter Hub - Main Application Script
 * Bilingual (EN/KO), Theme Management, Quiz Flow & Interactive Visualizations
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentLang = 'en'; // 'en' | 'ko'
  const quiz = new VoterQuizEngine();

  // DOM Elements
  const langToggleBtn = document.getElementById('btn-lang-toggle');
  const langToggleText = document.getElementById('lang-toggle-text');
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');

  // Quiz DOM Elements
  const quizBox = document.getElementById('quiz-box');
  const resultsDashboard = document.getElementById('results-dashboard');
  const stepBadge = document.getElementById('quiz-step-badge');
  const categoryTag = document.getElementById('quiz-category-tag');
  const progressBar = document.getElementById('quiz-progress-bar');
  const topicBadge = document.getElementById('question-topic-badge');
  const questionTitle = document.getElementById('question-title-text');
  const contextHeaderLabel = document.getElementById('context-header-label');
  const contextTextContent = document.getElementById('context-text-content');
  const questionStatement = document.getElementById('question-statement-text');
  const sideAgreeTitle = document.getElementById('side-agree-title');
  const sideAgreeDesc = document.getElementById('side-agree-desc');
  const sideDisagreeTitle = document.getElementById('side-disagree-title');
  const sideDisagreeDesc = document.getElementById('side-disagree-desc');
  const choiceBtns = document.querySelectorAll('.choice-btn');
  const priorityBtns = document.querySelectorAll('.btn-priority');
  const btnPrev = document.getElementById('btn-quiz-prev');
  const btnNext = document.getElementById('btn-quiz-next');
  const btnNextText = document.getElementById('btn-next-text');
  const btnRetake = document.getElementById('btn-retake-quiz');
  const btnPrint = document.getElementById('btn-print-ballot');

  // Pledge Form DOM Elements
  const pledgeForm = document.getElementById('form-pledge');
  const pledgeInput = document.getElementById('input-pledge-name');
  const pledgeCertBox = document.getElementById('pledge-cert-box');
  const certDisplayName = document.getElementById('cert-display-name');

  // Static Text Translations Dictionary
  const UI_TEXT = {
    en: {
      langBtn: "한국어",
      brandMain: "KA Voter Hub",
      brandSub: "Korean American Compass",
      navQuiz: "Start Quiz",
      heroBadge: "Nonpartisan Civic Voter Empowerment",
      heroTitle: "Your Voice, Your Heritage:",
      heroTitleHighlight: "Vote With Clarity & Power",
      heroDesc: "Korean Americans hold pivotal influence in elections across America. From small business vitality and academic meritocracy to public safety and the U.S.–Korea alliance, explore where your personal values align—and claim your power at the ballot box.",
      heroBtnQuiz: "Take 3-Minute Issues Quiz",
      heroBtnRights: "Korean Ballot & Voting Rights",
      heroCaption: "Democracy Strengthens When We Participate",
      statPopLabel: "Korean Americans",
      statTurnoutLabel: "Turnout Momentum",
      statRightsLabel: "VRA Language Rights",
      pillar1Title: "Nuanced & Balanced",
      pillar1Desc: "Directly explores controversial topics—affirmative action, retail crime, taxes, and military alliances—with honest perspectives from all viewpoints without bias.",
      pillar2Title: "Rooted in Korean American Reality",
      pillar2Desc: "Tailored to immigrant family sacrifices, small business ownership, bilingual eldercare, and foreign policy ties to the Korean Peninsula.",
      pillar3Title: "Empowerment to Action",
      pillar3Desc: "Provides actionable voter registration, mail-in ballot guides, legal rights to Korean ballots under Section 203, and customized voting summaries.",
      whyMatters: "Why This Matters to Korean Americans",
      priorityHeading: "How important is this issue to your vote?",
      prioritySubtext: "Weights this policy higher in your final alignment calculation",
      btnPrev: "Previous",
      btnNext: "Next Question",
      btnFinish: "See My Alignment Results",
      labelSD: "Strongly Disagree",
      labelD: "Somewhat Disagree",
      labelN: "Neutral / Complicated",
      labelA: "Somewhat Agree",
      labelSA: "Strongly Agree",
      resBadge: "Your Personalized Voter Alignment Profile",
      resTitle: "Where You Stand on Key Issues",
      resSubtitle: "Based on your responses to 10 core controversial issues shaping Korean American lives today.",
      axesHeading: "6 Key Policy Dimensions",
      axesSubheading: "Your personal leanings on specific issues compared to standard political philosophies",
      matrixHeading: "Side-by-Side: Where the Parties Stand on Korean American Issues",
      matrixSubheading: "Official platform stances on the topics that matter most to our community",
      thIssue: "Issue Area",
      btnPrint: "Print / Save My Voting Cheat Sheet",
      btnRetake: "Adjust My Answers",
      hubBadge: "Voter Action & Legal Rights Hub",
      hubTitle: "Make Your Voice Heard on Election Day",
      hubDesc: "Having an opinion matters only when you cast your ballot. Here is everything you need to register, request Korean-language voting materials, and commit to vote.",
      rightsTitle: "Korean Ballot Legal Rights (§203)",
      rightsTag: "Federal Voting Rights Act",
      rightsDesc: "Under federal law, counties with sizable Korean-speaking populations must provide ballots, sample voting guides, and election workers fluent in Korean.",
      rightsTipTitle: "Voter Tip:",
      rightsTipText: "You can legally bring any bilingual family member or friend into the booth to translate for you, as long as they are not your boss or union leader.",
      regTitle: "Verify or Register to Vote",
      regTag: "Takes less than 2 minutes",
      regDesc: "Voter registration deadlines vary by state. If you have moved, changed your name, or recently became a naturalized U.S. citizen, check your active status now.",
      btnCheckReg: "Check Your Registration Status (Vote.org)",
      btnNewReg: "Register as a New Voter",
      regNote: "Links direct you to official, certified nonpartisan national registration databases.",
      mailTitle: "Mail-In & Absentee Ballots",
      mailTag: "Vote from Home",
      mailDesc: "Many states like California automatically send ballots by mail to all active registered voters, while other states require requesting an absentee ballot ahead of time.",
      btnMail: "Request Absentee Ballot",
      pledgeTitle: "Pledge to Vote (투표 서약)",
      pledgeTag: "Community Commitment",
      pledgeDesc: "Studies prove that voters who make a conscious, written commitment are 80% more likely to vote. Make your pledge and download a proud civic badge!",
      pledgePlaceholder: "Your Name or Initial",
      btnPledge: "I Pledge",
      pledgeHelp: "Join over 12,400 Korean Americans pledging to strengthen our community's voice.",
      certText: "has officially pledged to exercise their sacred constitutional right to vote in the upcoming election.",
      certSlogan: "\"A Korean American community that votes is a community that is respected.\"",
      footerMission: "A nonpartisan, community-focused initiative dedicated to elevating Korean American civic engagement, voter turnout, and political literacy across the United States.",
      footerCopy: "© 2026 Korean American Voter Hub. Dedicated to the Korean American Community. Nonpartisan Educational Resource."
    },
    ko: {
      langBtn: "English",
      brandMain: "한인 유권자 나침반",
      brandSub: "KA Voter Hub",
      navQuiz: "테스트 시작",
      heroBadge: "초당적 재미 한인 유권자 권익 & 투표 독려 플랫폼",
      heroTitle: "우리의 목소리, 우리의 뿌리:",
      heroTitleHighlight: "명확한 소신으로 투표하십시오",
      heroDesc: "재미 한인 유권자는 미국 전역의 선거에서 승패를 가르는 결정적인 캐스팅보트입니다. 소상공인 생계, 자녀 능력주의 입시, 치안 안전부터 한미 안보 동맹까지—당신의 가치관이 어디에 닿아 있는지 확인하고 당당히 한 표를 행사하세요.",
      heroBtnQuiz: "3분 이슈 성향 테스트",
      heroBtnRights: "한국어 투표용지 및 권리 안내",
      heroCaption: "우리가 참여할 때 한인 커뮤니티의 힘이 커집니다",
      statPopLabel: "전미 한인 인구",
      statTurnoutLabel: "투표율 상승세",
      statRightsLabel: "연방 투표권법 한국어 보장",
      pillar1Title: "공정하고 균형 잡힌 시각",
      pillar1Desc: "대입 어퍼머티브 액션, 소매 절도 치안, 소상공인 세금, 한미동맹 등 찬반이 첨예한 이슈들을 편향 없이 진솔하게 짚어봅니다.",
      pillar2Title: "재미 한인의 삶에 밀착",
      pillar2Desc: "이민 1세대의 땀방울, 자영업 비즈니스, 한어 시니어 케어, 한반도 평화와 안보 등 교포 사회의 실제 관심사를 반영했습니다.",
      pillar3Title: "실질적인 투표 행동으로",
      pillar3Desc: "유권자 등록 확인, 우편 투표 방법, 연방 투표권법 제203조 한국어 투표용지 수령 권리, 맞춤형 가이드를 제공합니다.",
      whyMatters: "재미 한인 커뮤니티에 왜 중요한가요?",
      priorityHeading: "이 이슈가 당신의 투표 결정에 얼마나 중요한가요?",
      prioritySubtext: "최종 성향 분석 시 해당 정책의 가중치를 반영합니다.",
      btnPrev: "이전 질문",
      btnNext: "다음 질문",
      btnFinish: "성향 분석 결과 보기",
      labelSD: "적극 반대",
      labelD: "대체로 반대",
      labelN: "중립 / 복합적",
      labelA: "대체로 찬성",
      labelSA: "적극 찬성",
      resBadge: "나의 맞춤형 유권자 성향 리포트",
      resTitle: "주요 이슈별 나의 정치적 나침반",
      resSubtitle: "재미 한인의 현재와 미래를 좌우하는 10가지 핵심 이슈에 대한 응답 결과입니다.",
      axesHeading: "6대 핵심 정책 분야별 성향",
      axesSubheading: "미국 주요 정당 및 정치 철학과 나의 가치관 비교",
      matrixHeading: "한눈에 보는 양당의 재미 한인 핵심 이슈 정책 비교",
      matrixSubheading: "우리 커뮤니티에 가장 중대한 영향을 미치는 현안별 공식 정강",
      thIssue: "정책 분야",
      btnPrint: "나의 투표 가이드 인쇄 / 저장하기",
      btnRetake: "응답 수정 및 다시하기",
      hubBadge: "유권자 행동 및 법적 권리 허브",
      hubTitle: "선거일, 당신의 당당한 한 표를 행사하세요",
      hubDesc: "정치에 대한 생각은 투표함에 넣을 때 비로소 힘이 됩니다. 유권자 등록부터 한국어 투표 지원 요청, 투표 서약까지 확인하세요.",
      rightsTitle: "연방 투표권법 제203조: 한국어 투표 권리",
      rightsTag: "Federal Voting Rights Act",
      rightsDesc: "연방 법률에 따라 한인 유권자가 밀집된 카운티에서는 한국어 투표용지, 선거 공보물, 한국어 통역 안내원이 법적으로 제공됩니다.",
      rightsTipTitle: "유권자 팁:",
      rightsTipText: "영어가 서투신 경우, 고용주나 노조 대표를 제외한 영어를 잘하는 자녀, 친척, 지인을 투표 부스에 동반하여 통역 지원을 받으실 법적 권리가 있습니다.",
      regTitle: "유권자 등록 확인 및 신규 등록",
      regTag: "2분 소요",
      regDesc: "주마다 유권자 등록 마감일이 다릅니다. 이사를 하셨거나, 개명하셨거나, 최근 미국 시민권을 취득하셨다면 등록 상태를 즉시 확인하세요.",
      btnCheckReg: "나의 유권자 등록 상태 확인 (Vote.org)",
      btnNewReg: "신규 유권자 등록하기",
      regNote: "공식적이고 인증된 초당적 선거 관리 데이터베이스로 연결됩니다.",
      mailTitle: "우편 투표 및 부재자 투표 안내",
      mailTag: "가정에서 편리하게 투표",
      mailDesc: "캘리포니아 등 다수의 주에서는 등록 유권자에게 우편 투표용지를 자동 발송하며, 일부 주에서는 사전 신청이 필요합니다.",
      btnMail: "부재자/우편 투표용지 신청",
      pledgeTitle: "투표 참여 서약 (Pledge to Vote)",
      pledgeTag: "커뮤니티와의 약속",
      pledgeDesc: "자신의 투표 의사를 글로 서약한 유권자는 실제 투표율이 80% 이상 높아집니다. 서약에 동참하고 자랑스러운 배지를 발급받으세요!",
      pledgePlaceholder: "성함 또는 영문 이름",
      btnPledge: "서약하기",
      pledgeHelp: "한인 커뮤니티의 목소리를 높이기 위해 12,400명 이상의 한인들이 서약에 동참했습니다.",
      certText: "님은 다가오는 선거에서 신성한 헌법상 투표권을 반드시 행사하여 한인 사회의 힘을 증명할 것을 엄숙히 서약하셨습니다.",
      certSlogan: "\"투표하는 한인이 강한 커뮤니티를 만듭니다\"",
      footerMission: "미국 내 한인 유권자들의 정치 참여와 투표율을 제고하고 정치적 문해력을 높이기 위한 초당적 비영리 시민 교육 플랫폼입니다.",
      footerCopy: "© 2026 Korean American Voter Hub. 초당적 교육 리소스. 재미 한인 유권자들을 위해 제작되었습니다."
    }
  };

  // --- LANGUAGE MANAGEMENT ---
  function updateLanguage(lang) {
    currentLang = lang;
    const t = UI_TEXT[lang];

    if (lang === 'ko') {
      document.body.classList.add('lang-ko');
      document.body.classList.remove('lang-en');
      document.documentElement.lang = 'ko';
    } else {
      document.body.classList.add('lang-en');
      document.body.classList.remove('lang-ko');
      document.documentElement.lang = 'en';
    }

    langToggleText.textContent = t.langBtn;
    document.getElementById('brand-text-main').textContent = t.brandMain;
    document.getElementById('brand-text-sub').textContent = t.brandSub;
    document.getElementById('nav-quiz-text').textContent = t.navQuiz;

    document.getElementById('hero-badge-text').textContent = t.heroBadge;
    document.getElementById('hero-title-highlight').textContent = t.heroTitleHighlight;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('hero-btn-quiz').textContent = t.heroBtnQuiz;
    document.getElementById('hero-btn-rights').textContent = t.heroBtnRights;
    document.getElementById('hero-caption-text').textContent = t.heroCaption;

    document.getElementById('stat-pop-label').textContent = t.statPopLabel;
    document.getElementById('stat-turnout-label').textContent = t.statTurnoutLabel;
    document.getElementById('stat-rights-label').textContent = t.statRightsLabel;

    document.getElementById('pillar-1-title').textContent = t.pillar1Title;
    document.getElementById('pillar-1-desc').textContent = t.pillar1Desc;
    document.getElementById('pillar-2-title').textContent = t.pillar2Title;
    document.getElementById('pillar-2-desc').textContent = t.pillar2Desc;
    document.getElementById('pillar-3-title').textContent = t.pillar3Title;
    document.getElementById('pillar-3-desc').textContent = t.pillar3Desc;

    contextHeaderLabel.textContent = t.whyMatters;
    document.getElementById('priority-heading').textContent = t.priorityHeading;
    document.getElementById('priority-subtext').textContent = t.prioritySubtext;
    document.getElementById('btn-prev-text').textContent = t.btnPrev;

    document.getElementById('label-sd').textContent = t.labelSD;
    document.getElementById('label-d').textContent = t.labelD;
    document.getElementById('label-n').textContent = t.labelN;
    document.getElementById('label-a').textContent = t.labelA;
    document.getElementById('label-sa').textContent = t.labelSA;

    document.getElementById('res-badge-text').textContent = t.resBadge;
    document.getElementById('res-title-text').textContent = t.resTitle;
    document.getElementById('res-subtitle-text').textContent = t.resSubtitle;
    document.getElementById('axes-heading').textContent = t.axesHeading;
    document.getElementById('axes-subheading').textContent = t.axesSubheading;
    document.getElementById('matrix-heading').textContent = t.matrixHeading;
    document.getElementById('matrix-subheading').textContent = t.matrixSubheading;
    document.getElementById('th-issue').textContent = t.thIssue;
    document.getElementById('btn-print-text').textContent = t.btnPrint;
    document.getElementById('btn-retake-text').textContent = t.btnRetake;

    // Action Hub
    document.getElementById('hub-super-badge').textContent = t.hubBadge;
    document.getElementById('hub-main-title').textContent = t.hubTitle;
    document.getElementById('hub-main-desc').textContent = t.hubDesc;

    document.getElementById('rights-card-title').textContent = t.rightsTitle;
    document.getElementById('rights-card-tag').textContent = t.rightsTag;
    document.getElementById('rights-card-desc').textContent = t.rightsDesc;
    document.getElementById('rights-tip-title').textContent = t.rightsTipTitle;
    document.getElementById('rights-tip-text').textContent = t.rightsTipText;

    document.getElementById('reg-card-title').textContent = t.regTitle;
    document.getElementById('reg-card-tag').textContent = t.regTag;
    document.getElementById('reg-card-desc').textContent = t.regDesc;
    document.getElementById('btn-check-reg-text').textContent = t.btnCheckReg;
    document.getElementById('btn-new-reg-text').textContent = t.btnNewReg;
    document.getElementById('reg-note').textContent = t.regNote;

    document.getElementById('mail-card-title').textContent = t.mailTitle;
    document.getElementById('mail-card-tag').textContent = t.mailTag;
    document.getElementById('mail-card-desc').textContent = t.mailDesc;
    document.getElementById('btn-mail-text').textContent = t.btnMail;

    document.getElementById('pledge-card-title').textContent = t.pledgeTitle;
    document.getElementById('pledge-card-tag').textContent = t.pledgeTag;
    document.getElementById('pledge-card-desc').textContent = t.pledgeDesc;
    pledgeInput.placeholder = t.pledgePlaceholder;
    document.getElementById('btn-pledge-text').textContent = t.btnPledge;
    document.getElementById('pledge-help').textContent = t.pledgeHelp;
    document.getElementById('cert-display-text').textContent = t.certText;
    document.getElementById('cert-slogan').textContent = t.certSlogan;

    document.getElementById('footer-mission-text').textContent = t.footerMission;
    document.getElementById('footer-copy').textContent = t.footerCopy;

    // Refresh current question in new language
    renderQuestion(quiz.currentQuestionIndex);

    // Refresh platform table and results if active
    renderPlatformTable();
    if (resultsDashboard.classList.contains('active')) {
      renderResults();
    }
  }

  langToggleBtn.addEventListener('click', () => {
    updateLanguage(currentLang === 'en' ? 'ko' : 'en');
  });

  // --- THEME MANAGEMENT ---
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    themeToggleIcon.textContent = nextTheme === 'dark' ? '🌙' : '☀️';
  });

  // --- QUIZ RENDERING ---
  function renderQuestion(index) {
    const q = quiz.questions[index];
    if (!q) return;

    const qContent = q[currentLang];
    const totalQ = quiz.questions.length;
    const currentQ = index + 1;

    // Step & Progress
    stepBadge.textContent = currentLang === 'ko' ? `질문 ${currentQ} / ${totalQ}` : `Question ${currentQ} of ${totalQ}`;
    
    // Category mapping
    const catMap = {
      education: currentLang === 'ko' ? '교육 및 입시' : 'Education & Admissions',
      safety: currentLang === 'ko' ? '치안 및 공공안전' : 'Public Safety & Justice',
      economy: currentLang === 'ko' ? '경제 및 소상공인' : 'Small Business & Economy',
      foreign_policy: currentLang === 'ko' ? '외교 및 한미동맹' : 'U.S.-ROK Alliance',
      immigration: currentLang === 'ko' ? '이민 및 국경' : 'Immigration & Dreamers',
      values: currentLang === 'ko' ? '사회적 가치' : 'Civil Values & Rights',
      healthcare: currentLang === 'ko' ? '보건의료 및 복지' : 'Healthcare & Eldercare'
    };
    categoryTag.textContent = catMap[q.category] || q.category;

    progressBar.style.width = `${(currentQ / totalQ) * 100}%`;

    // Content
    topicBadge.textContent = qContent.topic;
    questionTitle.textContent = qContent.title;
    contextTextContent.textContent = qContent.context;
    questionStatement.textContent = `"${qContent.question}"`;

    sideAgreeTitle.textContent = currentLang === 'ko' ? "찬성하는 이유" : "Arguments in Favor";
    sideAgreeDesc.textContent = qContent.proSummary;
    sideDisagreeTitle.textContent = currentLang === 'ko' ? "반대하는 이유" : "Arguments in Opposition";
    sideDisagreeDesc.textContent = qContent.conSummary;

    // Previous Button state
    btnPrev.disabled = index === 0;

    // Next button text
    if (index === totalQ - 1) {
      btnNextText.textContent = UI_TEXT[currentLang].btnFinish;
    } else {
      btnNextText.textContent = UI_TEXT[currentLang].btnNext;
    }

    // Restore selected choice
    choiceBtns.forEach(btn => {
      btn.classList.remove('selected');
      btn.setAttribute('aria-checked', 'false');
    });

    const existingAns = quiz.getAnswer(q.id);
    if (existingAns !== null) {
      const selectedBtn = document.querySelector(`.choice-btn[data-val="${existingAns.value}"]`);
      if (selectedBtn) {
        selectedBtn.classList.add('selected');
        selectedBtn.setAttribute('aria-checked', 'true');
      }
      // Restore priority
      priorityBtns.forEach(pBtn => {
        pBtn.classList.toggle('active', parseFloat(pBtn.dataset.weight) === existingAns.priority);
      });
    } else {
      // Default standard priority
      priorityBtns.forEach(pBtn => {
        pBtn.classList.toggle('active', parseFloat(pBtn.dataset.weight) === 1.0);
      });
    }
  }

  // Handle Choice Selection
  choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      choiceBtns.forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-checked', 'true');

      const val = btn.getAttribute('data-val');
      const activePri = document.querySelector('.btn-priority.active');
      const priority = activePri ? activePri.getAttribute('data-weight') : 1.0;

      const currentQ = quiz.questions[quiz.currentQuestionIndex];
      quiz.setAnswer(currentQ.id, val, priority);
    });
  });

  // Handle Priority Selection
  priorityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      priorityBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const currentQ = quiz.questions[quiz.currentQuestionIndex];
      const existing = quiz.getAnswer(currentQ.id);
      if (existing !== null) {
        quiz.setAnswer(currentQ.id, existing.value, btn.getAttribute('data-weight'));
      }
    });
  });

  // Navigation Handlers
  btnPrev.addEventListener('click', () => {
    if (quiz.currentQuestionIndex > 0) {
      quiz.currentQuestionIndex--;
      renderQuestion(quiz.currentQuestionIndex);
      quizBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  btnNext.addEventListener('click', () => {
    const currentQ = quiz.questions[quiz.currentQuestionIndex];
    if (quiz.getAnswer(currentQ.id) === null) {
      // Default to Neutral (0) if user didn't explicitly pick
      quiz.setAnswer(currentQ.id, 0, 1.0);
    }

    if (quiz.currentQuestionIndex < quiz.questions.length - 1) {
      quiz.currentQuestionIndex++;
      renderQuestion(quiz.currentQuestionIndex);
      quizBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Finish quiz and show results
      showResults();
    }
  });

  btnRetake.addEventListener('click', () => {
    resultsDashboard.classList.remove('active');
    quizBox.style.display = 'block';
    quiz.currentQuestionIndex = 0;
    renderQuestion(0);
    quizBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  btnPrint.addEventListener('click', () => {
    window.print();
  });

  // --- RESULTS LOGIC ---
  function showResults() {
    quizBox.style.display = 'none';
    resultsDashboard.classList.add('active');
    renderResults();
    resultsDashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderResults() {
    const alignment = quiz.calculateAlignment();

    // Render Archetype
    const arch = alignment.archetype[currentLang];
    document.getElementById('archetype-title').textContent = arch.title;
    document.getElementById('archetype-desc').textContent = arch.tagline;

    // Render Party Percentage Cards with animation
    animateCounter('match-dem-pct', alignment.percentages.democratic);
    animateCounter('match-rep-pct', alignment.percentages.republican);
    animateCounter('match-ind-pct', alignment.percentages.independent);

    document.getElementById('meter-dem-fill').style.width = `${alignment.percentages.democratic}%`;
    document.getElementById('meter-rep-fill').style.width = `${alignment.percentages.republican}%`;
    document.getElementById('meter-ind-fill').style.width = `${alignment.percentages.independent}%`;

    const pData = VOTER_DATA.partyPlatforms;
    document.getElementById('badge-party-dem').textContent = pData.democratic[currentLang === 'ko' ? 'nameKo' : 'nameEn'];
    document.getElementById('badge-party-rep').textContent = pData.republican[currentLang === 'ko' ? 'nameKo' : 'nameEn'];
    document.getElementById('badge-party-ind').textContent = pData.independent[currentLang === 'ko' ? 'nameKo' : 'nameEn'];

    document.getElementById('summary-party-dem').textContent = pData.democratic[currentLang === 'ko' ? 'overviewKo' : 'overviewEn'];
    document.getElementById('summary-party-rep').textContent = pData.republican[currentLang === 'ko' ? 'overviewKo' : 'overviewEn'];
    document.getElementById('summary-party-ind').textContent = pData.independent[currentLang === 'ko' ? 'overviewKo' : 'overviewEn'];

    // Render 6 Axes
    renderAxis('econ', alignment.axes.economy, currentLang === 'ko' ? '자율/감세 중심' : 'Free Market / Low Tax', currentLang === 'ko' ? '복지/안전망 중심' : 'Worker / Safety Net');
    renderAxis('safety', alignment.axes.safety, currentLang === 'ko' ? '경찰 지원/엄벌주의' : 'Strict / Police Focused', currentLang === 'ko' ? '사법 개혁/원인 해결' : 'Reform & Prevention');
    renderAxis('edu', alignment.axes.education, currentLang === 'ko' ? '성적/시험 능력주의' : 'Strict Meritocracy', currentLang === 'ko' ? '다양성/다면 평가' : 'Holistic Equity');
    renderAxis('foreign', alignment.axes.foreign_policy, currentLang === 'ko' ? '군사 억제/동맹 강화' : 'Military Deterrence', currentLang === 'ko' ? '외교 대화/평화 모색' : 'Diplomacy & Dialogue');
    renderAxis('imm', alignment.axes.immigration, currentLang === 'ko' ? '국경 통제/전문인력' : 'Enforcement & Skills', currentLang === 'ko' ? '드리머 구제/가족 초청' : 'Pathways & DACA');
    renderAxis('values', alignment.axes.values, currentLang === 'ko' ? '전통 가치/종교 자유' : 'Traditional Values', currentLang === 'ko' ? '개인 권리/생식권' : 'Civil Freedom & Rights');
  }

  function renderAxis(axisId, score, positiveLabel, negativeLabel) {
    const pointer = document.getElementById(`pointer-${axisId}`);
    const valText = document.getElementById(`axis-val-${axisId}`);
    if (!pointer || !valText) return;

    // score is -100 to +100. Convert to percentage: -100 -> 0%, 0 -> 50%, +100 -> 100%
    const pct = Math.max(5, Math.min(95, 50 + (score / 2)));
    pointer.style.left = `${pct}%`;

    if (score > 15) {
      valText.textContent = `${positiveLabel} (+${Math.round(score)})`;
    } else if (score < -15) {
      valText.textContent = `${negativeLabel} (${Math.round(score)})`;
    } else {
      valText.textContent = currentLang === 'ko' ? "균형적 / 중도 (Balanced)" : "Balanced / Centrist";
    }
  }

  function animateCounter(elementId, targetValue) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let start = 0;
    const duration = 800; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        el.textContent = `${targetValue}%`;
        clearInterval(timer);
      } else {
        el.textContent = `${Math.round(start)}%`;
      }
    }, stepTime);
  }

  // --- PLATFORM COMPARISON TABLE ---
  function renderPlatformTable() {
    const tbody = document.getElementById('matrix-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    const demStances = VOTER_DATA.partyPlatforms.democratic.stances;
    const repStances = VOTER_DATA.partyPlatforms.republican.stances;

    demStances.forEach((stance, idx) => {
      const repStance = repStances[idx] || {};
      const tr = document.createElement('tr');

      const topicTd = document.createElement('td');
      topicTd.className = 'matrix-topic-cell';
      topicTd.textContent = stance.topic;

      const demTd = document.createElement('td');
      demTd.className = 'matrix-dem-cell';
      demTd.textContent = currentLang === 'ko' ? stance.ko : stance.en;

      const repTd = document.createElement('td');
      repTd.className = 'matrix-rep-cell';
      repTd.textContent = currentLang === 'ko' ? repStance.ko : repStance.en;

      tr.appendChild(topicTd);
      tr.appendChild(demTd);
      tr.appendChild(repTd);
      tbody.appendChild(tr);
    });
  }

  // --- PLEDGE TO VOTE HANDLER ---
  pledgeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = pledgeInput.value.trim();
    if (!name) return;

    certDisplayName.textContent = name;
    pledgeCertBox.classList.add('active');
    pledgeCertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Initial Load
  updateLanguage('en');
  renderPlatformTable();
});
