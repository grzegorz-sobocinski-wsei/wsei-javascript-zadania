document.addEventListener('DOMContentLoaded', function () {

    const x = 5;
    let y = 3;

    for (var i = 0; i < 10; i++) {
        console.log(i, y);
    }
    console.log(i, y);

    function myFn(param1) {
        let y = 4;
        let i = 20;
        console.log(param1, y, i);


    }
    myFn(i)

    console.log(x);
    {
        let y = 25;
        console.log(y);
        var z = 50;

    }

    console.log(z, y);
})