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
makeH1Tag(`uzduotis 1`);

// uzd 2
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
const secondFunction = (text, tagNumber) =>
  document.write(`<h${tagNumber}>${text}</h${tagNumber}>`);
secondFunction("uzd2", 5);

// uzd 3
// Generuokite atsitiktinį stringą, pasinaudodami kodu md5(time()). Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją ir preg_replace_callback();

// uzd 4
// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką skaičių;

console.log(` `);
console.log(`uzd 4`);
const countSmth = (int) => {
  let count = 0; // kiek kartu skaicius dalinasi be liekanos
  let listCountedIntegers = []; // sudedami skaiciai i masyva is kuriu dalinasi be liekanos
  if (!Number.isInteger(int)) {
    console.log(`Iveskite sveikaji skaiciiu`);
    return;
  } else {
    for (let i = 2; i <= int; i++) {
      // i = 2, kadangi is nulio nedaliname, o is vieneto negalime dalinti pagal salyga
      if (i !== int && int % i === 0) {
        listCountedIntegers.push(i);
        count++;
      }
    }
  }
  console.log(`Skaicius ${int} be liekanos dalinasi ${count} karta(-u/us)`);
  return listCountedIntegers;
};
countSmth(9);

// uzd 5
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
console.log(` `);
console.log(`uzd 5`);
const arr1 = generateRandomNumbersList(33, 77, 10);
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
const makeAlotRandomArrays = () => {
  let randomArray = [];
  let isVisoMasyvu = random(10, 30); // kiek kartu viska kartoti
  console.log(`Kiek bus sukuriama masyvu: ${isVisoMasyvu}`);
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

makeAlotRandomArrays();

// uzd 8
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.
console.log(` `);
console.log(`uzd 8`);
let naujasMasyvas = makeAlotRandomArrays();
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
let pirminis = true; // ar atsitiktinis skaicius yra pirminis
let paskutiniaiTrysPirminiai = 0; // kiek pirmniu skaiciu is eiles nuo galo turime masyve
let uzduotis8 = generateRandomNumbersList(1, 33, 3); // pradinis 3 elementu masyvas

while (paskutiniaiTrysPirminiai !== 3) {
  console.log(uzduotis8);
  pirminis = true;
  for (let i = uzduotis8.length - 1; i > uzduotis8.length - 4; i--) {
    arPirminis(uzduotis8[i]);
  }
  uzduotis8.push(random(1, 33));
}
// tikriname ar skaicius yra pirminis
function arPirminis(number) {
  for (let i = 2; i < number; i++) {
    if (number > 1 && number % i === 0) {
      pirminis = false;
      break;
    }
  }
  if (pirminis) {
    console.log(`Skaicius ${number} yra pirminis`);
    paskutiniaiTrysPirminiai++;
    console.log(`pirminiu is eiles:           ${paskutiniaiTrysPirminiai}`);
  } else {
    console.log(`Skaicius ${number} nepirminis`);
    paskutiniaiTrysPirminiai = 0;
    console.log(`pirminiu is eiles:           ${paskutiniaiTrysPirminiai}`);
    console.log();
  }
}

// uzd 10
// Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.
console.log(` `);
console.log(`uzd 10`);
let uzduotis10 = [];
let pirminiuSuma = 0,
  pirminiuSkaiciuKiekis = 0,
  pirminiuVidurkis = 0,
  maziausiasSkaicius = 100,
  sukam = 0;

function tikrinameArPirminis(number) {
  let arSkaiciusPirminis = true;
  for (let i = 2; i < number; i++) {
    if (number > 1 && number % i === 0) {
      arSkaiciusPirminis = false;
      break;
    }
    if (arSkaiciusPirminis) {
      pirminiuSuma += number;
      pirminiuSkaiciuKiekis++;
    }
  }
}

// sukuriame masyva
for (let i = 0; i < 10; i++) {
  let randomArray = [];
  for (let j = 0; j < 10; j++) {
    const randomNumber = random(1, 100);
    randomArray.push(randomNumber);
    // tikrinameArPirminis(randomNumber);
  }
  uzduotis10.push(randomArray);
}

// while (sukam !== 5) {
while (pirminiuVidurkis <= 70) {
  console.log(uzduotis10);
  // patikriname ar skaicius yra pirmnis ir suskaciuojame ju suma bei vidurki
  for (let index in uzduotis10) {
    for (let value of uzduotis10[index]) {
      tikrinameArPirminis(value);
    }
  }
  pirminiuVidurkis = pirminiuSuma / pirminiuSkaiciuKiekis;
  console.log(`Pirminiu suma: ${pirminiuSuma}`);
  console.log(`Pirminiu skaiciu kiekis: ${pirminiuSkaiciuKiekis}`);
  console.log(`pirminiu skaiciu vidurkis: ${pirminiuVidurkis}`);

  // maziausio skaiciaus indeksas masyve
  let maziausioSkaiciausPirmasIndeksas = 0,
    maziausioSkaiciausAntrasIndeksas = 0;
  for (let i = 0; i < uzduotis10.length; i++) {
    // console.log(`I: ${i} ---------------------`);
    for (let j = 0; j < uzduotis10.length; j++) {
      // console.log(`${j}: ${uzduotis10[i][j]}`);
      if (uzduotis10[i][j] < maziausiasSkaicius) {
        maziausiasSkaicius = uzduotis10[i][j];
        maziausioSkaiciausPirmasIndeksas = i;
        maziausioSkaiciausAntrasIndeksas = j;
      }
    }
  }
  console.log(`Maziausias skaicius: ${maziausiasSkaicius}`);
  console.log(`Maziausio pirmas indeksas: ${maziausioSkaiciausPirmasIndeksas}`);
  console.log(`Maziausio antras indeksas: ${maziausioSkaiciausAntrasIndeksas}`);

  // ar pirminiu vidurkis mazesnis nei 70
  if (pirminiuVidurkis <= 70) {
    maziausiasSkaicius =
      uzduotis10[maziausioSkaiciausPirmasIndeksas][
        maziausioSkaiciausAntrasIndeksas
      ] + 3;

    uzduotis10[maziausioSkaiciausPirmasIndeksas][
      maziausioSkaiciausAntrasIndeksas
    ] = maziausiasSkaicius;

    console.log(
      uzduotis10[maziausioSkaiciausPirmasIndeksas][
        maziausioSkaiciausAntrasIndeksas
      ]
    );
    console.log(`Maziausias skaicius: ${maziausiasSkaicius}`);
  }
  (pirminiuSuma = 0), (pirminiuSkaiciuKiekis = 0);
  sukam++;
  console.log(
    `-----------------prasukom ${sukam} kartus--------------------- ciklo pabaiga`
  );
  console.log(uzduotis10);
  console.log(
    uzduotis10[maziausioSkaiciausPirmasIndeksas][
      maziausioSkaiciausAntrasIndeksas
    ]
  );
}
