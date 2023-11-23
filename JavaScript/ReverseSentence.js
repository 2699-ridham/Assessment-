var str = "My name is ridham";
var result = ReverseSentence(str);
console.log(result);

function ReverseSentence(str) {
    var newStr = str.split(" ");
    var reverseWord = newStr.map((word) => {
        return word.split("").reverse().join("");
    })

    var ans = reverseWord.join(" ");
    return ans;
}
