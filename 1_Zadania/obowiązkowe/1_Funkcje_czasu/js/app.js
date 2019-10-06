function countHello(number) {
    let counter = 1;
    let interval = setInterval(() => {
        console.log(`Hello ${counter}`)
        counter++;

        if (number < counter) {
            clearInterval(interval);
        }
    }, 500)
}