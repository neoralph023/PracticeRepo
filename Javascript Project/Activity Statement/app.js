document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("print").addEventListener("click", () => {
    printJS({ printable: "details", type: "html", css: "style.css" });
  });
});
