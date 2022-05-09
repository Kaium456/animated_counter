//For Project
let count = 0;
var project = setInterval(project, 10);
function project() {
  count++;
  let num1 = (document.getElementById("num1").innerHTML = count);
  if (count >= 200) {
    clearInterval(project);
  }
}
//For Client
let count2 = 0;
var client = setInterval(client, 8);
function client() {
  count2++;
  let num2 = (document.getElementById("num2").innerHTML = count2);
  if (count2 >= 500) {
    clearInterval(client);
  }
}

// For Achive

let count3 = 0;
var achiv = setInterval(achiv, 10);
function achiv() {
  count3++;
  let num3 = (document.getElementById("num3").innerHTML = count3);
  if (count3 >= 250) {
    clearInterval(achiv);
  }
}
