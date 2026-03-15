# 초대교회 선교훈련 BEYOND — 배포 가이드

## 파일 구조
```
mission-training/
├── index.html       ← 메인 앱
├── vercel.json      ← Vercel 배포 설정
└── SETUP.md         ← 이 파일
```

---

## Step 1. Firebase 설정 (DB 저장)

### 1-1. Firebase 프로젝트 생성
1. https://console.firebase.google.com 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력 (예: `mission-training-beyond`)
4. Google Analytics 비활성화 후 생성

### 1-2. Firestore Database 생성
1. 왼쪽 메뉴 → "Firestore Database" 클릭
2. "데이터베이스 만들기" 클릭
3. **테스트 모드**로 시작 (30일 후 보안 규칙 설정 필요)
4. 리전: `asia-northeast3 (Seoul)` 선택

### 1-3. 웹 앱 등록 및 Config 복사
1. 프로젝트 설정 (톱니바퀴) → "앱 추가" → 웹(`</>`) 클릭
2. 앱 닉네임 입력 후 등록
3. **firebaseConfig** 값 복사:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

### 1-4. index.html에 Config 붙여넣기
`index.html` 상단의 아래 부분을 교체:
```javascript
// ✅ Firebase 설정 - 본인 프로젝트 config로 교체하세요
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",          // ← 여기를 교체
  authDomain: "YOUR_PROJECT...",   // ← 여기를 교체
  ...
};
```

---

## Step 2. Vercel 배포

### 방법 A: Vercel CLI (권장)
```bash
# 1. Node.js 설치 후 Vercel CLI 설치
npm i -g vercel

# 2. 프로젝트 폴더로 이동
cd mission-training

# 3. 배포
vercel

# 4. 질문에 답변:
#    - Set up and deploy? → Y
#    - Which scope? → 본인 계정 선택
#    - Link to existing project? → N
#    - Project name → mission-training (또는 원하는 이름)
#    - In which directory? → ./ (현재 폴더)

# 5. 배포 완료! URL이 출력됩니다
#    예: https://mission-training-abc123.vercel.app
```

### 방법 B: Vercel 웹 대시보드
1. https://vercel.com 가입/로그인
2. "Add New Project" → "Upload" 탭
3. `mission-training` 폴더 전체를 드래그 앤 드롭
4. Deploy 클릭
5. 완료! 링크 공유 가능

---

## Step 3. Firebase 보안 규칙 설정 (30일 후)

Firestore → 규칙 탭에서 아래로 변경:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /quiz_results/{document} {
      allow create: if true;   // 누구나 저장 가능
      allow read: if false;    // 직접 읽기 불가 (관리자만)
    }
  }
}
```

---

## Step 4. 결과 확인 (Firebase Console)

1. Firebase Console → Firestore Database
2. `quiz_results` 컬렉션에서 응답자 목록 확인
3. 저장 필드:
   - `name` — 이름
   - `email` — 이메일
   - `score` — 점수
   - `pass_fail` — PASS / FAIL
   - `attempt` — 응시 회차 (1 또는 2)
   - `answers` — 문항별 정답/오답 상세
   - `submitted_at` — 응시 일시 (자동)

---

## 커스터마이징

### 문제 수정
`index.html`의 `QUESTIONS` 배열에서 문제/보기/정답을 수정하세요.

### 합격 점수 변경
`submitQuiz()` 함수 내 `score >= 80` 을 원하는 점수로 변경

### 강의 영상 교체
`<iframe src="https://www.youtube.com/embed/VIDEO_ID">` 에서 VIDEO_ID 교체

---

## 문의
배포 후 문제가 있으면 알려주세요!
