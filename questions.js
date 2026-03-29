// =============================================
// 문제 수정은 이 파일만 편집하면 됩니다!
// =============================================
// type: 'mc' → 객관식 (4지선다)
// type: 'tf' → True/False
// type: 'essay' → 주관식 (키워드 자동채점)
// answer: 객관식 0=A, 1=B, 2=C, 3=D / TF 0=True, 1=False
// keywords: 답변에 포함 시 정답
// =============================================

// ========== WEEK 1: 복음과 선교 (김용의 선교사) ==========

const QUESTIONS_KO = [
  { type: 'mc', text: '김용의 선교사님의 선교 강의에서 강조하신 선교의 네가지 주제에 속하지 <u>않는</u> 개념은?', options: ['A) 대체 불가', 'B) 선교 정책과 전략', 'C) 역사의 고리', 'D) 마지막 퍼즐'], answer: 1, points: 10 },
  { type: 'mc', text: '에스라 8:15 절 17 절 말씀에서 이스라엘 백성이 성전 재 건축을 마치고 하나님께 예배 하려고 할 때 없었던 것은?', options: ['A) 레위인', 'B) 대제사장', 'C) 번제 제물', 'D) 번제드릴 제단'], answer: 0, points: 10 },
  { type: 'mc', text: '다음 중 언약을 이루신 예수님을 증거하는, 신약에서 역사적 연결고리로 언급된 인물은?', options: ['A) 레위인', 'B) 세례 요한', 'C) 예수님의 열 두 사도', 'D) 사도 바울'], answer: 2, points: 10 },
  { type: 'mc', text: '다음 중 "누가갈꼬?" 라고 묻는 하나님의 질문에 대체 불가한 사람이 <u>아닌</u> 것은?', options: ['A) 자신에게 와 닿는 진리를 보는 자', 'B) 하나님의 마음과 음성을 듣는 자', 'C) 자기안에 그 상황을 대입해 보고 경험한 자', 'D) 하나님의 부르심과 말씀을 듣고, 체험하고 선교에 동참하는 자'], answer: 3, points: 10 },
  { type: 'mc', text: '강의에서 설명하신 복음의 증인에 관한 바른 설명은?', options: ['A) 하나님의 주권과 은혜로만 준비해 두신 완전한 복음위에, 우리의 경험과 재능을 더한 사명감있는 사람', 'B) 선교 전략과 전략을 연구하고, 선교에 준비된 사람', 'C) 복음이 자신에게 실제로 증인이 된 사람', 'D) 복음의 변호인으로, 복음을 듣고 접하지 못한 자들에게 선교하는 사람'], answer: 2, points: 10 },
  { type: 'mc', text: '누가복음 15 장 잃은 양의 비유와 관련된 선교의 자세에 관한 설명으로 맞지 <u>않는</u> 것은?', options: ['A) 목자 잃은 한 마리의 양이 나와 내 가족이 될 수 있다는 긍휼함으로 끝까지 찾아나가는 것', 'B) 하나님을 영접하는 선교지의 사람들이 많아짐을 전 교인이 감사하며 기뻐하는 것', 'C) 소자 하나라도 잃는 것은 하나님의 뜻이 아니므로, 99 마리의 양을 두고도 찾아 나서는 것', 'D) 세상에서 기진한 목자 없는 양을 보고, 그리스도의 마음을 품고 건져 살려야 한다는 마음'], answer: 1, points: 10 },
  { type: 'mc', text: '다음 중 강의 내용에서 선교에 꼭 필요한 마지막 퍼즐을 설명한 것으로 맞는 것은?', options: ['A) 선교지의 민족을 사랑하며, 타 문화권의 언어와 문화를 습득하고 선교를 준비하는 자', 'B) 리더쉽을 가지고 선교팀을 잘 이끌어 가며, 현지인들과 소통을 잘 하는 자', 'C) 10 년 이상 꾸준히 시간과 물질을 들여 선교 사역에 참여한 자', 'D) 겉으로 화려하게 드러나지는 않지만 모든 민족을 제자 삼으라는 주님의 명령에 묵묵히 순종함으로 하나님의 마음에 합한 자'], answer: 3, points: 10 },
  { type: 'tf', text: '심판 받을 수 밖에 없는 이스라엘을 구원하시고자 하는 하나님의 본심을 이사야 선지자에게 보여 주신 때, 이스라엘은 외적으로는 주변 세력의 침략을 받아, 경제적으로 궁핍하며, 영적으로도 병들고 위급한 완전한 타락 상태였다.', options: ['O (True)', 'X (False)'], answer: 1, points: 10 },
  { type: 'tf', text: '북 이스라엘 사마리아성 안의 사람들이 아람 군대에 둘러 쌓여 죽어갈 때, 왕과 군대 장관이 복음의 기쁜 소식을 듣고도 믿지 않고 성안의 백성에게 전하지 않은 것은 직무유기이며 미필적 고의로 집단 살육을 한 것과 같다고 볼 수 있다.', options: ['O (True)', 'X (False)'], answer: 0, points: 10 },
  { type: 'essay', text: '강의에서 언급된 하나님 마음에 합한 성경적 인물은 누구인가?', keywords: ['다윗', 'david'], points: 10 }
];

const QUESTIONS_EN = [
  { type: 'mc', text: 'Which of the following concepts does <u>NOT</u> belong to the four key themes of missions emphasized in this lecture?', options: ['A) The "Irreplaceable"', 'B) Missions Policy and Strategy', 'C) The Link of History', 'D) The Last Puzzle Piece'], answer: 1, points: 10 },
  { type: 'mc', text: 'According to Ezra 8:15-17, when the Israelites had gathered to return and worship God after rebuilding the temple, which group was found to be missing?', options: ['A) The Levites', 'B) The High Priests', 'C) The Burnt Offerings', 'D) The Altar for burnt offerings'], answer: 0, points: 10 },
  { type: 'mc', text: 'In the New Testament, who does the speaker identify as the "historical connecting link" testifying to Jesus, who fulfilled the covenant?', options: ['A) The Pharisees', 'B) John the Baptist', "C) Jesus' Twelve Apostles", 'D) The Apostle Paul'], answer: 2, points: 10 },
  { type: 'mc', text: 'When God asks "Who will go for us?", which of the following is <u>NOT</u> the description of the "irreplaceable person" the speaker says God is looking for?', options: ['A) One who sees the truth as their own actual reality', "B) One who hears God's heart and His lament", 'C) One who substitutes themselves into the desperate situation of the lost', 'D) One who waits to hear a specific calling or voice from God, experiences it, and then joins a mission program'], answer: 3, points: 10 },
  { type: 'mc', text: 'Which is the correct definition of a "Witness of the Gospel", as explained in the lecture?', options: ["A) A person with a sense of duty who adds their experience and talent on top of God's sovereign grace", 'B) A person who researches mission strategies and prepares diligently for cross-cultural work', 'C) A person for whom the Gospel has actually become an experienced reality to themselves', 'D) A person who acts as a "defense attorney" for the Gospel, logically arguing it to those who have not heard it'], answer: 2, points: 10 },
  { type: 'mc', text: 'Regarding the Parable of the Lost Sheep (Luke 15), which attitude does the speaker identify as <u>INCORRECT</u> or insufficient for a true witness?', options: ['A) Searching until the end with compassion, realizing the lost sheep could be me or my family', 'B) Giving thanks and rejoicing simply because the number of believers in the church is increasing', "C) Leaving the 99 sheep to find the one, because it is not God's will to lose even one little one", 'D) Having the heart of Christ to save the sheep that are exhausted and without a shepherd'], answer: 1, points: 10 },
  { type: 'mc', text: 'Which of the following best describes the "Last Puzzle Piece" necessary for missions mentioned in the lecture?', options: ['A) One who loves the people of the mission field and learns the language and culture perfectly', 'B) One who leads the mission team well with strong leadership skills and communicates well with locals', 'C) One who has consistently invested time and money in mission work for over 10 years', "D) One who may not stand out outwardly, yet quietly obeys the Lord's command to make disciples of all nations, and whose heart aligns with God's own heart"], answer: 3, points: 10 },
  { type: 'tf', text: '"When God showed His true heart to the prophet Isaiah, the nation of Israel was outwardly under invasion by surrounding powers, economically destitute, and in a state of complete moral collapse."', options: ['True', 'False'], answer: 1, points: 10 },
  { type: 'tf', text: '"In the story of the Four Lepers (2 Kings 7), the speaker argues that the King and Officials — who heard the Good News but failed to share it while their people starved — committed a crime equivalent to willful mass slaughter."', options: ['True', 'False'], answer: 0, points: 10 },
  { type: 'essay', text: 'Who is the biblical figure mentioned in the lecture as the "Last Puzzle Piece" and described as "a man after God\'s own heart"? (Write your answer)', keywords: ['david', '다윗'], points: 10 }
];

// ========== WEEK 2: 남은 과업 - 미전도 종족 선교 (이태훈 교수) ==========

const QUESTIONS_W2_KO = [
  { type: 'mc', text: '강의에서 설명한 미전도 종족 선교에 관한 설명으로 맞지 <u>않는</u> 것은?', options: ['A) 숨겨진 민족 (Hidden people)이라고도 하며 1차 로잔 대회에서 처음 언급되었다.', 'B) 랄프 윈터에 의해 소개 된 개념으로, 미국 남침례교를 비롯하여 한국의 온누리교회등 세계 선교 역사에 막대한 영향을 끼친 개념이다.', 'C) 국가별 또는 지리적 위치에 따라 선교의 방향과 정책을 정하는 것이다.', 'D) 언어와 지역의 장벽으로 인해 복음을 들어본 적이 없는 지역에, 종족, 문화, 언어 장벽을 넘는 전도 (Cross Cultural Evangelism)를 해야 한다고 주장한다.'], answer: 2, points: 10 },
  { type: 'mc', text: '다음 중 전방 개척 선교 운동 (Frontier Mission Movement)의 특성이 <u>아닌</u> 것은?', options: ['A) 미전도 종족의 이론적 기반 위에 설립된 선교 운동이다', 'B) 복음이 닿지 못한 지역과 미전도 종족에 집중한다', 'C) 문화적으로 북미 중심적, 기업적 사고 방식으로 운영되며 판매 전략이나 네트워킹을 활용한다', 'D) 복잡한 선교 현장의 현실을 단순하고 관리 가능한 개별 집단으로 나누어 접근하는 것이 큰 장점으로 여겨진다.'], answer: 3, points: 10 },
  { type: 'mc', text: '미전도 종족의 취약점과 보완점에 관한 설명으로 맞는 것은?', options: ['A) 미전도 종족을 위한 홍보자료에 그들의 불쌍하고 어려운 상황을 나타낼 수 있는 영상을 첨부하여 많은 지원과 관심을 받게 한다', 'B) 어느 문화, 언어, 종족을 포함해야 하는지 불분명하므로 계속해서 토론하고 선교의 동기와 사명을 계속 점검하고 검토해야 한다', 'C) 미전도 종족의 언어를 습득해 가는 것은 불가능하므로 우리가 쓰는 어휘의 미묘한 차이까지 신경 쓰는 대신, 단순하고 간략한 용어만 배워간다.', 'D) 미전도 종족의 지역적 위치와 경계는 세계 지도상 어느정도 분명하게 정해져 있다'], answer: 1, points: 10 },
  { type: 'mc', text: '강의에서 언급된 단기 선교에 참여하는 자세로 알맞은 것은?', options: ['A) 선교지의 어린이 성경학교 (VBS)와 Korean Day 이벤트 준비 등 현지인들의 관심을 증가시킬 수 있는 프로그램 개발에 온 팀원들이 집중한다.', 'B) 선교는 \'세상 끝 까지 복음을 들고 가라\'고 명하신 예수님의 말씀을 따라 어디든 나가기만 하면 되므로, 단기 선교 팀원 확보와 선교 재정 준비에 힘쓴다.', 'C) 미전도 종족을 잃어버린 전도의 대상만으로 여기고, 우리보다 열악한 상황에 있는 사람들에게 필요한 것을 나누어 주며 복음을 전한다.', 'D) 선교지의 타 문화, 타 종교의 사람들을 우리의 지도자나 조언자(Mentor)로 삼고 계속해서 배우려는 겸손한 자세로 선교에 임해야 한다.'], answer: 3, points: 10 },
  { type: 'mc', text: '영상에서 강조된 \'선교적 삶의 첫 번째 현장\'은 어디인가?', options: ['A) 오늘 내가 살아가고 있는 가정, 직장, 공동체 등의 일상', 'B) 파송을 약속 받은 특정 미전도 종족 국가', 'C) 선교적 신학의 깊이를 더해주는 선교 훈련 교육장', 'D) 기적과 이적이 일어나는 영적 각성 운동 집회 현장'], answer: 0, points: 10 },
  { type: 'mc', text: '강의 중 언급하신 지상 대 명령의 선교적 삶을 설명하는 것으로 알맞은 것은?', options: ['A) 낮은 곳으로 오신 예수님과 같이 대접 받고자 하는 대로 남을 대접하며 겸손하고 섬기는 자세로 임한다.', 'B) 하나님과 이웃을 사랑하라는 말씀을 단기 선교나 전도 행사시에만 지키고 순종하는 것이다.', 'C) 세상의 가치관과 방법을 따라 주님의 말씀을 시대에 맞게 전파하는 것이다.', 'D) 타 종교와 문화를 배우려는 자세로 임하는 것이 아니라 진리의 복음만을 우선으로 강조한다.'], answer: 0, points: 10 },
  { type: 'tf', text: '예수님께서 지상명령으로 말씀하신 \'내가 너희에게 분부한 모든 것을 지켜 행하라\'는 말씀 중 \'모든 것 (Everything)\'이란, 곧 우리에게 주시는 \'사명 (mission)\'이며 \'순종 (Obedience)\'해야만 하는 것을 의미한다.', options: ['O (True)', 'X (False)'], answer: 0, points: 10 },
  { type: 'tf', text: '강의에서 말씀하시는 선교는 특별한 소명을 받은, 선택된 자들이 복음을 듣지 못한 지역의 사람들에게 찾아가 복음을 전하는 활동이다.', options: ['O (True)', 'X (False)'], answer: 1, points: 10 },
  { type: 'tf', text: '선교적 삶을 산다는 것은 내가 있는 자리에서 하나님의 통로가 되어 하나님의 성품을 드러내는 것을 의미한다.', options: ['O (True)', 'X (False)'], answer: 0, points: 10 },
  { type: 'essay', text: '미전도 종족의 패러다임 중 보완되어야 할 개념으로, 미전도 종족을 우리와 다른 이질적 존재로 여기고 하나의 대상으로 전락시키는 태도를 무엇이라 하는가? (한글 세글자 또는 영어 8글자)', keywords: ['타자화', 'othering'], points: 10 }
];

const QUESTIONS_W2_EN = [
  { type: 'mc', text: 'Which of the following is <u>NOT</u> true regarding the Unreached People Group (UPG) strategy described in the lecture?', options: ['A) It was initially referred to as "hidden people" and discussed at the first Lausanne Congress.', 'B) Introduced by Ralph Winter, it influenced major organizations like the International Mission Board (IMB) and Onnuri Church.', 'C) It determines mission direction and policy based primarily on nation-states or geographical locations.', 'D) It argues for cross-cultural evangelism to cross ethnic, cultural, and linguistic barriers.'], answer: 2, points: 10 },
  { type: 'mc', text: 'Which of the following is <u>NOT</u> a characteristic of the Frontier Mission Movement?', options: ['A) It is based on the UPG theoretical concept.', 'B) It focuses on the frontier and unreached areas without a gospel witness.', 'C) It is culturally North American, utilizing entrepreneurial thinking and networking.', 'D) Its tendency to reduce complex mission realities into simple, manageable groups is considered its greatest advantage.'], answer: 3, points: 10 },
  { type: 'mc', text: 'Which statement regarding the weaknesses and necessary improvements of the UPG concept is <u>correct</u>?', options: ['A) Promotional materials should portray UPGs as impoverished and sad to generate more interest and support.', 'B) Since boundary lines are often gray areas, we must continually discuss and check our mission motivations and assumptions.', "C) Since learning a UPG's language perfectly is impossible, we should focus on simple terms rather than nuances.", 'D) The geographical locations and boundaries of UPGs are clearly defined on world maps.'], answer: 1, points: 10 },
  { type: 'mc', text: 'What is the <u>appropriate attitude</u> for participating in missions mentioned in the lecture?', options: ['A) The team should focus entirely on developing programs like VBS or Korean Day to attract locals.', 'B) Since the command is to "go," the primary focus should be on recruiting team members and raising funds.', 'C) We should view UPGs primarily as evangelistic targets and provide for those in worse situations.', 'D) We should approach people of other cultures and religions as mentors, adopting a posture of humility and learning.'], answer: 3, points: 10 },
  { type: 'mc', text: 'Based on the lecture, where is the <u>primary setting</u> for living a missional life?', options: ['A) Our daily lives in our homes, workplaces, and communities', 'B) A specific Unreached People Group nation we promised to serve', 'C) A mission training center to deepen theological understanding', 'D) Revival meetings where spiritual miracles occur'], answer: 0, points: 10 },
  { type: 'mc', text: 'Which description fits the "missional life" related to the Great Commission mentioned in the lecture?', options: ['A) We should serve with humility and treat others as we wish to be treated, just as Jesus came to the lowly.', 'B) We should obey the command to love God and neighbors only during short-term mission trips.', 'C) We should follow worldly values and methods to spread the Word relevantly to the times.', 'D) We should emphasize the truth of the Gospel over learning about other religions and cultures.'], answer: 0, points: 10 },
  { type: 'tf', text: 'In the Great Commission, "everything" in "teaching them to obey everything I have commanded you" refers to our mission and the necessity of obedience.', options: ['True', 'False'], answer: 0, points: 10 },
  { type: 'tf', text: 'According to the lecture, mission is an activity reserved for a select few with a special calling to go to unreached areas.', options: ['True', 'False'], answer: 1, points: 10 },
  { type: 'tf', text: 'Living a missional life means being a conduit for God and revealing His character in the place where I currently am.', options: ['True', 'False'], answer: 0, points: 10 },
  { type: 'essay', text: 'What is the term used to describe the danger of treating Unreached People Groups as intrinsically different, alien objects, or mere targets? (HINT: 8 LETTERS)', keywords: ['othering', '타자화'], points: 10 }
];

// ========== WEEK 3: 선교 팀워크 (한충희 선교사) ==========

const QUESTIONS_W3_KO = [
  { type: 'mc', text: '선교 팀워크의 핵심 단어 중 4차 로잔 대회에서 중요성이 강조된 개념은?', options: ['A) 함께 (Together)', 'B) 협업 (Collaboration)', 'C) 협력 (Cooperation)', 'D) 네트워킹 (Networking)'], answer: 0, points: 10 },
  { type: 'mc', text: '다음 중 팀워크의 핵심 단어인 <u>협력(Cooperation)</u>을 가장 잘 설명한 것은?', options: ['A) 각자가 가진 재능으로 의료팀, 안경팀, VBS팀, 미용팀 등에 자원하여 하나의 단기 선교 팀을 구성한다.', 'B) NY, NJ 한인 교회 지도자들이 만나 재정과 자원을 함께 지원하며 단기선교 팀을 결성한다.', 'C) 교회가 이슬람 지역 선교 단체와 연결되어 선교사, 재정, 자원 등을 지원하며 활용하도록 돕는다.', 'D) 20명의 VBS 단기 선교팀을 파송하여 8개 조로 나누어 학령기 아이들에게 복음을 전한다.'], answer: 3, points: 10 },
  { type: 'mc', text: '다음 중 다중중심선교(Polycentric Mission)에 관한 설명으로 <u>맞는</u> 것은?', options: ['A) 특정 지역이나 국가가 선교의 중심이 되어 전세계 복음화를 이루어야 한다는 선교 패러다임이다.', 'B) 서구 중심의 선교가 퇴보되고 선교 영향력이 약화되는 상황에서 등장했다.', 'C) Global South 시대에는 크리스텐덤(Christendom) 중심의 선교 구조를 강조한다.', 'D) 기존 서구 중심(Global North)의 선교가 Global South를 중심으로 우위가 바뀐 선교 구조를 말한다.'], answer: 1, points: 10 },
  { type: 'mc', text: '다음 중 전략팀(Strategic Team, ST)에 관한 설명으로 <u>맞지 않는</u> 것은?', options: ['A) 4-5개 유닛(가정)이 하나의 ST를 구성하며, 동시에 함께 선교지로 파송받고 특정 지역을 담당한다.', 'B) 전략 코디네이터(SC)를 기준으로 협력자(co-worker)들이 큰 규모의 사역을 팀 단위로 담당한다.', 'C) 사역자는 자신의 부분만 감당하면 되며, 선교사 안식년이나 부재 시에도 사역이 계속 진행된다.', 'D) 개인의 달란트를 활용하여 독자적으로 사역하기에 제한점이 있다.'], answer: 0, points: 10 },
  { type: 'mc', text: '다음 중 팀원들 간의 관계 문제를 해결하는 방법으로 강의에서 <u>언급되지 않은</u> 것은?', options: ['A) 깊은 기도와 회개', 'B) 예수님이 내 죄를 사하심을 기억하고 예배를 회복함', 'C) 선교 사역을 배분하고 접촉을 줄여 갈등 상황을 피함', 'D) 팀원 간의 성령 리트리트(Retreat)'], answer: 2, points: 10 },
  { type: 'mc', text: '다음 중 팀워크를 해치는 상황에 관한 설명으로 <u>맞지 않는</u> 것은?', options: ['A) 큰 전략팀의 선임 선교사와 사역 안에서 어려움을 겪을 수 있으며, 적절한 사역 배분과 대화로 풀어가는 것이 필요하다.', 'B) 현지 교회와 관계 문제가 생길 때, 현지 교회와 동반자 선교의 중요성을 생각하고 상호 이해와 협력으로 풀어간다.', 'C) Unit별로 가정의 어려움이 있을 때는 예배와 기도를 통해 회복을 간구하고 필요 시 상담을 받는다.', 'D) 개인의 영성 문제는 소인수 사역에 영향을 미치지만, 큰 전략팀(ST) 안에서는 크게 영향을 미치지 않으며 시간이 지나면 회복된다.'], answer: 3, points: 10 },
  { type: 'mc', text: '다음 중 선교 팀워크를 강화하는 방법으로 <u>적합하지 않은</u> 것은?', options: ['A) 상호 존중을 기반으로 지속적인 대화와 신뢰를 구축하기 위한 꾸준한 노력이 필요하다.', 'B) 전략팀 안에 관계가 어려운 유닛이 있을 때, 다른 유닛 선교사가 본부에 연락하여 간부나 담당 장로가 현지로 출장하게 한다.', 'C) 예배, 기도, 말씀과 성령의 조명을 통해 깨닫고, 하나님께 받은 소명을 재확인해야 한다.', 'D) 상대방이 내 호의를 당연히 받아들여도 서운해하지 않고, 남의 허물을 문제시하지 않는다.'], answer: 1, points: 10 },
  { type: 'tf', text: '현지 사역자와 관계의 문제가 발생할 때, 현지 사역자를 조력자(Helper)로 여기는 대신 친밀도를 확인하고 강화하는 조치들을 모색해야 한다.', options: ['O (True)', 'X (False)'], answer: 0, points: 10 },
  { type: 'tf', text: '교회(Modality)라는 신앙, 예배 공동체와 목표와 전략을 가진 선교 단체(Sodality)가 연결되어, 교회가 필요한 자원을 선교 현장으로 보내 활용하게 하는 것을 <u>네트워킹(Networking)</u>이라고 한다.', options: ['O (True)', 'X (False)'], answer: 1, points: 10 },
  { type: 'essay', text: '팀워크의 핵심 단어 중, 개인이 가진 고유한 장점과 은사를 살려서 상호 보완적으로 활용하고, 공동의 목표를 달성하는 방식을 __________(이)라 한다. (한글 또는 영어)', keywords: ['협업', 'collaboration'], points: 10 }
];

const QUESTIONS_W3_EN = [
  { type: 'mc', text: 'Among the key terms of mission teamwork, which concept was particularly emphasized at the 4th Lausanne Congress?', options: ['A) Together', 'B) Collaboration', 'C) Cooperation', 'D) Networking'], answer: 0, points: 10 },
  { type: 'mc', text: 'Which of the following best explains <u>Cooperation</u> (협력) as a key term in teamwork?', options: ['A) Individuals with special talents sign up for medical, optometry, VBS, or hair styling teams to form a short-term mission team.', 'B) Leaders from Korean churches in NY and NJ meet to jointly provide resources and finances for a short-term mission team.', 'C) A church connects with a mission organization for a specific Islamic region, providing financial and resource-based support.', 'D) A church sends a 20-member VBS short-term mission team, dividing into 8 groups to share the Gospel with school-aged children.'], answer: 3, points: 10 },
  { type: 'mc', text: 'Which of the following is the CORRECT description of Polycentric Mission?', options: ['A) A mission paradigm where one specific region or country must become the center to achieve global evangelization.', 'B) A concept that emerged as Western-centered missions were declining and their influence was weakening.', 'C) In the Global South era, this structure emphasizes a Christendom-centered mission approach.', 'D) A structure where the dominance has shifted from the Global North to the Global South (Asia, Africa, Latin America).'], answer: 1, points: 10 },
  { type: 'mc', text: 'Which of the following is <u>NOT</u> a correct description of a Strategic Team (ST)?', options: ['A) 4 to 5 units (families) form one ST and are all sent simultaneously to take charge of a specific mission region.', 'B) Co-workers handle large-scale ministries as a team, based on the leadership of a Strategic Coordinator (SC).', 'C) Each worker handles only their specific portion; ministry continues even during a missionary\'s sabbatical or absence.', 'D) There are limitations to working independently using one\'s own talents within this structure.'], answer: 0, points: 10 },
  { type: 'mc', text: 'Which of the following was <u>NOT</u> mentioned in the lecture as an appropriate way to resolve relationship issues among team members?', options: ['A) Deep prayer and repentance', 'B) Remembering Jesus\' forgiveness and restoring worship', 'C) Distributing mission tasks and reducing contact to avoid conflict situations', 'D) Holding a Holy Spirit Retreat among team members'], answer: 2, points: 10 },
  { type: 'mc', text: 'Which of the following is <u>NOT</u> a correct explanation regarding situations that harm teamwork?', options: ['A) Difficulties with a senior missionary in an ST require dialogue to find appropriate task distribution and cooperation.', 'B) Conflicts with local churches should be resolved through mutual understanding and partnership mission principles.', 'C) Missionary families facing difficulties should seek restoration through prayer and counseling if needed.', 'D) Personal spiritual issues significantly affect small-scale missions, but do not greatly impact large Strategic Teams (ST), as horizontal relationships recover over time.'], answer: 3, points: 10 },
  { type: 'mc', text: 'Which of the following is <u>NOT</u> an appropriate way to strengthen missionary teamwork?', options: ['A) Building trust through steady effort and continuous dialogue based on mutual respect.', 'B) When a unit has relational difficulties, another unit contacts headquarters to arrange an official or elder\'s visit to the field.', 'C) Reconfirming one\'s calling through worship, prayer, and the illumination of the Holy Spirit.', 'D) Not feeling slighted when others take your kindness for granted, and not making an issue of others\' shortcomings.'], answer: 1, points: 10 },
  { type: 'tf', text: 'When relationship issues arise with local ministers, instead of regarding them merely as "helpers," one should seek measures to verify and strengthen the intimacy of the partnership.', options: ['True', 'False'], answer: 0, points: 10 },
  { type: 'tf', text: 'Connecting the Church (Modality), a community of faith and worship, with a Mission Organization (Sodality) that has specific goals and strategies — so the church can send resources to the mission field — is called <u>Networking</u>.', options: ['True', 'False'], answer: 1, points: 10 },
  { type: 'essay', text: 'Among the key terms of teamwork, the method of utilizing the unique strengths and gifts of individuals in a complementary way to achieve a common goal is called: __________ (Write your answer)', keywords: ['collaboration', '협업'], points: 10 }
];

// ========== 주차별 메타데이터 ==========

const WEEK_DATA = {
  week1: {
    ko: { title: '복음과 선교', lecturer: '김용의 선교사', questions: QUESTIONS_KO },
    en: { title: 'Gospel & Missions', lecturer: 'Missionary Yongui Kim', questions: QUESTIONS_EN }
  },
  week2: {
    ko: { title: '남은 과업: 미전도 종족 선교', lecturer: '이태훈 교수', questions: QUESTIONS_W2_KO },
    en: { title: 'Remaining Task: Unreached People Groups', lecturer: 'Professor Peter Lee', questions: QUESTIONS_W2_EN }
  },
  week3: {
    ko: { title: '선교 팀워크', lecturer: '한충희 선교사', questions: QUESTIONS_W3_KO },
    en: { title: 'Missionary Teamwork', lecturer: 'Pastor Chun-hee Han', questions: QUESTIONS_W3_EN }
  }
};
