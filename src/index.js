
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || matrix.length==0)return []
    let arr=[]
    let per=true

    for(let item of matrix){
        if (!per) {
            arr= arr.concat(item.reverse())
            per=true

        }
        else {

            arr=    arr.concat(item)
            per=false}
    }

    return arr;
}
