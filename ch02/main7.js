/*
    날짜 : 2025.06.10
    이름 : 김태경
    내용 : RxJS 비동기 처리 실습
*/

const { Observable, of, from, fromEvent} = rxjs;

//Observable 생성
const simpleObservable$ = new Observable((subscriber)=>{
    console.log('simpleObservable 시작');

    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    console.log('simpleObservable 끝');
});

// Observable 구독
const subscription = simpleObservable$.subscribe({
    next: (value) => {
        console.log(`value : ${value}`);
    },
    error: (err) => {
        console.log(`err : ${err}`);
    },
    complete: () => {
        console.log(`complete`);
    }
});

// of() - 간단하게 Observable 생성
const myObservable = of(1,2,3,4,5);

myObservable.subscribe({
    next: (value)=>{
        console.log(`value : ${value}`);
    },
    error: (err)=>{
        console.log(`err : ${err}`);
    },
    complete: ()=>{
        console.log(`complete`);
    }
});

//RxJS 이벤트
const {map} = rxjs.operators;
const btn = document.getElementById('btn');
fromEvent(btn, 'click').pipe(map(() => '버튼클릭!')).subscribe(console.log);

//ajax
const {ajax} = rxjs.ajax;

const apiObserverble$ = ajax("http://localhost:3000/todos/2").pipe(map(result => result.response));
apiObserverble$.subscribe(todo => {
    console.log(todo);
});