# 투두리스트 - Client

## 🔖 프로젝트 정보

> 프리온보딩 인턴쉽 지원시 제출했던 사전과제를 리팩토링하여 구현한 투두리스트 어플리케이션

- 프로젝트명 : 투두리스트
- 개발 기간 : 2023년 9월 21일 ~ 2023년 10월 3일 (2주)
- 분류 : 개인 프로젝트

\*현재 CI/CD 및 기능 고도화 작업 중에 있습니다.

## 🖥️ 배포 주소

http://34.232.214.124/

⭐️ 테스트 계정
- id : test@test.com
- password : !Q2w3e4r

## 📝 프로젝트 소개

### 프로젝트 목적

- 프리온보딩 인턴쉽을 진행하며 배운 내용을 토대로 프리온보딩 인턴쉽 지원시 제출했던 투두리스트 사전과제를 리팩토링하여 구현했습니다.
- 이 프로젝트를 통해 프론트엔드 뿐만아니라 데이터베이스 설계 및 서버 개발, 배포까지 경헙해보고자 했습니다.

### 프로젝트 목표

프리온보딩 인턴쉽을 통해 배운 것을 기반으로 이 프로젝트의 주된 목표는 아래와 같습니다.

> 확장성과 유지보수성이 높은 변화에 유연한 소프트웨어 설계

이를 달성하기 위해 아래와 같은 방법들을 사용했습니다.

1. UI 로직과 비즈니스 로직의 분리
2. 한 컴포넌트에는 한 가지 역할만 위임
3. 병렬적으로 사용되는 컴포넌트의 추상화 레벨을 맞춰 가독성 높이기
4. 관련있는 코드 한 곳에서 사용하여 유지 보수성 높이기

추가적으로 UX 측면에서 더 나은 사용자 경험을 제공하기 위해

1. 에러 핸들링 및 에러에 따른 적절한 사용자 가이드 제공
2. React Query를 사용하여 서버 데이터 캐시 및 변경 발생시 refetch

과 같은 방법을 사용했습니다.

## 💾 프로젝트 실행 방법

### 요구사항

- Node.js 18.16.1
- Npm 9.5.1

### .env example

```
VITE_BASE_URL='http://127.0.0.1:8080'
```

### 설치 및 실행

```
$ git clone https://github.com/angielxx/todo-client.git
$ cd todo-client
$ yarn install
$ yarn run dev
```

## ⚒️ 사용한 기술 스택

### Development

<img src="https://shields.io/badge/React-61DAFB?logo=React&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/Typescript-3178C6?logo=Typescript&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/React Router-CA4245?logo=React Router&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/React Query-FF4154?logo=reactquery&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/Zustand-000000?logo=Zustand&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/Styled components-DB7093?logo=styled-components&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/Axios-5A29E4?logo=Axios&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/Vite-646CFF?logo=Vite&logoColor=FFF&style=flat-square"/>

### Deployment

<img src="https://shields.io/badge/amazonec2-FF9900?logo=amazonec2&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/nginx-009639?logo=nginx&logoColor=FFF&style=flat-square"/> <img src="https://shields.io/badge/pm2-2B037A?logo=pm2&logoColor=FFF&style=flat-square"/>

## 📦 디렉터리 구조

```
📦todo-client
 ┣ 📂src
 ┃ ┣ 📂apis
 ┃ ┃ ┣ 📜AuthService.ts
 ┃ ┃ ┣ 📜HttpClient.ts
 ┃ ┃ ┣ 📜TodoService.ts
 ┃ ┃ ┣ 📜TokenStorage.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Calendar
 ┃ ┃ ┃ ┣ 📜DateTitle.tsx
 ┃ ┃ ┃ ┣ 📜WeeklyCalendar.tsx
 ┃ ┃ ┃ ┣ 📜WeeklyCalendarItem.tsx
 ┃ ┃ ┃ ┣ 📜WeeklyOffsetBtn.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂Common
 ┃ ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┃ ┣ 📜CloseBtn.tsx
 ┃ ┃ ┃ ┣ 📜Icon.tsx
 ┃ ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┃ ┣ 📜InputOfForm.tsx
 ┃ ┃ ┃ ┣ 📜PageTitle.tsx
 ┃ ┃ ┃ ┣ 📜PageWrapper.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂Fallback
 ┃ ┃ ┃ ┣ 📜ErrorFallback.tsx
 ┃ ┃ ┃ ┣ 📜LoadingFallback.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┣ 📜DeleteModal.tsx
 ┃ ┃ ┃ ┣ 📜ModalWrapper.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂TodoForm
 ┃ ┃ ┃ ┣ 📜DateBtn.tsx
 ┃ ┃ ┃ ┣ 📜DateCalendarBtn.tsx
 ┃ ┃ ┃ ┣ 📜TodoForm.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂TodoList
 ┃ ┃ ┃ ┣ 📜AddTodoBtn.tsx
 ┃ ┃ ┃ ┣ 📜CategoryChip.tsx
 ┃ ┃ ┃ ┣ 📜TodoCheckBtn.tsx
 ┃ ┃ ┃ ┣ 📜TodoList.tsx
 ┃ ┃ ┃ ┣ 📜TodoListItem.tsx
 ┃ ┃ ┃ ┣ 📜TodoListItemContent.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜ResetBoundaryWrapper.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂context
 ┃ ┃ ┣ 📜authProvider.tsx
 ┃ ┃ ┗ 📜todoProvider.tsx
 ┃ ┣ 📂guards
 ┃ ┃ ┣ 📜AuthGuard.tsx
 ┃ ┃ ┗ 📜UnAuthGuard.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜useAuthContext.tsx
 ┃ ┃ ┣ 📜useAuthForm.tsx
 ┃ ┃ ┣ 📜useTodoContext.tsx
 ┃ ┃ ┣ 📜useTodoForm.tsx
 ┃ ┃ ┗ 📜useTodoQuery.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜SignIn.tsx
 ┃ ┃ ┣ 📜SignUp.tsx
 ┃ ┃ ┣ 📜Todo.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜authRouter.tsx
 ┃ ┃ ┣ 📜router.tsx
 ┃ ┃ ┗ 📜todoRouter.tsx
 ┃ ┣ 📂stores
 ┃ ┃ ┣ 📜useCalendarStore.ts
 ┃ ┃ ┗ 📜useTodoFormStore.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜error.ts
 ┃ ┃ ┣ 📜signUp.ts
 ┃ ┃ ┣ 📜styled.d.ts
 ┃ ┃ ┣ 📜todoData.ts
 ┃ ┃ ┗ 📜todoPage.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜convertDateToString.ts
 ┃ ┃ ┣ 📜getDateBtnType.ts
 ┃ ┃ ┣ 📜getDayInKor.ts
 ┃ ┃ ┣ 📜getToday.ts
 ┃ ┃ ┣ 📜getWeekInfo.ts
 ┃ ┃ ┗ 📜validateSignUp.ts
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜vite-env.d.ts
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.node.json
 ┣ 📜vite.config.ts
 ┗ 📜yarn.lock
```

## 📌 주요 기능

### 인증 및 인가

- access token 만료시 refresh token을 사용하여 access token 재발급

### 회원가입

- 유효성 검사에 따라 적절한 에러 메시지 표시
- 회원가입 시도 후 에러 발생 시 alert 창으로 에러 메시지 표시 (중복되는 이메일 계정 등)

### 로그인

- 유효성 검사에 따라 적절한 에러 메시지 표시
- 로그인 시도 후 에러 발생 시 alert 창으로 에러 메시지 표시 (존재하지 않는 이메일, 비밀번호 불일치 등)

### 투두리스트 관리

- 날짜를 선택하여 날짜별로 할 일 추가
- 캘린더를 통해 날짜 선택 시 날짜별로 할 일 조회
- 할 일 내용 및 날짜 수정
- 할 일 완료 처리
- 할 일 삭제

## 📱 기능별 서비스 화면

### 회원가입

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/948cc945-7706-4729-bff4-3affbeed4b45" width="400"/>

### 로그인

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/9f8028af-eceb-4cd2-a6e6-6f0c879f11ae" width="400"/>

### 할 일 추가

- '오늘' 날짜에 할 일 추가

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/5d17fbb6-0e7d-4f42-87ed-19af1fd7cd25" width="400"/>

- '내일' 날짜에 할 일 추가

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/6f4552e2-035c-4cf8-9091-3757cfd7f9b8" width="400"/>

<!-- - 선택한 날짜에 할 일 추가
  <img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/5d17fbb6-0e7d-4f42-87ed-19af1fd7cd25" width="400"/> -->

### 할 일 조회

- 날짜 별로 할 일 조회

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/be4ca414-9811-42ee-8584-3724e74efee4" width="400"/>

### 할 일 수정

- 할 일 완료 처리

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/f830f2b1-88d9-41b7-b241-71f77d6b6ce4" width="400"/>

- 할 일 내용 수정

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/3a8710f0-2696-41f1-980d-3ce517c3f0bf" width="400"/>

- 할 일 날짜 수정

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/4f8efb1f-f0d9-413e-b18b-371667971f0c" width="400"/>

### 할 일 삭제

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/edfe29db-a83a-4592-8a8b-03d05b38d5da" width="400"/>

### 로그아웃

<img src="https://github.com/Voluntain-SKKU/Voluntain-2nd/assets/103434451/41af1c3d-2cab-45aa-a007-f6c842b446dd" width="400"/>
