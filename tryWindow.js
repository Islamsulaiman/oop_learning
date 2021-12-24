let obj = {
  islam: 26,
  sara: 24,
  rahma: 19,
};

let finalData = "";
for (let key in obj) {
  finalData += `<p>${key} is ${obj[key]} years old</p>`;
}
console.log(finalData);
document.getElementById("info").innerHTML = finalData;
