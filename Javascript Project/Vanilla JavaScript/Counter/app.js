let count = 0;

function style(count) {
  if (count > 0) {
    document.querySelector(".container span").style.color = "green";
  } else if (count < 0) {
    document.querySelector(".container span").style.color = "red";
  } else {
    document.querySelector(".container span").style.color = "black";
  }
}

function getBtnValues() {
  const btns = document.querySelectorAll(".btn");
  const counter = document.querySelector(".container span");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) count--;
      if (styles.contains("increase")) count++;
      if (styles.contains("reset")) count = 0;

      counter.textContent = count;
      style(count);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getBtnValues();
});
