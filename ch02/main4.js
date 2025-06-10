/*
    날짜 : 2025.06.10
    이름 : 김태경
    내용 : Promise 실습
*/

//////////////////////////////////////
// Promise 생성
//////////////////////////////////////
const myPromise = new Promise((resolve, reject)=>{
    
    let result = false;

    //비동기 작업 수행
    setTimeout(()=>{
        result = true;
        if(result){
            resolve('작업 성공!');
        }else{
            reject('작업 실패!');
        }
    }, 1000);
});

//Promise 실행
//myPromise.then().catch().finally();
myPromise
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            console.log('finally');
        });


//////////////////////////////////////
// Promise를 반환하는 함수
//////////////////////////////////////
function fetchData(){
    return new Promise((resolve, reject)=>{
        const url = 'http://localhost:3000/todos/2';
        fetch(url)
            .then(response => response.json())
            .then((data)=>{
                resolve(data);
            })
            .catch((err)=>{
                reject(err);
            });
    });
}

fetchData()
    .then(result => {
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    });

//////////////////////////////////////
// Promise 체이닝
//////////////////////////////////////
function step1(){
    return new Promise((resolve, reject)=>{
        resolve('step1 작업완료');
    });
}

function step2(){
    return new Promise((resolve, reject)=>{
        resolve('step2 작업완료');
    });
}

function step3(){
    return new Promise((resolve, reject)=>{
        resolve('step3 작업완료');
    });
}

step1()
    .then(step2)
    .then(step3)
    .then(result => {
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    });