function writeCards(names, event) {
    const result = [];
    for (let name of names) {
        result.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return result;
}

function countDown(start) {
    for (let i = start; i >= 0; i--) {
        console.log(i);
    }
}