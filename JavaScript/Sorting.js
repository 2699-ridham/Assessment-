var arr = "9,3,6,2,8,1,0";
var input = arr.split(",").map((item)=>{
    return parseInt(item.trim());
})

var result = SortArray(input);
console.log(result);

function SortArray(arr){
    arr.sort((a,b)=>{
        return b - a;
    })

    return arr;
}