//생성자 방식으로 배열 표기

let array =new Array(3); //괄호 안에 length
array[0] = 'A';
array[1] = 'B';
array[2] = 'C';
console.log(array); // A,B,C

let array2 = new Array(1,2,3) // 괄호 안에 인수
console.log(array2); // 1,2,3

let array3 = [1,2,3,4,5]
console.log(array3); // 1,2,3,4,5

let array4 = new Array(10); //괄호 안에 입력한 게 숫자일때는 길이로 인식을 하게 됨
// index[0] = 10, length= 1 가 아니고 length가 10
console.log(array4) // 10 empty items가 나옴 
console.log(array4.length) //10

let array5 = new Array('go');
// index[0] = go, length= 1 
console.log(array5) // go


let array6 = new Array(8);
console.log(array6.length)

let array7 = new Array(1,2,3,4,5,6,7,8,9)
console.log(array7)