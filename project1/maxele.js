const arr=[1,2,3,2,3,4,1,2]

function findMaximumOccuredNumber(arr){
    const maximumnumber = {}
    let maxEle = arr[0]
    let maxCount = 1

    for(let i=0 ; i<arr.length; i++){
        const element = arr[i]
        if(maximumnumber[element]){
            maximumnumber[element]++
        }else{
            maximumnumber[element] = 1
        }
        if(maximumnumber[element] > maxCount){
            maxEle = element
            maxCount = maximumnumber[element]
        }
    }
    console.log(maximumnumber)
    return maxEle
    
}
console.log(findMaximumOccuredNumber(arr))

const arr1 =[10,20,10,30,10,20]

function findMaxNum(arr1){
    const maxNumber = {}
    let maxNum = arr1[0]
    let maxNumCount = 1 

    for(i=0; i<arr1.length; i++){
        const ele  = arr1[i]
        if(maxNumber[ele]){
            maxNumber[ele]++
        }else{
            maxNumber[ele]= 1
        }
        if(maxNumber[ele] > maxNumCount){
            maxNum = ele
            maxNumCount = maxNumber[ele]
        }
    }
    console.log(maxNumber)
    return maxNum
}
console.log(findMaxNum(arr1))
