
const btn = document.getElementById("btn");

function random(value) {
    return Math.floor(Math.random() * (value + 1));
}

btn.addEventListener("click", () => {
    const randoms = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randoms;
  });
