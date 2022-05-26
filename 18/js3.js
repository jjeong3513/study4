const color = ['red','green','blue']
console.log(color.unshift('yellow')) // 제일 앞에 추가 -> 'yellow', 'red', 'green', 'blue' //4
console.log(color)
console.log(color.push('orange')) // 제일 뒤에 추가 -> 'yellow', 'red', 'green', 'blue', 'orange' // 5
console.log(color)
console.log(color.splice(2,0,'sky','black')) // 2개 뒤에 추가되고 잘라낼 게 없으니까 0
//splice(시작인덱스 ,삭제할 갯수, 추가될 값))
console.log(color)