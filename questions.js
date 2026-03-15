// =============================================
// 문제 수정은 이 파일만 편집하면 됩니다!
// =============================================
// type: 'mc'    → 객관식 (4지선다)
// type: 'tf'    → True/False
// type: 'essay' → 주관식 (키워드 자동채점)
// answer: 객관식 0=A, 1=B, 2=C, 3=D / TF 0=True, 1=False
// keywords: 답변에 2개 이상 포함 시 정답
// =============================================

const QUESTIONS_KO = [
  {
    type: 'mc',
    text: '김용의 선교사님의 선교 강의에서 강조하신 선교의 네가지 주제에 속하지 <u>않는</u> 개념은?',
    options: ['A) 대체 불가', 'B) 선교 정책과 전략', 'C) 역사의 고리', 'D) 마지막 퍼즐'],
    answer: 1, points: 10
  },
  {
    type: 'mc',
    text: '에스라 8:15 절 17 절 말씀에서 이스라엘 백성이 성전 재 건축을 마치고 하나님께 예배 하려고 할 때 없었던 것은?',
    options: ['A) 레위인', 'B) 대제사장', 'C) 번제 제물', 'D) 번제드릴 제단'],
    answer: 0, points: 10
  },
  {
    type: 'mc',
    text: '다음 중 언약을 이루신 예수님을 증거하는, 신약에서 역사적 연결고리로 언급된 인물은?',
    options: ['A) 레위인', 'B) 세례 요한', 'C) 예수님의 열 두 사도', 'D) 사도 바울'],
    answer: 2, points: 10
  },
  {
    type: 'mc',
    text: '다음 중 "누가갈꼬?" 라고 묻는 하나님의 질문에 대체 불가한 사람이 <u>아닌</u> 것은?',
    options: [
      'A) 자신에게 와 닿는 진리를 보는 자',
      'B) 하나님의 마음과 음성을 듣는 자',
      'C) 자기안에 그 상황을 대입해 보고 경험한 자',
      'D) 하나님의 부르심과 말씀을 듣고, 체험하고 선교에 동참하는 자'
    ],
    answer: 3, points: 10
  },
  {
    type: 'mc',
    text: '강의에서 설명하신 복음의 증인에 관한 바른 설명은?',
    options: [
      'A) 하나님의 주권과 은혜로만 준비해 두신 완전한 복음위에, 우리의 경험과 재능을 더한 사명감있는 사람',
      'B) 선교 전략과 전략을 연구하고, 선교에 준비된 사람',
      'C) 복음이 자신에게 실제로 증인이 된 사람',
      'D) 복음의 변호인으로, 복음을 듣고 접하지 못한 자들에게 선교하는 사람'
    ],
    answer: 2, points: 10
  },
  {
    type: 'mc',
    text: '누가복음 15 장 잃은 양의 비유와 관련된 선교의 자세에 관한 설명으로 맞지 <u>않는</u> 것은?',
    options: [
      'A) 목자 잃은 한 마리의 양이 나와 내 가족이 될 수 있다는 긍휼함으로 끝까지 찾아나가는 것',
      'B) 하나님을 영접하는 선교지의 사람들이 많아짐을 전 교인이 감사하며 기뻐하는 것',
      'C) 소자 하나라도 잃는 것은 하나님의 뜻이 아니므로, 99 마리의 양을 두고도 찾아 나서는 것',
      'D) 세상에서 기진한 목자 없는 양을 보고, 그리스도의 마음을 품고 건져 살려야 한다는 마음'
    ],
    answer: 1, points: 10
  },
  {
    type: 'mc',
    text: '다음 중 강의 내용에서 선교에 꼭 필요한 마지막 퍼즐을 설명한 것으로 맞는 것은?',
    options: [
      'A) 선교지의 민족을 사랑하며, 타 문화권의 언어와 문화를 습득하고 선교를 준비하는 자',
      'B) 리더쉽을 가지고 선교팀을 잘 이끌어 가며, 현지인들과 소통을 잘 하는 자',
      'C) 10 년 이상 꾸준히 시간과 물질을 들여 선교 사역에 참여한 자',
      'D) 겉으로 화려하게 드러나지는 않지만 모든 민족을 제자 삼으라는 주님의 명령에 묵묵히 순종함으로 하나님의 마음에 합한 자'
    ],
    answer: 3, points: 10
  },
  {
    type: 'tf',
    text: '심판 받을 수 밖에 없는 이스라엘을 구원하시고자 하는 하나님의 본심을 이사야 선지자에게 보여 주신 때, 이스라엘은 외적으로는 주변 세력의 침략을 받아, 경제적으로 궁핍하며, 영적으로도 병들고 위급한 완전한 타락 상태였다.',
    options: ['O (True)', 'X (False)'],
    answer: 1, points: 10
  },
  {
    type: 'tf',
    text: '북 이스라엘 사마리아성 안의 사람들이 아람 군대에 둘러 쌓여 죽어갈 때, 왕과 군대 장관이 복음의 기쁜 소식을 듣고도 믿지 않고 성안의 백성에게 전하지 않은 것은 직무유기이며 미필적 고의로 집단 살육을 한 것과 같다고 볼 수 있다.',
    options: ['O (True)', 'X (False)'],
    answer: 0, points: 10
  },
  {
    type: 'essay',
    text: '강의에서 언급된 하나님 마음에 합한 성경적 인물은 누구인가?',
    keywords: ['다윗', 'david'],
    points: 10
  }
];

const QUESTIONS_EN = [
  {
    type: 'mc',
    text: 'Which of the following concepts does <u>NOT</u> belong to the four key themes of missions emphasized in this lecture?',
    options: ['A) The "Irreplaceable"', 'B) Missions Policy and Strategy', 'C) The Link of History', 'D) The Last Puzzle Piece'],
    answer: 1, points: 10
  },
  {
    type: 'mc',
    text: 'According to Ezra 8:15-17, when the Israelites had gathered to return and worship God after rebuilding the temple, which group was found to be missing?',
    options: ['A) The Levites', 'B) The High Priests', 'C) The Burnt Offerings', 'D) The Altar for burnt offerings'],
    answer: 0, points: 10
  },
  {
    type: 'mc',
    text: 'In the New Testament, who does the speaker identify as the "historical connecting link" testifying to Jesus, who fulfilled the covenant?',
    options: ['A) The Pharisees', 'B) John the Baptist', "C) Jesus' Twelve Apostles", 'D) The Apostle Paul'],
    answer: 2, points: 10
  },
  {
    type: 'mc',
    text: 'When God asks "Who will go for us?", which of the following is <u>NOT</u> the description of the "irreplaceable person" the speaker says God is looking for?',
    options: [
      'A) One who sees the truth as their own actual reality',
      "B) One who hears God's heart and His lament",
      'C) One who substitutes themselves into the desperate situation of the lost',
      'D) One who waits to hear a specific calling or voice from God, experiences it, and then joins a mission program'
    ],
    answer: 3, points: 10
  },
  {
    type: 'mc',
    text: 'Which is the correct definition of a "Witness of the Gospel", as explained in the lecture?',
    options: [
      "A) A person with a sense of duty who adds their experience and talent on top of God's sovereign grace",
      'B) A person who researches mission strategies and prepares diligently for cross-cultural work',
      'C) A person for whom the Gospel has actually become an experienced reality to themselves',
      'D) A person who acts as a "defense attorney" for the Gospel, logically arguing it to those who have not heard it'
    ],
    answer: 2, points: 10
  },
  {
    type: 'mc',
    text: 'Regarding the Parable of the Lost Sheep (Luke 15), which attitude does the speaker identify as <u>INCORRECT</u> or insufficient for a true witness?',
    options: [
      'A) Searching until the end with compassion, realizing the lost sheep could be me or my family',
      'B) Giving thanks and rejoicing simply because the number of believers in the church is increasing',
      "C) Leaving the 99 sheep to find the one, because it is not God's will to lose even one little one",
      'D) Having the heart of Christ to save the sheep that are exhausted and without a shepherd'
    ],
    answer: 1, points: 10
  },
  {
    type: 'mc',
    text: 'Which of the following best describes the "Last Puzzle Piece" necessary for missions mentioned in the lecture?',
    options: [
      'A) One who loves the people of the mission field and learns the language and culture perfectly',
      'B) One who leads the mission team well with strong leadership skills and communicates well with locals',
      'C) One who has consistently invested time and money in mission work for over 10 years',
      "D) One who may not stand out outwardly, yet quietly obeys the Lord's command to make disciples of all nations, and whose heart aligns with God's own heart"
    ],
    answer: 3, points: 10
  },
  {
    type: 'tf',
    text: '"When God showed His true heart to the prophet Isaiah, the nation of Israel was outwardly under invasion by surrounding powers, economically destitute, and in a state of complete moral collapse."',
    options: ['True', 'False'],
    answer: 1, points: 10
  },
  {
    type: 'tf',
    text: '"In the story of the Four Lepers (2 Kings 7), the speaker argues that the King and Officials — who heard the Good News but failed to share it while their people starved — committed a crime equivalent to willful mass slaughter."',
    options: ['True', 'False'],
    answer: 0, points: 10
  },
  {
    type: 'essay',
    text: 'Who is the biblical figure mentioned in the lecture as the "Last Puzzle Piece" and described as "a man after God\'s own heart"? (Write your answer)',
    keywords: ['david', '다윗'],
    points: 10
  }
];
