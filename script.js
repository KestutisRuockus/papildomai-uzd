function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbersList(min, max, length) {
  let list = [];
  for (let i = 0; i < length; i++) list.push(random(min, max));
  return list;
}

// uzd 1
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;
const makeH1Tag = (text) => document.write(`<h1>${text}</h1>`);
makeH1Tag(`uzd 1`);

// uzd 2
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
const secondFunction = (text, tagNumber) =>
  document.write(`<h${tagNumber}>${text}</h${tagNumber}>`);
secondFunction("uzd2", 3);

// uzd 3
// Generuokite atsitiktinį stringą, pasinaudodami kodu md5(time()). Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją ir preg_replace_callback();

// uzd 4
// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką skaičių;

console.log(` `);
console.log(`uzd 4`);
const countSmth = (int) => {
  let count = 0;
  let listCountedIntegers = [];
  if (!Number.isInteger(int)) {
    console.log(`Iveskite sveikaji skaiciiu`);
    return;
  } else {
    for (let i = 2; i <= int; i++) {
      if (i !== int && int % i === 0) {
        listCountedIntegers.push(i);
        count++;
      }
    }
  }
  console.log(`Skaicius ${int} be liekanos dalinasi ${count} karta(-u/us)`);
  return listCountedIntegers;
};
countSmth(24);

// uzd 5
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
console.log(` `);
console.log(`uzd 5`);
const arr1 = generateRandomNumbersList(33, 77, 100);
let arraytUzduotis5 = [];
for (let value of arr1) {
  arraytUzduotis5 = arraytUzduotis5.concat(countSmth(value));
  console.log(value);
}
console.log(
  arraytUzduotis5
    .sort(function (a, b) {
      return a - b;
    })
    .reverse()
);

// uzd 6
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

// uzd 7
// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
console.log(` `);
console.log(`uzd 7`);
const makeAlotRandomNumbers = () => {
  let randomArray = [];
  let isVisoMasyvu = random(10, 30);
  for (let j = 0; j < isVisoMasyvu; j++) {
    for (let i = 0; i < random(10, 20); i++) {
      randomArray.push(random(0, 10));
    }
    if (j !== isVisoMasyvu - 1)
      randomArray[randomArray.length - 1] = makeArray(random(10, 20));
    else randomArray[randomArray.length - 1] = 0;
  }
  console.log(randomArray);
  return randomArray;
};

function makeArray(length) {
  let array = [];
  for (let i = 0; i <= length - 1; i++) {
    array.push(random(0, 10, random(10, 20)));
  }
  return array;
}

makeAlotRandomNumbers();

// uzd 8
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.
console.log(` `);
console.log(`uzd 8`);
let naujasMasyvas = makeAlotRandomNumbers();
let naujoMasyvoElementuSuma = 0;
for (let value of naujasMasyvas) {
  if (!isNaN(value)) naujoMasyvoElementuSuma += value;
  else
    console.log(
      `<-- Tai objektas! Jis nesumuojamas. Rodykle(<--) rodo kiek rado objektu`
    );
}
console.log(`Suma: ${naujoMasyvoElementuSuma}`);

// uzd 9
// Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.
console.log(` `);
console.log(`uzd 9`);
// let uzduotis8 = generateRandomNumbersList(1, 33, 5);
// console.log(uzduotis8);
// for (let i = uzduotis8.length - 1; i > uzduotis8.length - 4; i--) {
//   console.log(uzduotis8[i]);
// }
// function arPirminis(number) {
//   for (let i = 2; i < number; i++) {
//     console.log(`i: ${i}, ${number % i}`);
//     if (number % i === 0) return `false`;
//   }
//   return `pirminis`;
// }

// console.log(arPirminis(11));
