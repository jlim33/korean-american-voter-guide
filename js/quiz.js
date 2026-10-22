/**
 * Korean American Voter Hub - Quiz Engine & Alignment Algorithm
 */

class VoterQuizEngine {
  constructor(customData) {
    const dataSrc = customData || (typeof VOTER_DATA !== 'undefined' ? VOTER_DATA : require('./data.js'));
    this.questions = dataSrc.questions;
    this.answers = {}; // questionId: { value: -2..2, priority: 1 }
    this.currentQuestionIndex = 0;
  }

  setAnswer(questionId, value, priority = 1) {
    this.answers[questionId] = {
      value: parseInt(value, 10),
      priority: parseFloat(priority)
    };
  }

  getAnswer(questionId) {
    return this.answers[questionId] || null;
  }

  isComplete() {
    return this.questions.every(q => this.answers[q.id] !== undefined);
  }

  getProgress() {
    const answeredCount = Object.keys(this.answers).length;
    return {
      current: answeredCount,
      total: this.questions.length,
      percentage: Math.round((answeredCount / this.questions.length) * 100)
    };
  }

  calculateAlignment() {
    // Scores on major axes (-100 to +100)
    const axes = {
      economy: { sum: 0, weight: 0 },
      safety: { sum: 0, weight: 0 },
      education: { sum: 0, weight: 0 },
      foreign_policy: { sum: 0, weight: 0 },
      values: { sum: 0, weight: 0 },
      immigration: { sum: 0, weight: 0 }
    };

    let demScore = 0;
    let repScore = 0;
    let indScore = 0;
    let maxPossiblePoints = 0;

    this.questions.forEach(q => {
      const ans = this.answers[q.id];
      if (!ans) return;

      const userVal = ans.value; // -2 to +2
      const weight = ans.priority; // 0.5, 1.0, 1.5

      // Add to categorical axis
      if (axes[q.category]) {
        axes[q.category].sum += (userVal / 2) * 100 * weight;
        axes[q.category].weight += weight;
      }

      // Party alignment calculation
      // weights.rep represents positive correlation with conservative stance
      // userVal: +2 (Strongly Agree) -> aligns with pro-rep if weights.rep > 0
      const normVal = userVal / 2; // -1 to +1

      // Republican closeness: agreement with positive weights
      const repTarget = q.weights.rep; // e.g., 1.0 or -0.9
      const repMatch = 1 - Math.abs(normVal - repTarget) / 2; // 0 to 1
      repScore += repMatch * weight;

      // Democratic closeness: agreement with negative or opposite
      const demTarget = q.weights.dem; // e.g. -1.0 or 1.0
      const demMatch = 1 - Math.abs(normVal - demTarget) / 2;
      demScore += demMatch * weight;

      // Independent closeness: balance / moderate
      const indTarget = q.weights.ind || 0;
      const indMatch = 1 - Math.abs(normVal - indTarget) / 2;
      indScore += indMatch * weight;

      maxPossiblePoints += weight;
    });

    if (maxPossiblePoints === 0) maxPossiblePoints = 1;

    // Normalize to percentages (0 - 100%)
    let demPct = Math.round((demScore / maxPossiblePoints) * 100);
    let repPct = Math.round((repScore / maxPossiblePoints) * 100);
    let indPct = Math.round((indScore / maxPossiblePoints) * 100);

    // Keep percentages cleanly bounded
    demPct = Math.max(10, Math.min(95, demPct));
    repPct = Math.max(10, Math.min(95, repPct));
    indPct = Math.max(15, Math.min(95, indPct));

    // Normalize axes
    const axisResults = {};
    for (const [key, data] of Object.entries(axes)) {
      axisResults[key] = data.weight > 0 ? Math.round(data.sum / data.weight) : 0;
    }

    // Determine archetype title
    const archetype = this.determineArchetype(axisResults, repPct, demPct);

    return {
      percentages: {
        democratic: demPct,
        republican: repPct,
        independent: indPct
      },
      axes: axisResults,
      archetype: archetype
    };
  }

  determineArchetype(axes, repPct, demPct) {
    const diff = repPct - demPct;

    if (Math.abs(diff) <= 8) {
      if (axes.economy > 20 && axes.values < -20) {
        return {
          en: {
            title: "Pragmatic Libertarian / Fiscally Conservative Moderate",
            tagline: "Strong believer in small business autonomy and low taxes, paired with open-minded social views."
          },
          ko: {
            title: "실용적 중도 / 경제적 보수·사회적 중도",
            tagline: "소상공인 자율성과 감세를 중시하면서도 개인의 권리와 사회적 다양성을 폭넓게 인정하는 합리적 유권자입니다."
          }
        };
      }
      return {
        en: {
          title: "Independent Swing Voter / Nuanced Pragmatist",
          tagline: "Values evidence-based governance, examining every policy and candidate individually on merit."
        },
        ko: {
          title: "실용주의 중도 독립파 (Swing Voter)",
          tagline: "정당에 얽매이지 않고 정책의 실효성과 후보자의 인품을 기준으로 냉철하게 선택하는 균형 잡힌 유권자입니다."
        }
      };
    } else if (diff > 8) {
      if (axes.foreign_policy > 30 && axes.safety > 30) {
        return {
          en: {
            title: "Security & Small Business Conservative",
            tagline: "Prioritizes community safety, law & order, robust US-Korea defense deterrence, and small business tax relief."
          },
          ko: {
            title: "안보·소상공인 중심의 원칙적 보수",
            tagline: "상권 치안과 엄벌주의, 한미 군사동맹의 억지력, 그리고 소상공인의 세금 부담 경감을 핵심 가치로 여깁니다."
          }
        };
      }
      return {
        en: {
          title: "Constitutional & Merit-First Conservative",
          tagline: "Champions academic meritocracy, family legacy wealth preservation, free markets, and constitutional liberties."
        },
        ko: {
          title: "능력주의 및 시장 자유주의 보수",
          tagline: "노력에 따른 공정한 능력주의 입시, 이민 세대의 자산 승계 보장, 그리고 시장 경제의 활력을 중시합니다."
        }
      };
    } else {
      if (axes.healthcare > 30 || axes.immigration < -20) {
        return {
          en: {
            title: "Compassionate Social Equity Progressive",
            tagline: "Advocates for universal healthcare access, humane immigrant protections (DACA), civil rights, and public safety net investments."
          },
          ko: {
            title: "사회적 형평 및 포용적 복지 진보",
            tagline: "보편적 의료 접근권, 한인 드리머(DACA)를 포함한 이민자 보호, 그리고 취약 계층을 위한 든든한 사회 안전망을 추구합니다."
          }
        };
      }
      return {
        en: {
          title: "Forward-Thinking Reform Democrat",
          tagline: "Supports civic inclusion, balanced civil rights, climate responsibility, and institutional reform."
        },
        ko: {
          title: "미래 지향적 개혁 진보",
          tagline: "소수계 권익 향상, 사법 제도 개혁, 시민 참여 확대와 투명한 공공 투자를 지향하는 진보 유권자입니다."
        }
      };
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VoterQuizEngine;
}
