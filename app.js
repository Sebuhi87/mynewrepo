// function myFunction() {
//     document.getElementById("men").innerHTML = "neterseuz ale kjkjh";
// }


// let txt = "Hello World!";
// txt = txt.toUpperCase();
// console.log(txt);

// let a = 8;
// let b = 10;
// let c = "25";
// console.log(a + b + c);

// let d = 10;
// let g = 25;

// if (d > g) {
//     console.log("cutdur")
// } else {
//     if (g > d) {
//         console.log("boyukdur")
//     }
// }

// let a = 3;
// let b = 4;
// let c = 3 * 4;
// let d = 3 + 4;
// console.log(d, c);

// let u = 1234567;
// let f = parseInt(u / 100) % 10;
// console.log(f);

// let a1 = 123;
// let a2 = a1 % 10;
// let a3 = parseInt(a1 / 10) % 10;
// let a4 = parseInt(a1 / 100) % 10;
// console.log(a2, a3, a4)

// let b1 = 123;
// let b2 = parseInt(b1 / 10) % 10;
// let b3 = b1 % 10;
// let b4 = parseInt(b1 / 100) % 10;
// console.log(b2, b3, b4)

// let c1 = 123;
// let c2 = "3"
// let c3 = "3"
// console.log(c2 + c1 + c3)

// let d1 = 1234;
// let d2 = 1234 ** 4;
// console.log(d2);


// let r1 = 3;
// let r2 = 4;
// let r3 = r1 ** r2;
// console.log(r3);

// let o1 = 2;
// o1 **= 5;
// console.log(o1);

// let k1 = 2;
// let k2 = 8;
// if (k1 = k2) {
//     console.log("bababab");
// } else {
//     console.log("dlhdld");
// }

// let qiymet = 3;
// if (qiymet == 5 && qiymet <= 8) {
//     console.log("elaci");
// } else if (qiymet == 4 && qiymet >= 12) {
//     console.log("yaxsi");
// } else if (qiymet == 3) {
//     console.log("qeyri-kafi");
// } else if (qiymet == 2) {
//     console.log("kafi");
// } else {
//     console.log("qarpiz");
// }

// let a = 8;
// switch (a) {
//     case 2:
//         console.log("kafi");
//         break;
//     case 3:
//         console.log("qeyri-kafi");
//         break;
//     case 4:
//         console.log("yaxca");
//         break;
//     default:
//         console.log("hecbir qiymet yocdur");


// }

function calculator() {
    let eded1 = parseInt(document.getElementById('eded1').value);
    let eded2 = parseInt(document.getElementById('eded2').value);

    let emeliyyat = document.getElementById('emeliyyat').value;

    if (emeliyyat == '+') {
        document.getElementById('netice').value = eded1 + eded2;
    } else if (emeliyyat == "-") {
        document.getElementById('netice').value = eded1 - eded2;
    } else if (emeliyyat == '*') {
        document.getElementById('netice').value = eded1 * eded2;

    } else {
        document.getElementById('netice').value = eded1 / eded2;
    }
}

let a1 = 10;
a1 **= 2;
console.log(a1);

let x1 = 5;
let y1 = 12;
let c1 = x1 + y1;
let c2 = (x1 + y1) / 2;
console.log(c1, c2);


git

let s1 = 123;
let s2 = parseInt(s1 / 10) % 10;
let s3 = 123 % 10;
let s4 = parseInt(s1 / 100) % 10;

console.log(s2, s3, s4)

let d1 = 25;
if (d1 == 25) {
    console.log("tek reqemdir");
} else {
    console.log("cut reqemdir");
}

let n = 1;
let n1 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;
console.log(n ** 2, n1 ** 2, n3 ** 2, n3 ** 2, n4 ** 2, n5 ** 2);