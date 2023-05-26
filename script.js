let arrayOfLetters = ["A", "B", "C", "D", "E"];

for (let i = arrayOfLetters.length - 1; i >= 1; i--) {
  let x = Math.floor(Math.random() * (i + 1)); // 0 <= x <= i
  let temp = arrayOfLetters[x];
  arrayOfLetters[x] = arrayOfLetters[i];
  arrayOfLetters[i] = temp;
}

let randomArray1 = arrayOfLetters; // output of the 1st array
console.log(randomArray1);

for (let i = arrayOfLetters.length - 1; i >= 1; i--) {
  let x = Math.floor(Math.random() * (i + 1)); // 0 <= x <= i
  let temp = arrayOfLetters[x];
  arrayOfLetters[x] = arrayOfLetters[i];
  arrayOfLetters[i] = temp;
}
let randomArray2 = arrayOfLetters; // output of the 2nd array
console.log(randomArray2);

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");
let item10 = document.getElementById("item10");

function shuffle() {
  alert("shuffling now!");
  item1.classList.add(`${randomArray1[0]}`);
  item1.innerHTML = `${randomArray1[0]}`;

  item2.classList.add(`${randomArray1[1]}`);
  item2.innerHTML = `${randomArray1[1]}`;

  item3.classList.add(`${randomArray1[2]}`);
  item3.innerHTML = `${randomArray1[2]}`;

  item4.classList.add(`${randomArray1[3]}`);
  item4.innerHTML = `${randomArray1[3]}`;

  item5.classList.add(`${randomArray1[4]}`);
  item5.innerHTML = `${randomArray1[4]}`;

  item6.classList.add(`${randomArray2[0]}`);
  item6.innerHTML = `${randomArray2[0]}`;

  item7.classList.add(`${randomArray2[1]}`);
  item7.innerHTML = `${randomArray2[1]}`;

  item8.classList.add(`${randomArray2[2]}`);
  item8.innerHTML = `${randomArray2[2]}`;

  item9.classList.add(`${randomArray2[3]}`);
  item9.innerHTML = `${randomArray2[3]}`;

  item10.classList.add(`${randomArray2[4]}`);
  item10.innerHTML = `${randomArray2[4]}`;
}

item1.addEventListener("click", function () {
  let data = item1.innerHTML;
  console.log(`you have clicked ${data}`);
});

item2.addEventListener("click", function () {
  let data = item2.innerHTML;
  console.log(`you have clicked ${data}`);
});

item3.addEventListener("click", function () {
  let data = item3.innerHTML;
  console.log(`you have clicked ${data}`);
});

item4.addEventListener("click", function () {
  let data = item4.innerHTML;
  console.log(`you have clicked ${data}`);
});

item5.addEventListener("click", function () {
  let data = item5.innerHTML;
  console.log(`you have clicked ${data}`);
});

item6.addEventListener("click", function () {
  let data = item6.innerHTML;
  console.log(`you have clicked ${data}`);
});

item7.addEventListener("click", function () {
  let data = item7.innerHTML;
  console.log(`you have clicked ${data}`);
});

item8.addEventListener("click", function () {
  let data = item8.innerHTML;
  console.log(`you have clicked ${data}`);
});

item9.addEventListener("click", function () {
  let data = item9.innerHTML;
  console.log(`you have clicked ${data}`);
});

item10.addEventListener("click", function () {
  let data = item10.innerHTML;
  console.log(`you have clicked ${data}`);
});
