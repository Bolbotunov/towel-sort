
module.exports = function towelSort (matrix) {
  let arrResult=[]
    for(let i = 0; i < matrix.length; i++){
    if(i === 0 || i%2 == 0){
      arrResult.push(matrix[i]);
    }else{
     arrResult.push(matrix[i].reverse());
    }
  }
return arrResult.flat()
}

