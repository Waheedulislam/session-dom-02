// const allButton = document.getElementsByClassName('button-test');
// const prime = document.getElementsByClassName('prime');

// console.log(allButton);
// // console.log(prime);

// for (const button of allButton) {
//     button.addEventListener('click', function (e) {
//         // console.log(e.target.);

//     })
// }


let count = 0;

document.getElementById('add').addEventListener('click', function (e) {
    count = count + 1;
    document.getElementById('count').innerText = count;
})

document.getElementById('minus').addEventListener('click', function () {
    count = count - 1;
    document.getElementById('count').innerText = count;
})