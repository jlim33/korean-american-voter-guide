/**
 * Korean American Voter Hub - Data & Translations
 * Bilingual: English and Korean (한국어)
 */

const VOTER_DATA = {
  // Questions with nuanced perspectives and cultural context
  questions: [
    {
      id: "affirmative_action",
      category: "education",
      en: {
        title: "College Admissions & Meritocracy",
        topic: "Affirmative Action & Standardized Testing",
        context: "In landmark cases (like SFFA v. Harvard), Asian American students were at the center of the debate over whether race-conscious admissions unfairly penalize high-achieving Asian applicants versus fostering broader campus diversity.",
        question: "University admissions should be strictly based on academic merit, standardized test scores, and extracurricular achievements, without considering race or ethnic diversity.",
        proLabel: "Strongly Pro-Merit (Conservative / Merit-First)",
        conLabel: "Strongly Pro-Diversity (Progressive / Holistic)",
        proSummary: "Eliminates racial quotas and unfair standards; rewards hard work and academic excellence regardless of background.",
        conSummary: "Ensures campuses reflect societal diversity; accounts for systemic disadvantages and historical inequities."
      },
      ko: {
        title: "대학 입시와 능력주의",
        topic: "소수인종 우대정책(어퍼머티브 액션) 및 표준화 시험",
        context: "하버드 대학 입시 소송 등에서 한인을 포함한 아시아계 학생들은 높은 학업 성취도에도 불구하고 인종 다양성 정책으로 불이익을 받았는지 여부를 두고 격렬한 논쟁의 중심에 있었습니다.",
        question: "대학 입학 사정은 인종이나 출신 배경을 고려하지 않고 오직 학업 성적, 표준화 시험 점수, 개인의 성취도 등 철저한 능력주의 기준으로 이루어져야 한다.",
        proLabel: "철저한 능력주의 지지 (보수 / 공정성 중심)",
        conLabel: "다양성 및 형평성 지지 (진보 / 포용성 중심)",
        proSummary: "인종별 차별적 기준을 없애고 학생의 노력과 우수한 학업 성과를 공정하게 보상합니다.",
        conSummary: "다양한 사회 계층의 캠퍼스 진입을 보장하고 구조적 불평등과 역사적 격차를 완화합니다."
      },
      weights: {
        rep: 1.0,  // Agree = align with conservative/merit
        dem: -1.0, // Disagree = align with progressive/equity
        ind: 0.2
      }
    },
    {
      id: "public_safety",
      category: "safety",
      en: {
        title: "Public Safety & Criminal Justice",
        topic: "Retail Crime Penalties vs Criminal Justice Reform",
        context: "A significant percentage of Korean Americans operate retail shops, dry cleaners, grocery markets, and restaurants in urban corridors. Issues of shoplifting, smash-and-grab thefts, and anti-Asian violence remain top concerns.",
        question: "State and local governments should enact harsher criminal penalties for repeat retail theft and significantly increase police department funding and patrols.",
        proLabel: "Tough on Crime & Increase Police",
        conLabel: "Justice Reform & Systemic Solutions",
        proSummary: "Protects vulnerable small business owners, deters property crime, and restores street-level safety.",
        conSummary: "Over-policing disproportionately harms marginalized communities; investments should focus on poverty, mental health, and rehabilitation."
      },
      ko: {
        title: "공공 안전 및 형사 사법 제도",
        topic: "소매 절도 처벌 강화 vs 사법 개혁 및 사회 복지",
        context: "많은 재미 한인들이 도심과 상업 지역에서 세탁소, 그로서리, 뷰티서플라이, 식당 등 자영업을 운영하고 있습니다. 최근 빈번한 상점 털이, 절도 및 아시아계 혐오범죄는 한인 소상공인들의 생계와 직결된 핵심 문제입니다.",
        question: "주 및 지방정부는 상습적인 소매점 절도와 재산 범죄에 대한 처벌 수위를 대폭 강화하고, 경찰 예산 및 순찰 인력을 대폭 확충해야 한다.",
        proLabel: "치안 강화 및 엄벌주의 (보수적 입장)",
        conLabel: "사법 개혁 및 근본 원인 해결 (진보적 입장)",
        proSummary: "자영업자를 보호하고 재산 범죄를 엄단하여 거리와 상권의 일상적 안전을 회복합니다.",
        conSummary: "과도한 경찰력 투입보다 빈곤, 정신건강, 중독 치료 등 범죄의 근본적인 사회적 원인을 해결해야 합니다."
      },
      weights: {
        rep: 1.0,
        dem: -0.9,
        ind: 0.3
      }
    },
    {
      id: "small_business_tax",
      category: "economy",
      en: {
        title: "Small Business & Economic Regulation",
        topic: "Lower Taxes & Deregulation vs Living Wage & Worker Protections",
        context: "Korean Americans boast one of the highest rates of self-employment and small business ownership among all ethnic groups in the United States.",
        question: "Government should reduce corporate and small-business tax rates and minimize regulatory burdens, even if it limits mandatory paid benefits or minimum wage increases.",
        proLabel: "Pro-Business & Market Freedom",
        conLabel: "Pro-Worker & Safety Net",
        proSummary: "Lowers operational overhead, fosters entrepreneurship, and allows business owners to survive tight profit margins.",
        conSummary: "Ensures working families earn a dignified living wage with essential healthcare and paid family leave protections."
      },
      ko: {
        title: "소상공인 경제 정책 및 규제",
        topic: "세금 감면 및 규제 완화 vs 최저임금 인상 및 근로자 보호",
        context: "재미 한인 커뮤니티는 미국 내 어느 이민 집단보다도 자영업 및 중소기업 운영 비율이 높습니다. 최저임금 규정, 고용주 부담금, 상업세 등은 한인 비즈니스의 존폐와 직결됩니다.",
        question: "정부는 기업 및 소상공인 법인세·상업세를 감면하고 규제를 완화해야 하며, 최저임금 급격한 인상이나 의무 복지 규제를 자제하여 기업의 자율성을 보장해야 한다.",
        proLabel: "친기업 및 시장 자율 (보수 / 소상공인 지향)",
        conLabel: "근로자 권익 및 안전망 강화 (진보 / 복지 지향)",
        proSummary: "운영 비용을 절감하여 소상공인의 생존을 돕고 고용과 민간 경제 활력을 촉진합니다.",
        conSummary: "일하는 가정이 생활 가능한 임금을 보장받고 유급 병가 등 필수적 사회 안전망을 누릴 수 있게 합니다."
      },
      weights: {
        rep: 1.0,
        dem: -1.0,
        ind: 0.1
      }
    },
    {
      id: "us_korea_alliance",
      category: "foreign_policy",
      en: {
        title: "U.S.–South Korea (ROK) Alliance & North Korea",
        topic: "Strong Military Deterrence vs Diplomatic Engagement",
        context: "South Korea's national security, extended nuclear deterrence, and trilateral cooperation with Japan directly impact peace on the Korean Peninsula and the emotional ties of Korean Americans.",
        question: "The U.S. should prioritize strong military deterrence, expanded joint military drills with South Korea, and firm pressure on North Korea, rather than unconditional diplomatic summits or sanctions relief.",
        proLabel: "Strong Deterrence & Ironclad Alliance",
        conLabel: "Diplomacy, Dialogue & Peace Process",
        proSummary: "Prevents North Korean aggression, protects freedom in the Indo-Pacific, and upholds clear democratic commitments.",
        conSummary: "De-escalates nuclear risks through diplomacy, fosters humanitarian cooperation, and works toward peace declarations and separated family reunions."
      },
      ko: {
        title: "한미동맹과 대북 외교 안보",
        topic: "강력한 군사 억제력 vs 외교적 대화 및 평화 프로세스",
        context: "한반도의 안보, 미국의 확장 억제(핵우산) 공약, 한미일 안보 협력은 한반도 평화와 재미 한인 이산가족 상봉 등 교포 사회의 깊은 관심사입니다.",
        question: "미국은 성급한 제재 완화나 조건 없는 정상회담보다, 강력한 군사 억제력과 한미 연합훈련 강화, 대북 제재 유지를 통해 한미동맹의 안보를 최우선해야 한다.",
        proLabel: "철통같은 군사 억제 및 원칙적 안보 (보수/강경)",
        conLabel: "외교적 대화 및 한반도 평화 구축 (진보/유화)",
        proSummary: "북한의 군사 도발을 사전에 억제하고 자유민주주의 동맹 체제를 굳건히 수호합니다.",
        conSummary: "군사적 긴장을 낮추고 외교적 대화와 인도적 지원, 종전 선언을 통해 평화적 공존과 이산가족 상봉을 모색해야 합니다."
      },
      weights: {
        rep: 0.9,
        dem: -0.7,
        ind: 0.1
      }
    },
    {
      id: "immigration_reform",
      category: "immigration",
      en: {
        title: "Immigration & Border Security",
        topic: "Merit-Based High-Skill Visas vs Broad Pathway to Legal Status & DACA",
        context: "Many Korean Americans immigrated through family reunification or skilled visas (E-2, H-1B, EB-5). At the same time, an estimated 100,000+ Korean Americans are currently undocumented, including thousands of DACA Dreamers.",
        question: "U.S. immigration policy should focus strictly on tight border enforcement and merit/employment-based visas, rather than granting pathways to citizenship for undocumented immigrants.",
        proLabel: "Strict Enforcement & Merit System",
        conLabel: "Humane Pathways & Dreamer Protection",
        proSummary: "Upholds the rule of law, stops illegal entries, and attracts highly skilled global talent who contribute immediately to the economy.",
        conSummary: "Protects vulnerable immigrant families, provides legal status to Dreamers brought as children, and honors family reunification values."
      },
      ko: {
        title: "이민 정책 및 국경 안보",
        topic: "국경 통제·취업 비자 우선 vs 서류미비자 구제(DACA) 및 가족 초청",
        context: "많은 한인들이 가족 초청이나 전문직 취업(E-2, H-1B, 영주권)으로 정착했지만, 동시에 10만 명 이상의 한인 서류미비자와 수천 명의 한인 청년 드리머(DACA)들이 체류 불안을 겪고 있습니다.",
        question: "미국의 이민 제도는 불법체류자에 대한 사면이나 시민권 경로 부여보다, 엄격한 국경 단속과 고숙련 기술/취업 중심의 능력 기반 이민을 우선해야 한다.",
        proLabel: "법치주의 및 전문인력 중심 (보수적 입장)",
        conLabel: "인도적 구제 및 이민자 권익 (진보적 입장)",
        proSummary: "국경 안보와 법치를 확립하고, 미국 경제에 기여하는 합법적 전문 인력을 체계적으로 유치합니다.",
        conSummary: "어릴 때 부모를 따라온 한인 드리머(DACA)와 장기 거주 서류미비 가정을 양지로 이끌어 인도적 구제를 제공해야 합니다."
      },
      weights: {
        rep: 1.0,
        dem: -1.0,
        ind: 0.0
      }
    },
    {
      id: "specialized_schools",
      category: "education",
      en: {
        title: "K-12 Education & Specialized Magnet Schools",
        topic: "Preserving Entrance Exams vs Lottery / Equity Admissions",
        context: "Asian American students, including many Korean Americans, constitute a significant majority in prestigious public exam schools (e.g., Stuyvesant in NYC, Thomas Jefferson in Virginia). Efforts to alter or eliminate testing criteria have sparked fierce community debates.",
        question: "Public school districts must preserve competitive, standardized test-based admissions for specialized gifted/magnet high schools without altering standards for racial balance.",
        proLabel: "Preserve Merit & Testing Standards",
        conLabel: "Holistic & Equitable Access",
        proSummary: "Provides an objective ladder of upward mobility for working-class immigrant families who sacrifice for academic preparation.",
        conSummary: "Single-test admissions reflect test-prep tutoring resources rather than innate potential; holistic criteria widen access to underrepresented students."
      },
      ko: {
        title: "공교육 특목고 입시 및 학부모 권리",
        topic: "특목고 시험 전형 유지 vs 추첨 및 형평성 입학제",
        context: "뉴욕의 스타이베선트, 버지니아의 토머스 제퍼슨(TJ) 등 명문 공립 특목고에는 성실히 노력한 한인 학생들의 비율이 높습니다. 최근 시험 전형 폐지나 추첨제 도입 시도는 한인 학부모들의 큰 반발을 불러일으켰습니다.",
        question: "공립 교육구는 명문 특목고 및 영재 프로그램의 경쟁 시험 선발 방식을 그대로 유지해야 하며, 인종 비율을 맞추기 위한 시험 폐지나 정원 할당을 배격해야 한다.",
        proLabel: "시험 전형 및 학업 표준 고수 (보수/학부모 중심)",
        conLabel: "포용적 기회 및 다면 평가 도입 (진보/형평성 중심)",
        proSummary: "사교육이나 배경이 아닌 순수 학생 노력과 실력에 따른 공정한 기회의 사다리를 보장합니다.",
        conSummary: "단 한 번의 시험이 학원 수강 능력에 좌우될 수 있으므로 다양한 배경의 학생들에게 균등한 교육 기회를 열어주어야 합니다."
      },
      weights: {
        rep: 0.9,
        dem: -0.8,
        ind: 0.3
      }
    },
    {
      id: "gun_control_rights",
      category: "safety",
      en: {
        title: "Second Amendment & Gun Regulations",
        topic: "Self-Defense Rights vs Assault Weapon Bans & Universal Background Checks",
        context: "The 1992 Los Angeles Riots (Sa-I-Gu / 4.29) deeply shaped Korean American consciousness, where business owners were forced to defend Koreatown when law enforcement retreated. Conversely, rising modern mass shootings demand common-sense restrictions.",
        question: "Law-abiding citizens' Second Amendment rights to own firearms for self-defense should be preserved without imposing bans on common firearms or excessive waiting periods.",
        proLabel: "Protect 2nd Amendment Self-Defense",
        conLabel: "Enact Strict Gun Safety Laws",
        proSummary: "Empowers citizens to protect their families, homes, and businesses when police are unable or slow to respond.",
        conSummary: "Reduces gun violence, saves lives, and stops mass shootings through universal background checks, red flag laws, and assault weapon limits."
      },
      ko: {
        title: "수정헌법 제2조 총기 소지권과 총기 규제",
        topic: "자위권 차원의 총기 소유 vs 공격용 총기 규제 및 신원조회",
        context: "1992년 4·29 LA 폭동(사이구) 당시 공권력이 철수한 상황에서 코리아타운을 지키기 위해 자위 수단을 동원했던 아픈 역사는 한인 1세대의 기억에 깊이 남아있습니다. 반면 현대의 잇따른 총기 난사는 강력한 규제를 요구하고 있습니다.",
        question: "준법 시민이 자신과 가족, 사업장을 보호하기 위한 총기 소지 권리는 침해되지 않아야 하며, 과도한 총기 소지 제한이나 구매 대기 기간을 강제해서는 안 된다.",
        proLabel: "총기 소지 자위권 옹호 (보수적 시각)",
        conLabel: "엄격한 총기 규제 및 안전법 제정 (진보적 시각)",
        proSummary: "치안 공백 상황에서도 선량한 시민이 가족과 자산을 지킬 수 있는 헌법상 기본 권리를 보장합니다.",
        conSummary: "보편적 신원조회와 공격용 총기 금지 등을 통해 무고한 생명을 앗아가는 총기 참사를 예방해야 합니다."
      },
      weights: {
        rep: 1.0,
        dem: -1.0,
        ind: 0.1
      }
    },
    {
      id: "healthcare_eldercare",
      category: "healthcare",
      en: {
        title: "Healthcare, Medicare & Eldercare",
        topic: "Government Universal Coverage vs Free-Market Health Accounts",
        context: "A significant portion of older Korean Americans rely on Medicare, Medicaid, and In-Home Supportive Services (IHSS) with dedicated Korean-language speaking caregivers.",
        question: "The federal government should expand public healthcare programs, cap prescription drug costs, and provide universal public health coverage even if it requires higher tax revenues.",
        proLabel: "Expand Government Healthcare (Progressive)",
        conLabel: "Market-Driven Healthcare (Conservative)",
        proSummary: "Guarantees that every family and senior citizen receives necessary medical and nursing care regardless of income.",
        conSummary: "Government-run healthcare leads to bloated spending, long wait times, and stifles medical innovation and private insurance choice."
      },
      ko: {
        title: "의료보험, 메디케어 및 한인 시니어 케어",
        topic: "정부 주도 보편적 의료 지원 vs 시장 경쟁 기반 민간 의료",
        context: "많은 한인 시니어들이 메디케어, 메디케이드(메디칼), 그리고 한국어가 가능한 가정보조(IHSS) 서비스에 의존하고 있습니다. 처방약값과 노후 간병비는 한인 가정의 큰 부담입니다.",
        question: "정부는 공공 의료보험(메디케어/메디케이드) 혜택을 확대하고 처방약 가격을 통제해야 하며, 필요하다면 세금을 더 거두더라도 보편적 의료 보장제를 추진해야 한다.",
        proLabel: "정부 의료 보장 및 복지 확대 (진보적 입장)",
        conLabel: "시장 중심 민간 선택권 존중 (보수적 입장)",
        proSummary: "소득에 관계없이 모든 노인과 가정이 양질의 의료와 간병 서비스를 받을 수 있도록 안전망을 구축합니다.",
        conSummary: "정부 개입 확대로 인한 세금 부담과 재정 적자를 막고, 민간 경쟁을 통해 의료 서비스의 질과 선택권을 높여야 합니다."
      },
      weights: {
        rep: -0.9,
        dem: 1.0,
        ind: 0.2
      }
    },
    {
      id: "traditional_values_reproductive",
      category: "values",
      en: {
        title: "Social Values & Reproductive Rights",
        topic: "Faith-Based Traditional Values vs Civil Liberties & Abortion Rights",
        context: "Korean American communities encompass strong cultural traditions and active churches, while younger generations heavily champion gender equality, reproductive freedom, and LGBTQ+ protections.",
        question: "Government policy should uphold traditional family structures and religious liberties, rather than expanding federal legal mandates regarding abortion rights and gender identity.",
        proLabel: "Pro-Tradition & Religious Freedom",
        conLabel: "Pro-Choice & Equal Civil Rights",
        proSummary: "Protects unborn life, honors religious conscience, and preserves traditional cultural foundations.",
        conSummary: "Protects bodily autonomy, reproductive healthcare access, and safeguards full civil rights for all individuals."
      },
      ko: {
        title: "사회적 가치관 및 생식권/종교 자유",
        topic: "전통적 가정관·종교 자유 vs 여성의 자기결정권 및 성평등",
        context: "한인 사회는 활발한 한인 교회와 전통적 유교적 가족관을 중시하는 세대와, 개인의 인권, 여성의 낙태권/생식권, 성소수자 평등을 중시하는 차세대가 함께 공존하고 있습니다.",
        question: "정부 정책은 연방 차원의 낙태권 보장이나 젠더 정체성 관련 의무화보다, 전통적인 가정 가치관과 종교적 양심의 자유를 우선적으로 존중하고 수호해야 한다.",
        proLabel: "전통적 가치관 및 종교 자유 수호 (보수적 시각)",
        conLabel: "개인의 자유 및 생식권·평등 보장 (진보적 시각)",
        proSummary: "태아의 생명을 보호하고 종교와 신앙의 자유, 전통적 공동체의 가치를 존중합니다.",
        conSummary: "여성의 자기 몸에 대한 결정권과 의료 접근성을 보장하고 모든 개인의 차별 없는 평등권을 실현합니다."
      },
      weights: {
        rep: 1.0,
        dem: -1.0,
        ind: 0.0
      }
    },
    {
      id: "estate_capital_tax",
      category: "economy",
      en: {
        title: "Wealth, Capital Gains & Estate Taxes",
        topic: "Protecting Generational Family Wealth vs Taxing High Wealth",
        context: "Many first-generation Korean Americans accumulated real estate and business assets through decades of grueling 14-hour workdays, hoping to pass their hard-earned legacy to their children without heavy estate taxes.",
        question: "The federal estate tax (inheritance tax) and capital gains taxes on real estate should be kept low to enable families to pass their accumulated wealth down to the next generation without penalty.",
        proLabel: "Protect Family Inheritance & Capital Gains",
        conLabel: "Tax Wealth to Fund Public Investments",
        proSummary: "Honors the immigrant dream of building multi-generational security and prevents double taxation on previously taxed income.",
        conSummary: "Prevents aristocratic dynastic wealth accumulation and provides necessary revenue for public education and infrastructure."
      },
      ko: {
        title: "자산 승계, 양도소득세 및 상속세",
        topic: "이민 세대 자산 승계 보호 vs 부유층 과세 및 공공 재정 확충",
        context: "한인 1세대는 하루 14시간씩 일하며 평생 피땀 흘려 마련한 주택, 상가, 비즈니스를 자녀들에게 온전히 물려주어 세대 간 경제적 자립을 이루고자 하는 열망이 매우 강합니다.",
        question: "연방 상속세(Estate Tax)와 부동산 양도소득세는 낮게 유지되어야 하며, 평생 일군 자산이 자녀 세대로 온전히 전수될 수 있도록 징벌적 세금을 피해야 한다.",
        proLabel: "자산 승계 보호 및 상속세 인하 (보수적 입장)",
        conLabel: "부의 재분배 및 공공 투자 (진보적 입장)",
        proSummary: "피땀 흘린 이민자의 성취를 지켜주고, 이미 소득세를 낸 자산에 대한 이중과세를 방지합니다.",
        conSummary: "부의 세습과 양극화를 방지하고, 공공 교육과 복지 예산 확보를 위해 고액 자산가에 대한 합당한 과세가 필요합니다."
      },
      weights: {
        rep: 1.0,
        dem: -0.9,
        ind: 0.2
      }
    }
  ],

  // Platform comparisons on Korean American core issues
  partyPlatforms: {
    democratic: {
      nameEn: "Democratic Party",
      nameKo: "민주당 (Democratic)",
      color: "#2563eb",
      badgeColor: "rgba(37, 99, 235, 0.15)",
      textColor: "#60a5fa",
      overviewEn: "Emphasizes social equity, accessible healthcare expansion (ACA/Medicare), civil rights, federal protection for reproductive freedom, humane pathways to citizenship for Dreamers, and government-funded eldercare and anti-Asian hate prevention programs.",
      overviewKo: "사회적 형평성, 오바마케어 및 메디케어 확대, 시민권 및 생식권 보호, 서류미비 청년(DACA) 시민권 경로 부여, 정부 지원 아시아계 혐오범죄 방지 및 시니어 복지 확대를 중시합니다.",
      stances: [
        { topic: "Small Business & Taxes", en: "Supports targeted tax credits for small enterprises and clean energy; supports higher taxes on corporations and high earners; advocates for federal minimum wage increases.", ko: "소상공인 세제 혜택과 친환경 전환 지원; 대기업 및 고소득자 과세 강화; 연방 최저임금 인상 추진." },
        { topic: "Public Safety & Justice", en: "Promotes gun safety laws, police accountability, mental health crisis response teams, and civil rights division enforcement against Asian hate crimes.", ko: "총기 규제 강화, 경찰 책임성 제고, 위기 대응 전문팀 신설, 아시안 대상 혐오범죄 전담 수사 및 처벌 강화." },
        { topic: "Education & Admissions", en: "Advocates for holistic admissions, student debt relief, universal Pre-K, and increased funding for public schools in underserved neighborhoods.", ko: "다면 평가 입학제, 학자금 대출 탕감, 유아 무상 교육(Pre-K), 취약 지역 공립학교 지원 확대." },
        { topic: "US-ROK Alliance", en: "Reaffirms the ironclad mutual defense treaty and trilateral cooperation (US-ROK-Japan); supports diplomatic paths to denuclearization while maintaining deterrence.", ko: "굳건한 한미 상호방위조약 및 한미일 공조 확인; 대북 억지력을 유지하면서 비핵화와 평화를 위한 외교적 노력 지지." },
        { topic: "Immigration", en: "Protects DACA recipients, supports comprehensive immigration reform with pathways to citizenship, and seeks to reduce family visa backlogs.", ko: "DACA 청년 추방 유예 및 영주권 허용, 포괄적 이민 개혁, 장기간 지연된 가족 초청 비자 적체 해소." }
      ]
    },
    republican: {
      nameEn: "Republican Party",
      nameKo: "공화당 (Republican)",
      color: "#dc2626",
      badgeColor: "rgba(220, 38, 38, 0.15)",
      textColor: "#f87171",
      overviewEn: "Prioritizes lower corporate and personal taxes, deregulation for small businesses, school choice and merit-based test admissions, strict border enforcement, tough-on-crime policies with strong police funding, and traditional cultural values.",
      overviewKo: "소상공인 및 기업 감세, 규제 철폐, 학교 선택권 및 시험 위주 능력주의 입시 수호, 강력한 국경 통제, 경찰력 지원을 통한 엄벌주의 치안, 전통적 가족 및 종교적 가치 보호를 중시합니다.",
      stances: [
        { topic: "Small Business & Taxes", en: "Extends Tax Cuts and Jobs Act cuts, eliminates estate taxes ('death tax'), reduces red tape and regulatory compliance costs for retail and service entrepreneurs.", ko: "세금 감면 정책 연장, 상속세(사망세) 폐지, 소매업 및 자영업 관련 행정 규제 완화." },
        { topic: "Public Safety & Justice", en: "Champions strong police budgets, stricter sentences for retail theft and repeat offenders, repeal of cashless bail policies, and Second Amendment self-defense rights.", ko: "경찰 예산 대폭 지원, 상습 소매 절도 처벌 강화, 보석금 면제 제도 재검토, 헌법상 총기 자위권 수호." },
        { topic: "Education & Admissions", en: "Defends merit-based testing for magnet schools, supports the Supreme Court ruling ending race-based affirmative action, and advocates for school vouchers.", ko: "특목고 시험 전형 유지, 어퍼머티브 액션 위헌 결정 지지, 학부모 교육권 및 학교 선택 바우처 확대." },
        { topic: "US-ROK Alliance", en: "Prioritizes peace through strength, maximum pressure on North Korea, strong military deterrence, and equitable defense burden-sharing with allies.", ko: "힘을 통한 평화, 대북 최대 압박 및 강력한 군사 억제, 동맹국의 합당한 방위비 분담." },
        { topic: "Immigration", en: "Emphasizes strict border enforcement, ending unlawful entries, mandatory E-Verify, and merit/skills-based immigration rather than broad legalization.", ko: "강력한 국경 경비 및 불법 입국 차단, 엄격한 법 집행, 무차별 사면 반대 및 전문 능력 중심 이민." }
      ]
    },
    independent: {
      nameEn: "Independent / Moderate",
      nameKo: "무당파 / 중도 실용 (Independent)",
      color: "#8b5cf6",
      badgeColor: "rgba(139, 92, 246, 0.15)",
      textColor: "#c084fc",
      overviewEn: "Combines fiscal prudence and small business pragmatism with personal freedom, sensible public safety, government transparency, and bipartisan solutions to healthcare and immigration.",
      overviewKo: "재정적 건전성과 소상공인 실용주의를 바탕으로 개인의 자유, 합리적 치안, 정부 투명성, 그리고 보건의료와 이민 문제에 대한 초당적 타협안을 추구합니다.",
      stances: [
        { topic: "Small Business & Taxes", en: "Focuses on predictable tax rules, cutting government waste, targeted relief for micro-enterprises, and curbing inflation.", ko: "예측 가능한 세법, 정부 예산 낭비 삭감, 영세 소상공인 맞춤 지원, 물가 안정 최우선." },
        { topic: "Public Safety & Justice", en: "Supports balanced policing with accountability, targeting organized retail theft rings while funding diversion programs for nonviolent first-time offenders.", ko: "전문적 치안과 경찰 책임성 병행, 조직적 상점 절도단 엄벌 및 경미 사범 교화 프로그램." },
        { topic: "Education & Admissions", en: "Favors merit combined with socio-economic (income-based) affirmative action rather than racial categories; strengthens vocational and STEM education.", ko: "인종 대신 소득 기준(계층별) 배려와 능력주의 조화; 직업 교육 및 STEM 교육 투자 확대." },
        { topic: "US-ROK Alliance", en: "Maintains bipartisan defense commitments to the Republic of Korea while prioritizing economic and high-tech supply chain partnerships (semiconductors, EV batteries).", ko: "흔들림 없는 한미 안보 공약 유지 및 반도체·배터리 등 첨단 산업 공급망 파트너십 강화." },
        { topic: "Immigration", en: "Advocates for balanced compromise: rigorous border security paired with earned legal status for established workers and Dreamers.", ko: "국경 안보 강화와 성실한 납세 서류미비자 및 드리머 구제를 교환하는 초당적 이민 타협안 지지." }
      ]
    }
  },

  // Key Korean American voting hubs & voting rights
  voterResources: {
    section203: {
      en: {
        title: "Your Right to Korean-Language Ballots (Voting Rights Act §203)",
        content: "Under federal law, voters in designated jurisdictions with high Korean-speaking populations have the legal right to receive bilingual election materials and voting assistance in Korean. Key counties include:",
        counties: [
          "California: Los Angeles County, Orange County",
          "New York: Queens County (New York City)",
          "New Jersey: Bergen County",
          "Illinois: Cook County (Chicago area)",
          "Georgia: Gwinnett County (Atlanta area)",
          "Virginia: Fairfax County (DC Metro area)",
          "Texas: Harris County, Dallas County"
        ],
        tip: "You can legally bring a bilingual family member or friend (except your employer or union agent) into the voting booth to help translate!"
      },
      ko: {
        title: "연방 투표권법 제203조: 한국어 투표용지 및 통역 권리",
        content: "연방 투표권법(Voting Rights Act Sec. 203)에 따라, 한인 인구가 밀집된 주요 카운티에서는 법적으로 한국어 투표용지, 선거 공보물, 한국어 통역 안내원을 지원받을 수 있습니다:",
        counties: [
          "캘리포니아주: 로스앤젤레스 카운티, 오렌지 카운티",
          "뉴욕주: 퀸즈 카운티 (뉴욕시)",
          "뉴저지주: 버겐 카운티",
          "일리노이주: 쿡 카운티 (시카고 일원)",
          "조지아주: 귀넷 카운티 (애틀랜타 일원)",
          "버지니아주: 페어팩스 카운티 (워싱턴 DC 일원)",
          "텍사스주: 해리스 카운티, 댈러스 카운티"
        ],
        tip: "영어가 편하지 않으신 경우, 고용주나 노조 대표를 제외한 영어를 잘하는 자녀나 친척, 친구를 투표 부스에 동반하여 통역 도움을 받으실 법적 권리가 있습니다!"
      }
    },
    civicImpact: {
      en: {
        title: "Why Korean American Votes Are Crucial",
        stats: [
          { value: "1.9M+", label: "Korean Americans nationwide" },
          { value: "65%+", label: "Eligible voter turnout trend (up from 45% in 2012)" },
          { value: "5+ Key States", label: "Where Asian American voters form decisive margins (CA, NY, NJ, GA, VA, NV)" }
        ],
        narrative: "In close federal and congressional elections, a few hundred or thousand votes decide who controls the House or Senate. Your vote directly impacts local small business policies, police protection, education curricula, senior medical care, and international alliances."
      },
      ko: {
        title: "왜 한인 유권자의 한 표가 결정적일까요?",
        stats: [
          { value: "190만+", label: "전미 한국계 미국인 인구" },
          { value: "65%+", label: "한인 유권자 투표율 상승세 (2012년 45%에서 대폭 증가)" },
          { value: "주요 경합주", label: "아시안 표심이 당락을 가르는 주 (CA, NY, NJ, GA, VA, NV 등)" }
        ],
        narrative: "치열한 하원, 상원 및 로컬 선거에서는 수백 표 차이로 승패가 갈립니다. 한인들의 높은 투표율은 정치인들이 우리 커뮤니티의 세탁소/소상공인 보호, 한국어 시니어 복지, 노인 아파트, 치안 유지, 한미동맹 법안을 소홀히 다루지 못하게 만드는 가장 강력한 힘입니다."
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VOTER_DATA;
}
