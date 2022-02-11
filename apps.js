// let a;
// let aa;
// let aaa;

// add(4,7);

// function add(a,b){
//     console.log(a+b);
//     }

// ------------------ OPERATORS ----------------
//bir veya daha fazla degerden tek degerden tek değer döndüren yapılardır.

// var a=4 ,b=5;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);

// c=--b;
// c=b--; console.log({b}); // atama operatörü sagdan sola dogur işler. öce atamayı yaptı sonra b nin değerini düşürdü.
// console.log(c,b);
// console.log(b++); //önce yazdır sonra değeri arttır.
// console.log(++b);

// console.log(b%2); // mod alma işlemi;


// // ------                Assignment operators     --------

// var x=4, y=12;
//  console.log(a+=b,a*=b);

//  //     ------------------- Comparasion operators ---------


//  var q=4;
//  var w='4';
// console.log(q==w); // değerleri aynı oldugu için true verir.
// console.log(q===w) // her şeyi aynı mı diye kontrol eder tip farklı oldugu için false verir.

// console.log(q!==w);
// console.log(q<=w);

// console.log(false==false); // false false eşittir bu yüzden true verir.
// console.log(Boolean(0)==false) // boolean(0) false değeri oldugu için true verir.
// console.log(Boolean('0')==false);
// console.log('0'==false) // tipi belirtilmedigi için string 0 false kabul edilip true verecek.
// console.log(typeof null);// null değerinin tipi obje veriyor.
// console.log(null==false); console.log(null==true); console.log(null==0);
// // Null değeri bunların hiçbirine eşit değildir. hepsi false verir.
// console.log(Boolean(null)==false); //true verir boolean null false dır.
// console.log(null==null)

// console.log(typeof NaN);
// console.log(NaN==NaN); // nan nan'a eşit değildir false verir.


// // var mt;
// // while(isNaN(mt)){
// //     mt=prompt("Enter a number");
// //     mt=Number(mt);
// //     console.log(mt, typeof mt);
// // }

// console.log(015+034)// 34 -- JS sekizlik tabanda yazdıgımızı düşünüyor.
// console.log(15+025)//36
// console.log(15+25)

// console.log(7<8<9);
// console.log(false<7); // true veriyor false sıfır gibi düşünüyor.
// console.log('Clarusway'<'clarusway');
// console.log('C'.charCodeAt(), 'c'.charCodeAt());


//------------- LOGİCAL OPERATORS --------------
//NOT(!) AND(&&) OR(||)

var a=2;
let b=8;
var c='5';
var d="16"
console.log(b+b);
console.log(a+b)
console.log(c-b);// string ifadeyi integer gibi düşünüyor.
console.log(d-c);

let x= 2 && 8;
console.log(x); // and operatöründe ikisi de true ise sonuncuyu döndürür.
console.log(0||false)
console.log(1||0)
console.log(2||5)
console.log(true||5);
console.log(null&&1);

let password='pass21'
console.log(password.length>3 && password.includes('2') || password.length>11);

//---------------------- Nullish Coalescing Operator ---------
//?? null veay undefined ise diger degeri değil ise ilk degeri verir.

var k=0 ?? 4;
let z= null??4;
console.log(k)
console.log(z);












