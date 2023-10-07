function print() {
  printJS({ printable: "details", type: "html", css: "style.css" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("print").addEventListener("click", () => {
    print();
  });
});
