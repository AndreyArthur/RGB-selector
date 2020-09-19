window.addEventListener('load', start)

function start() {
  detectChange();
}

function detectChange() {
  const input = document.querySelectorAll('input[type="range"]');

  function displayColorValue(i) {
    document.querySelectorAll('input[type="text"]')[i]
      .value = input[i].value;
  }

  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("change", () => {
      displayColorValue(i);
      render(input);
    })
  }
}

function render(input) {
  document.querySelector('body > div')
    .style.backgroundImage = `linear-gradient(to bottom, #fff,  rgb(${input[0].value}, ${input[1].value}, ${input[2].value}))`;
}