/*
    날짜 : 2025.06.12
    이름 : 김태경
    내용 : Jest 테스트 실습하기

    1) 프로젝트 초기화(package.json생성)
     > npm init
     > y

    2) Jest 설치
     > npm install --save-dev jest

    3) package.json 설정
     --------------------------------------
       "scripts": {
            "build": "webpack",
            "test": "jest --verbose"
        },
    --------------------------------------

    4) 테스트 파일 작성
     - modules > math.js 생성(테스트 대상 모듈)
     - test > math.test.js 생성(확장자를 test.js로 해야 jest에서 인식)

    5) 테스트 실행
     - math.test.js 파일에 테스트 케이스 작성(test())
     > npm test
     > npx jest --watch (코드가 수정될때 마다 자동으로 테스트

    6) 코드 커버리지
     > npx jest --coverage

     - 터미널 커버리지 측정값 리포트 확인
     - coverage > Icov-report > index.html 실행 후 브라우저에서 상세확인

*/
