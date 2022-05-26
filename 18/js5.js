
const year = ['2022','2023','2024','2025']

console.log(year.indexOf('2026')) //-1  인덱스 번호 리턴
console.log(year.includes('2024')) // 배열 안에 있는지 없는지 체크 true, false
console.log(Array.isArray(year)) // 배열인지 아닌지 체크(앞에 생성자 Array 써줘야함)
console.log(Array.isArray(year1)) // false지만 선언이 안돼서 안보임. 오브젝트를 줘야 보임.

// year.indexOf('2026')
const value = year.indexOf('2024');
if(value!==-1){
    console.log('값이 있다')
} else{
    console.log('값이 없다')
}
