const prompt = require("prompt-sync")();  

const v = prompt("Enter a value: ");
console.log(v)

//data types:
String // ""  '' `` 
boolean //true or false
number // 1, 2, 3, -4, 5
undefined //is a type and where an expr. dont have correct value
null // empty or nothing value. also type of value

BigInt // for large numbers
Symbol // unique and immutable value

//VARIABLES
var helloWorld = "HELLO" //func. scoped , u can change it later

let x = 3 //u can change it later //BLOCK scoped

const y = 5 //cant be changed later //BLOCK scoped

//BLOCK VS FUNC. SCOPE

//BLOCK SCOPE:  
//block içinde ulaşılabilir. Dışında değil.

/*
== are they same, 
=== tamamen aynı mı diye bakar. strict comparison. RECOMMENDED
 != , !== 
 , > , < , >= , <=
&& , || , !
+ , - , * , / , %
++ , --
*/    

/*       ------conditional statements------*/
if(true) {
    console.log("this is true")
} else if(false) {
    console.log("this is false")}
    

//ARRAYS ____________________________________________
/*
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2[0]);

// array destructuring (rest operator)
const arr4 = [1, 2, 3, 4, 5, 6];
const [x, x2, ...y] = arr4;
console.log(x, x2, y); // 1 2 [3,4,5,6]

// spread operator
const arr5 = [...arr, 6, 7, 8];
console.log(arr5); // [1,2,3,4,5,6,7,8]


//>spread operator
const arr3 = [...arr, 6, 7, 8] //new array  
console.log()
*/


//LOOPS ____________________________________________
const arr = [1, 2, 3];

for (let /*u cannot use const*/ i = 0 ; i < 10; i++){
    console.log(arr[i])
    continue
}


//YA DA
const arr2 = [4, 5, 6];

for (let value of arr2){
    console.log(value)
    
}

//YA DA
const arr3 = [1,2,3,4];

for (let [i, value] of arr3.entries()){
    console.log(i, value)
}

//OBJECTS ____________________________________________
const obj = {
    name: "seher",
    age: 21,
    sayHello: function() {
    return "hi" 
  },  //BURAYA VİRGÜL GEREKTİ YOKSA ERROR VERDİ!!!!
    career: {} //BURAYA DA SONRASINDA Bİ ŞEY YOK DİYE ; KOYDURMADI. YOKSA ERROR
}

const obj2 = {

    hairColor: "red",
    arr6: [1,2,3],
}

//SET_____________________________________________
const mySet = new Set();
mySet.add(1);
mySet.delete(1);
mySet.has(1);
mySet.size;

for (const value of mySet) {
    console.log(value);
}   

mySet.clear();
//MAPS __________________________________________
const myMap = new Map()
const numberMap = new Map([[1, 'one'] , [2, 'iki']]);

myMap.set(4, "four") //e bu niye çift tırnak oldu?
myMap.delete(4)
myMap.get(1)
myMap.has(1)

for(const values of myMap.values()) {
    //bla bla.....ç.
}

//ERROR HANDLING _________________________________________

try {
    riskyFunction();
} catch(error){
    console.error("error here:", );
} finally {
    console.log("cleanup code can go here."); //always run //yani?
}
 throw new Error("that not good")

 //func________________________________________________________
 function greet(name, age=12) {
    console.log(name)
 }

 function addNums(...number) {

 }

 //REDUCE 

 const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

const names = users.map((user) => user.name);
console.log(names); // ["Alice", "Bob"]

const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

//BU KONUDA NOT 
/*. 
----> reduce ne zaman gerçekten lazım?
Toplama/çarpma gibi işlemler: Örneğin e-ticaret uygulamasında sepet toplam fiyatını hesaplamak.
Gruplama: Örneğin blog yorumlarını kullanıcıya göre gruplamak.
Sayma: Mesela hangi ürün kaç kez eklendi, hangi kelime kaç kez geçti.
Birleştirme: Bir dizi stringi/objeyi tek bir değer haline getirmek.
API'den gelen karmaşık verileri tek formata dönüştürmek: Örneğin back-end’den gelen array’i frontend’in ihtiyacına göre sadeleştirmek.

----->reduce kullanmazsak
--çoğu basit iş için for veya map, filter yeterli olur. Ama:
reduce birden fazla işlemi tek geçişte yapar, daha kısa ve performanslıdır.
--Kodun daha fonksiyonel ve modern görünmesini sağlar (özellikle React/Next.js projelerinde sık kullanılır).
---Karmaşık verileri işlerken (örneğin API’den gelen array’i tek değere/objeye çevirmek) neredeyse en pratik yol budur.

--->web/app kısmnda
-React/Next.js: API’den gelen array verilerini state’e set etmeden önce dönüştürürken.
-Tablo/Chart uygulamaları: Toplam, ortalama, grup, istatistik hesapları.
-E-ticaret: Sepet toplamı, indirim hesaplama.
-Analitik uygulamaları: Kullanıcı istatistiklerini hesaplama.
-Back-end/Front-end data pipeline’ları: Karmaşık veriyi sadeleştirmek.

*/


//   .THIS KEYWORD ______________________________

const user = {
  name: "Ali",
  sayHi: function() {
    console.log(this.name);  //Bir nesne içinde this kullanırsan, o nesneyi gösterir
  }                          //burda da user kısmını gösteriyo
};
user.sayHi(); // "Ali"

//Globalde (veya serbest fonksiyonda) this genelde window (tarayıcı) ya da undefined (strict mode) olur
//Arrow function’da this dışarıdaki bağlamdan miras alır, kendi thisi yok

const object2 = {
  name: "Ayşe",
  say: () => console.log(this.name)
};
obj.say(); // undefined (çünkü arrow function kendi this'ini bağlamaz)


//PROMISES --DAHA UZUN VID IZLEMEYI ONERIYO

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (true) {
        resolve(value); // Fulfills the promise 
    } else {
        reject(error); // Rejecst the promise
    }
});
//so it has pending state, fulfill state, reject state
// ---------işlem devam ediyo - başarılı - başarısız

//API çağrılarında çok kullanılır
//React/Next.js, Node.js projelerinde en temel asenkron yapı Promise tir.
//Sonucu .then() ve .catch() ile yakalarsın.

