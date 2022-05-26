const subway = ['1호선','2호선','3호선','4호선']; // index는 0부터 시작. length는 개수이기 때문에 4개

console.log(subway[2]) // 3호선
console.log(subway.length) // 4
console.log(subway[0]) // 1호선


// delete subway[2];
 //딜리트 연산자를 사용하게 되면 2번째인 3호선을 비워버린다. (undefined 상태로) // 배열의 인덱스는 수정하지 않는다.
subway.splice(2,1) // 괄호 앞은 시작 인덱스, 뒤는 거기서부터 몇개(개수) -> 배열 인덱스가 업데이트 된다.
console.log(subway)
console.log(subway.length) // length : 길이를 뽑아오는 속성


//for
for(let i=0; i<subway.length; i++) { // i<subway.length; -> i<4;로 해도 됨 (4보다 작게 한 이유는 0,1,2,3만 필요하니까 4부터 걸러지게 하려고)
    console.log(subway[i])
}


