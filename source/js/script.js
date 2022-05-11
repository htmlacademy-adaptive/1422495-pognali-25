window.onload = function () {
  fun1();
  fun2();
}

let rng = document.getElementById("r1");
let rng2 = document.getElementById("r2");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let minGap1 = 1;
let sliderTrack = document.querySelector(".accordion__range-bar");
let sliderMaxValue = document.getElementById("r1").max;

function fun1() {
  if (parseInt(rng2.value) - parseInt(rng.value) <= minGap1) {
    rng.value = parseInt(rng2.value) - minGap1;
  }
  i1.value = rng.value;
  fillColor();
}
function fun2() {
  if (parseInt(rng2.value) - parseInt(rng.value) <= minGap1) {
    rng2.value = parseInt(rng.value) + minGap1;
  }
  i2.value = rng2.value;
  rng2.value = i2.value;
  fillColor();
}
function fillColor() {
  percent1 = (rng.value / sliderMaxValue) * 100;
  percent2 = (rng2.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #d2d5de ${percent1}% , #1D2E5B ${percent1}% , #1D2E5B ${percent2}%, #d2d5de ${percent2}%)`;
}


