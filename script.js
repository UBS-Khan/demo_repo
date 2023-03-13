const wordFreq = (sentence) => {
    let arr = sentence.split(" ")
    let freq = {}
    for(let word of arr){
        if(word in freq){
            freq[word]++
        } else{
            freq[word] = 1
        }
    }
    return freq
}

console.log(wordFreq("My name is Umair Umair Bin Salman"))