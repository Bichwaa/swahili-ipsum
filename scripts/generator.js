//put the words together
function bunchWords(amount){
    let words = ''
    for(let i=0; i<= amount-1; i++){
        words = words + sw[Math.floor(Math.random() * sw.length)].sw + " "
    }
    return words
}

