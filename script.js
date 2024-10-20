const value = document.querySelector("#value");
const circle = document.querySelector("circle");
let circumference = circle.getTotalLength();
let inpValue = document.querySelector("input");
let count = 0;
circle.style.strokeDashoffset = circumference;

function showProgressBar() {
  if (inpValue.value < 0) inpValue.value = 0;
  if (inpValue.value > 100) inpValue.value = 100;

  circle.style.strokeDashoffset =
    circumference - (inpValue.value / 100) * circumference;

  let timer = setInterval(() => {
    if (inpValue.value == 0) value.innerHTML = "0%";
    if (count == inpValue.value) {
      clearInterval(timer);
      count = 0;
      return;
    }
    count++;
    value.innerHTML = count + "%";
  }, 1000 / inpValue.value);
}
