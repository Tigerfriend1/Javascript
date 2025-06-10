/*
    날짜 : 2025.06.10
    이름 : 김태경
    내용 : async/await 실습
*/

//////////////////////////////////////
// async - 비동기 함수를 선언하는 키워드
//////////////////////////////////////
async function hello(str){
    console.log(str);
    return str; // 반환값은 Promise로 감싸짐
}

hello('안녕하세요!')
    .then(value => {
        console.log(`value: ${value}`); // '안녕하세요!' 출력
    })
    .catch(err => {
        console.log(err);
    });


//////////////////////////////////////
// await - Promise가 처리될 때까지 기다리는 키워드
//////////////////////////////////////    

async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData; // 반환값은 Promise로 감싸짐

}
console.log(fetchData('http://localhost:3000/todos/2')); // Promise 객체 출력

async function fetchData1(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData); // JSON 데이터 출력
    
}
fetchData1('http://localhost:3000/todos/2'); 