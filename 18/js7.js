var array = [1,2,3,4,5]

function arrFnc(arrlist){ // foreach는 배열 수만큼 반복한다.
    arrlist.forEach((data,index,arr)=>{
        console.log(`데이터:${data}`)
        console.log(`인덱스:${index}`)
        console.log(`arr:${arr}`)
    })
   
}

arrFnc(array)