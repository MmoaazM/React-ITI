
// -------- Exercise 1

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  alert("Button clicked!");
});


// -------- Exercise 2
let box2 = document.getElementById("box2");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  if (box2.style.display === "none") {
    box2.style.display = "block";
  } else {
    box2.style.display = "none";
  }
});


// -------- Exercise 3
let input3 = document.getElementById("input3");
let para3 = document.getElementById("para3");
input3.addEventListener("input", function () {
  para3.textContent = "You typed: " + input3.value;
});


// -------- Exercise 4
let square4 = document.getElementById("square4");

square4.addEventListener("mouseenter", function () {
  square4.style.backgroundColor = "#4f46e5";
});

square4.addEventListener("mouseleave", function () {
  square4.style.backgroundColor = "#0ea5a0";
});


// -------- Exercise 5
let para5 = document.getElementById("para5");

document.addEventListener("keydown", function (event) {
  para5.textContent = "You pressed: " + event.key;
});


// -------- Exercise 6
let img6 = document.getElementById("img6");
let btn6 = document.getElementById("btn6");
let images6 = [
  "https://picsum.photos/id/1015/300/200",
  "https://picsum.photos/id/1025/300/200",
  "https://picsum.photos/id/1035/300/200",
  "https://picsum.photos/id/1043/300/200"
];
let imgIndex6 = 0;

btn6.addEventListener("click", function () {
  imgIndex6 = (imgIndex6 + 1) % images6.length;
  img6.src = images6[imgIndex6];
});


// -------- Exercise 7
let para7 = document.getElementById("para7");
let btn7 = document.getElementById("btn7");

btn7.addEventListener("click", function () {
  alert(para7.textContent);
});


// -------- Exercise 8
let heading8 = document.getElementById("heading8");
let btn8 = document.getElementById("btn8");

btn8.addEventListener("click", function () {
  heading8.textContent = "Welcome!";
});


// -------- Exercise 9
let box9 = document.getElementById("box9");
let btn9 = document.getElementById("btn9");
let colors9 = ["#4f46e5", "#0ea5a0", "#f59e0b", "#e11d48", "#16a34a"];
btn9.addEventListener("click", function () {
  let randomColor = colors9[Math.floor(Math.random() * colors9.length)];

  box9.style.backgroundColor = randomColor;
});


// -------- Exercise 10
let input10 = document.getElementById("input10");
let btn10 = document.getElementById("btn10");
let list10 = document.getElementById("list10");
btn10.addEventListener("click", function () {
  let text = input10.value.trim();

  if (text === "") {
    text = "New item";
  }
  let li = document.createElement("li");
  li.textContent = text;
  list10.appendChild(li);
  input10.value = "";
});
