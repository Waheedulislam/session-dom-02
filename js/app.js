// const allButton = document.getElementsByClassName('button-test');
// const prime = document.getElementsByClassName('prime');

// console.log(allButton);
// // console.log(prime);

// for (const button of allButton) {
//     button.addEventListener('click', function (e) {
//         // console.log(e.target.);

//     })
// }


/* let count = 0;

document.getElementById('add').addEventListener('click', function (e) {
    count = count + 1;
    control('count');
})

document.getElementById('minus').addEventListener('click', function () {
    if (count > 0)
        count = count - 1;
    control('count');
}) */


let count = 0;

function add(e) {
    count++;
    control('count');
}

function minus(paramas) {
    if (count > 0)
        count--;
    control('count');
}

function control(id) {
    document.getElementById(id).innerText = count;
}