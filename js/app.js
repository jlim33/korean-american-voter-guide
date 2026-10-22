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
      footerCopy: "© 2026 Korean American Voter Hub. Dedicated to the Korean American Community. Nonpartisan Educational Resource.",
      navCandidates: "Candidates",
      navBayarea: "🌉 Bay Area",
      candBadge: "Candidate Positions on Key Controversies",
      candTitle: "Where Candidates Stand on Korean American Priorities",
      candDesc: "Direct stances on affirmative action, retail crime & public safety, small business tax relief, US-ROK defense deterrence, and immigration.",
      candFilterAll: "All Candidates (전체 후보)",
      candFilterSenate: "CA U.S. Senate (Schiff vs Garvey)",
      candFilterCA16: "CA-16 Silicon Valley (Liccardo vs Low)",
      candFilterKorean: "Korean American Leaders (Young Kim, Andy Kim)",
      bayBadge: "Bay Area Korean American Voter Guide",
      bayTitle: "Find Your Bay Area District & Voting Centers",
      bayDesc: "Search by your Bay Area 5-digit zip code or city name to identify local congressional districts, assigned official ballot drop boxes, and Korean language voter services.",
      bayPlaceholder: "Enter Bay Area Zip (e.g., 95051, 95014, Fremont, 94118...)",
      btnZipSearch: "Search",
      btnOfficialRov: "Official County ROV Portal"
    },
    ko: {
      langBtn: "English",
      brandMain: "한인 유권자 나침반",
      brandSub: "KA Voter Hub",
      navQuiz: "테스트 시작",
      navCandidates: "주요 후보별 공약",
      navBayarea: "🌉 베이지역 가이드",
      candBadge: "주요 후보별 핵심 쟁점 정책 및 입장",
      candTitle: "한인 커뮤니티 핵심 현안에 대한 후보자들의 입장",
      candDesc: "대입 어퍼머티브 액션, 소매 절도 처벌(Prop 36), 소상공인 감세, 한미동맹 억지력 및 이민 정책에 대한 후보자별 공식 정견.",
      candFilterAll: "전체 후보 (All Candidates)",
      candFilterSenate: "캘리포니아 연방 상원 (쉬프 vs 가비)",
      candFilterCA16: "CA-16 실리콘밸리 (리카르도 vs 로우)",
      candFilterKorean: "대표 한국계 연방 의원 (영 김, 앤디 김)",
      bayBadge: "샌프란시스코 베이지역 한인 유권자 가이드",
      bayTitle: "베이지역 우편 투표함 및 관할 선거구 찾기",
      bayDesc: "베이지역 5자리 우편번호(Zip Code)나 도시 이름을 입력하시면 관할 연방 하원/주 의회 선거구, 공식 투표 센터, 한인 드롭박스 및 한국어 지원을 안내해 드립니다.",
      bayPlaceholder: "우편번호 또는 도시 입력 (예: 95051, 95014, 쿠퍼티노, 산호세...)",
      btnZipSearch: "검색",
      btnOfficialRov: "카운티 선거관리국(ROV) 공식 사이트",
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

    document.getElementById('nav-candidates-text').textContent = t.navCandidates;
    document.getElementById('nav-bayarea-text').textContent = t.navBayarea;

    document.getElementById('cand-super-badge').textContent = t.candBadge;
    document.getElementById('cand-main-title').textContent = t.candTitle;
    document.getElementById('cand-main-desc').textContent = t.candDesc;
    document.getElementById('cand-filter-all').textContent = t.candFilterAll;
    document.getElementById('cand-filter-senate').textContent = t.candFilterSenate;
    document.getElementById('cand-filter-ca16').textContent = t.candFilterCA16;
    document.getElementById('cand-filter-korean').textContent = t.candFilterKorean;

    document.getElementById('bay-super-badge').textContent = t.bayBadge;
    document.getElementById('bay-main-title').textContent = t.bayTitle;
    document.getElementById('bay-main-desc').textContent = t.bayDesc;
    document.getElementById('input-bayarea-zip').placeholder = t.bayPlaceholder;
    document.getElementById('btn-zip-search-text').textContent = t.btnZipSearch;

    // Refresh platform table, candidates, bay area, and results if active
    renderPlatformTable();
    renderCandidates(currentCandFilter);
    renderZipResult(currentZipQuery);
    if (resultsDashboard.classList.contains('active')) {
      renderResults();
    }
  }

  // State for Candidate and Bay Area tools
  let currentCandFilter = 'all';
  let currentZipQuery = '95051';

  // Helper: Generate candidate card HTML
  function generateCandidateCardHtml(cand, contextBadge = '') {
    const avatarEmoji = cand.party === 'dem' ? '🔵' : '🔴';
    const partyPill = cand.party === 'dem' 
      ? (currentLang === 'ko' ? '민주당' : 'Democrat') 
      : (currentLang === 'ko' ? '공화당' : 'Republican');

    const topicTitles = {
      affirmative_action: currentLang === 'ko' ? '대입 입시 & 능력주의' : 'Affirmative Action & Merit',
      public_safety: currentLang === 'ko' ? '치안 & 상점 절도(Prop 36)' : 'Public Safety & Retail Crime',
      small_business_tax: currentLang === 'ko' ? '소상공인 세제 & 규제' : 'Small Business Taxes & Wages',
      us_korea_alliance: currentLang === 'ko' ? '한미동맹 & 대북 억제' : 'U.S.–ROK Alliance & Defense',
      immigration_reform: currentLang === 'ko' ? '이민 정책 & DACA' : 'Immigration & Dreamers'
    };

    let stancesHtml = '';
    for (const [topicKey, stanceData] of Object.entries(cand.stances)) {
      const topicLabel = topicTitles[topicKey] || topicKey;
      const verdict = currentLang === 'ko' ? stanceData.stanceKo : stanceData.stanceEn;
      const detail = currentLang === 'ko' ? stanceData.detailKo : stanceData.detailEn;

      stancesHtml += `
        <div class="stance-pill-box">
          <div class="stance-topic-header">
            <span class="stance-topic-title">${topicLabel}</span>
            <span class="stance-verdict-tag">${verdict}</span>
          </div>
          <p class="stance-detail-text">${detail}</p>
        </div>
      `;
    }

    return `
      <div class="candidate-card ${cand.party}">
        <div class="candidate-header">
          <div class="candidate-avatar">${avatarEmoji}</div>
          <div class="candidate-info">
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.2rem;">
              <span class="candidate-race-badge">${currentLang === 'ko' ? cand.raceKo : cand.raceEn}</span>
              <span class="party-badge-pill" style="font-size: 0.72rem; padding: 0.15rem 0.5rem;">${partyPill}</span>
              ${contextBadge ? `<span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-full); background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-weight: 700;">${contextBadge}</span>` : ''}
            </div>
            <h4>${currentLang === 'ko' ? cand.nameKo : cand.nameEn}</h4>
            <div class="candidate-tagline">${currentLang === 'ko' ? cand.taglineKo : cand.taglineEn}</div>
          </div>
        </div>
        <p class="candidate-bio">${currentLang === 'ko' ? cand.bioKo : cand.bioEn}</p>
        <div class="candidate-stances-list">
          <h5 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.25rem;">
            ${currentLang === 'ko' ? '주요 쟁점별 공식 입장' : 'Official Issue Stances on Controversies'}
          </h5>
          ${stancesHtml}
        </div>
      </div>
    `;
  }

  // --- CANDIDATE POLICIES RENDERING (Main Hub) ---
  function renderCandidates(filter = 'all') {
    currentCandFilter = filter;
    const container = document.getElementById('candidates-grid-container');
    if (!container) return;

    container.innerHTML = '';
    const allCandidates = VOTER_DATA.candidates || [];

    const filtered = allCandidates.filter(c => {
      if (filter === 'all') return true;
      if (filter === 'senate') return c.id === 'schiff' || c.id === 'garvey';
      if (filter === 'ca16') return c.id === 'liccardo' || c.id === 'low';
      if (filter === 'korean') return c.id === 'young_kim' || c.id === 'andy_kim';
      return true;
    });

    filtered.forEach(cand => {
      container.insertAdjacentHTML('beforeend', generateCandidateCardHtml(cand));
    });
  }

  // Filter Buttons Event
  const filterBtns = document.querySelectorAll('.btn-cand-filter');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCandidates(btn.dataset.filter);
    });
  });

  // --- BAY AREA ZIP CODE EXPLORER RENDERING ---
  function renderZipResult(query) {
    currentZipQuery = query ? query.trim() : '95051';
    const container = document.getElementById('bayarea-result-container');
    if (!container) return;

    const zipList = VOTER_DATA.bayAreaZipCodes || [];
    const cleanZip = currentZipQuery.replace(/[^\w\s]/gi, '').trim();
    const qLower = cleanZip.toLowerCase();

    // Sync active state on quick chip buttons
    const zipChips = document.querySelectorAll('.chip-btn');
    zipChips.forEach(chip => {
      if (chip.dataset.zip === currentZipQuery || chip.dataset.zip === cleanZip) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    // 1. Direct match by 5-digit zip or city name
    const match = zipList.find(z => z.zip === cleanZip || z.city.toLowerCase().includes(qLower));

    if (match) {
      const hubText = currentLang === 'ko' ? match.koreanHubKo : match.koreanHubEn;
      const centerText = currentLang === 'ko' ? match.voteCenterKo : match.voteCenterEn;
      const dropText = currentLang === 'ko' ? match.dropBoxKo : match.dropBoxEn;
      const ballotNote = currentLang === 'ko' ? match.ballotNoteKo : match.ballotNoteEn;

      // Resolve candidate list for this zip
      const allCands = VOTER_DATA.candidates || [];
      const candIds = match.candidateIds && match.candidateIds.length > 0 
        ? match.candidateIds 
        : ['schiff', 'garvey', 'liccardo', 'low'];

      const candObjects = candIds
        .map(id => allCands.find(c => c.id === id))
        .filter(Boolean);

      const candidateCardsHtml = candObjects
        .map(c => {
          let badge = '';
          if (c.id === 'schiff' || c.id === 'garvey') {
            badge = currentLang === 'ko' ? '캘리포니아 전역 공통' : 'CA Statewide Ballot';
          } else if (c.id === 'liccardo' || c.id === 'low') {
            badge = currentLang === 'ko' ? '실리콘밸리 하원' : 'Silicon Valley CA-16';
          }
          return generateCandidateCardHtml(c, badge);
        })
        .join('');

      container.innerHTML = `
        <div class="zip-result-header">
          <div class="zip-title-group">
            <h3>📍 ${match.city}, CA ${match.zip} (${match.county})</h3>
            <div class="zip-hub-badge">
              <span>🇰🇷</span>
              <span>${hubText}</span>
            </div>
          </div>
          <a href="${match.countyRovUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
            <span>${UI_TEXT[currentLang].btnOfficialRov}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>

        <div class="zip-details-grid">
          <div class="zip-detail-item">
            <h5>${currentLang === 'ko' ? '관할 선거구' : 'Electoral Districts'}</h5>
            <p style="color: #60a5fa;">${match.district}</p>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
              State Senate: ${match.stateSenate} | State Assembly: ${match.stateAssembly}
            </div>
          </div>

          <div class="zip-detail-item">
            <h5>${currentLang === 'ko' ? '지정 공식 투표 센터' : 'Official Voting Center'}</h5>
            <p>${centerText}</p>
            <div style="font-size: 0.78rem; color: #34d399; margin-top: 0.2rem;">
              ${currentLang === 'ko' ? '✓ 조기 투표 및 선거일 당일 투표 가능' : '✓ Early voting & Election day open'}
            </div>
          </div>

          <div class="zip-detail-item">
            <h5>${currentLang === 'ko' ? '가까운 공식 우편투표함 (Drop Box)' : 'Official 24/7 Drop Box'}</h5>
            <p>${dropText}</p>
            <div style="font-size: 0.78rem; color: #fbbf24; margin-top: 0.2rem;">
              ${currentLang === 'ko' ? '✓ 우표 불필요, 상시 투함 가능' : '✓ No postage required, 24/7 drive-thru'}
            </div>
          </div>
        </div>

        <div style="background: rgba(59, 130, 246, 0.08); border-radius: var(--radius-sm); padding: 0.85rem 1rem; border-left: 3px solid #3b82f6; font-size: 0.85rem; margin-bottom: 1.5rem;">
          <strong style="color: #60a5fa;">${currentLang === 'ko' ? '한국어 통역 및 투표용지 지원:' : 'Language Access Rights:'}</strong> 
          <span style="color: var(--text-secondary);">${match.languageSupport}</span>
        </div>

        <!-- CANDIDATES ON BALLOT FOR THIS ZIP CODE -->
        <div class="zip-candidates-section" style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.75rem;">
          <div class="zip-cand-header-box" style="margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.35rem;">
              <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; font-weight: 700; color: #60a5fa; text-transform: uppercase; letter-spacing: 0.05em;">
                <span>🗳️</span>
                <span>${currentLang === 'ko' ? '내 투표용지 후보자 및 핵심 쟁점별 공약' : 'Candidates on Your Ballot & Issue Stances'}</span>
              </div>
              <span class="zip-ballot-race-tag" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.78rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: var(--radius-full);">
                ${currentLang === 'ko' ? '선거구 맞춤 후보자' : 'Local Ballot Matches'}
              </span>
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 800; margin: 0 0 0.35rem; color: var(--text-primary);">
              ${currentLang === 'ko' ? `${match.city} (우편번호 ${match.zip}) 유권자 투표용지 후보` : `Key Candidates for ${match.city} (Zip: ${match.zip}) Voters`}
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 0;">
              ${ballotNote}
            </p>
          </div>

          <div class="candidates-grid">
            ${candidateCardsHtml}
          </div>

          <div style="margin-top: 1.75rem; padding: 1.15rem 1.25rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <strong style="color: var(--text-primary); font-size: 0.9rem;">
                ${currentLang === 'ko' ? '🇺🇸 한국계 대표 의원(영 김, 앤디 김)의 정책도 확인해 보세요' : '🇺🇸 Want to view Korean American leaders (Young Kim, Andy Kim)?'}
              </strong>
              <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
                ${currentLang === 'ko' ? '초당적으로 활약 중인 대표적 한국계 연방 의원들의 공약을 비교할 수 있습니다.' : 'Compare issue stances of prominent Korean American national lawmakers.'}
              </div>
            </div>
            <a href="#candidates-hub" class="btn-secondary" style="font-size: 0.82rem; padding: 0.45rem 0.9rem;">
              <span>${currentLang === 'ko' ? '전체 후보 매트릭스 보기' : 'View Full Candidate Matrix'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      `;
    } else {
      // 2. Generic California zip code detection (starts with 90-96)
      const isCaZip = /^9[0-6]\d{3}$/.test(cleanZip);
      const allCands = VOTER_DATA.candidates || [];
      const candObjects = isCaZip 
        ? [allCands.find(c => c.id === 'schiff'), allCands.find(c => c.id === 'garvey'), allCands.find(c => c.id === 'liccardo'), allCands.find(c => c.id === 'low')].filter(Boolean)
        : allCands.slice(0, 4);

      const candidateCardsHtml = candObjects
        .map(c => generateCandidateCardHtml(c, isCaZip ? (currentLang === 'ko' ? '캘리포니아 후보' : 'CA Candidate') : ''))
        .join('');

      container.innerHTML = `
        <div class="zip-result-header">
          <div class="zip-title-group">
            <h3>📍 ${isCaZip ? `California Voter (Zip: ${cleanZip})` : `Voter Guide (Zip: ${cleanZip || currentZipQuery})`}</h3>
            <div class="zip-hub-badge">
              <span>🇺🇸</span>
              <span>${isCaZip ? (currentLang === 'ko' ? '캘리포니아 등록 유권자' : 'California Registered Voter') : (currentLang === 'ko' ? '전국 한인 유권자' : 'U.S. Voter Hub')}</span>
            </div>
          </div>
          <a href="https://voterstatus.sos.ca.gov/" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
            <span>${currentLang === 'ko' ? '캘리포니아 공식 유권자 포털' : 'Official CA Voter Portal'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>

        <div style="background: rgba(59, 130, 246, 0.08); border-radius: var(--radius-sm); padding: 1rem 1.25rem; border-left: 3px solid #3b82f6; font-size: 0.9rem; margin-bottom: 1.5rem;">
          <strong style="color: #60a5fa;">${isCaZip ? (currentLang === 'ko' ? '캘리포니아 전역 공통 투표 안내:' : 'California Statewide Ballot Notice:') : (currentLang === 'ko' ? '안내:' : 'Notice:')}</strong>
          <span style="color: var(--text-secondary); margin-left: 0.35rem;">
            ${isCaZip 
              ? (currentLang === 'ko' 
                  ? `입력하신 우편번호 <strong>${cleanZip}</strong>는 캘리포니아 관할입니다. 캘리포니아주 모든 유권자의 투표용지에는 <strong>연방 상원의원 선거 (아담 쉬프 vs 스티브 가비)</strong>가 공통으로 포함됩니다. 아래에서 주요 후보들의 쟁점별 입장을 확인하세요.`
                  : `Your zip code <strong>${cleanZip}</strong> is in California. All registered California voters vote on the statewide <strong>U.S. Senate race (Adam Schiff vs Steve Garvey)</strong>. See official candidate stances below:`)
              : (currentLang === 'ko'
                  ? `"${currentZipQuery}"에 대한 특정 베이지역 투표소 정보는 없지만, 아래에서 연방 상원 및 핵심 선거구 후보자들의 쟁점별 공약을 바로 확인하실 수 있습니다.`
                  : `While specific local voting center data for "${currentZipQuery}" was not found, the key federal candidates and their policy stances are shown below:`)}
          </span>
        </div>

        <!-- CANDIDATES DISPLAY -->
        <div class="zip-candidates-section" style="margin-top: 1rem;">
          <div class="zip-cand-header-box" style="margin-bottom: 1.5rem;">
            <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; font-weight: 700; color: #60a5fa; text-transform: uppercase; margin-bottom: 0.35rem;">
              <span>🗳️</span>
              <span>${currentLang === 'ko' ? '주요 후보자 쟁점별 정책 및 정견' : 'Key Candidate Stances on Controversies'}</span>
            </div>
            <h3 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 0.35rem; color: var(--text-primary);">
              ${currentLang === 'ko' ? '캘리포니아 및 베이지역 핵심 후보 정견 비교' : 'Featured Candidates on Your California Ballot'}
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 0;">
              ${currentLang === 'ko' ? '어퍼머티브 액션, 상점 절도(Prop 36), 소상공인 감세, 한미동맹, 이민 등 5대 쟁점에 대한 공식 정견입니다.' : 'Official stances on Affirmative Action, Retail Theft (Prop 36), Taxes, US-ROK Alliance & Immigration.'}
            </p>
          </div>

          <div class="candidates-grid">
            ${candidateCardsHtml}
          </div>
        </div>

        <div style="margin-top: 1.5rem; text-align: center;">
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.75rem;">
            ${currentLang === 'ko' ? '베이지역 대표 10개 한인 밀집지 빠른 검색:' : 'Quickly jump to top Bay Area Korean hubs:'}
          </p>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.65rem;">
            <a href="https://rovservices.sccgov.org/" target="_blank" rel="noopener" class="btn-control">Santa Clara County ROV</a>
            <a href="https://www.acgov.org/rov/" target="_blank" rel="noopener" class="btn-control">Alameda County ROV</a>
            <a href="https://sfelections.sfgov.org/" target="_blank" rel="noopener" class="btn-control">San Francisco Elections</a>
            <a href="https://www.smcacre.gov/elections" target="_blank" rel="noopener" class="btn-control">San Mateo County</a>
            <a href="https://www.contracostavote.gov/" target="_blank" rel="noopener" class="btn-control">Contra Costa County</a>
          </div>
        </div>
      `;
    }
  }

  // Zip Search Event Handlers
  const zipInput = document.getElementById('input-bayarea-zip');
  const btnZipSearch = document.getElementById('btn-search-zip');
  const zipChips = document.querySelectorAll('.chip-btn');

  if (btnZipSearch && zipInput) {
    btnZipSearch.addEventListener('click', () => {
      renderZipResult(zipInput.value);
    });

    zipInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        renderZipResult(zipInput.value);
      }
    });
  }

  zipChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const zip = chip.dataset.zip;
      if (zipInput) zipInput.value = zip;
      renderZipResult(zip);
    });
  });

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
  renderCandidates('all');
  renderZipResult('95051');
});
