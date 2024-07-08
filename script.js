const body = document.querySelector("body");
const element = document.querySelectorAll("input");

for (const index of element) {
  index.addEventListener("click", () => {
    body.classList.toggle(index.value);
  });
}
