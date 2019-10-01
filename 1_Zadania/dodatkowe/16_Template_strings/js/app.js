document.addEventListener('DOMContentLoaded', function () {

    const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];
    // var sorted= array.sort((a,b)=>a-b);
    // // console.log(sorted);
    // // var newVar = array.flat();
    // // console.log(newVar);
    // newVar.sort((a,b)=>a-b);
    var flat = array.flat();
    flat.sort((a, b) => a - b);
    console.log(flat);
    var newFlat = flat.map((element) => element * 2);
    console.log(newFlat);
    var newVar = newFlat.reduce((a, b) => a * b);
    console.log(newVar);

})