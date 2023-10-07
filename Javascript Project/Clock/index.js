function buildCLock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  document.getElementById("clock").innerText = `${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  setTimeout(buildCLock, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  buildCLock();
});
