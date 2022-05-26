const color =['red','green','blue','yellow']
color.shift()// 맨앞 제거
console.log(color)
color.pop() // 맨뒤 제거
console.log(color)

const famName=['철수','영희','순희','길동']
famName.splice(2,1) // 특정 부분 제거
console.log(famName)
const newFamName = famName.slice(2,3); // famName.slice(-1); 음수는 뒤에서부터 잘라줌
console.log(famName)
console.log(newFamName) 
//console.log(newFamName) '안녕하세요' -> 문자가 들어가면 유사배열이기 때문에 숫자처럼 slice, splice 사용 가능


const arr1 = [1,2,3]
const arr2 = [4,5,6,7,8,9] // concat() 배열끼리 합치기
const arrPlus = arr1.concat(arr2)
console.log(arrPlus) //1 ~ 9

const arrReverse = arrPlus.reverse();
console.log(arrReverse) // 9~ 1

let multiArray = [['a','b','c'],['가','나','다'],['산','바다']] // 중첩문 안에 중첩문 여러개 사용 가능
console.log(multiArray); // flat() : 중첩된 배열을 합친다.
const multiflat = multiArray.flat(1); // flat(중첩depth)
console.log(multiflat);

// const txtjoin = multiflat.join(); // 문자열로 합치기
const txtjoin = multiflat.join('-') //a-b-c-가-나-다-산-바다
console.log(txtjoin) 
