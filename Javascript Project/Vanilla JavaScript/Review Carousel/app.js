const object = {
  Reviews: [
    {
      name: "Peter Jones",
      position: "intern",
      review: "lorem for peter",
    },
    {
      name: "Bill Anderson",
      position: "the boss",
      review: "lorem for bill",
    },
    {
      name: "Susan Smith",
      position: "Web developer",
      review: "lorem for susan",
    },
  ],
};

function surpriseBtnClicked() {
  document.getElementById("surpriseMeBtn").addEventListener("click", () => {
    const reviews = object.Reviews;
    const randomIndex = Math.floor(Math.random() * reviews.length);

    document.getElementById("name").textContent = reviews[randomIndex].name;
    document.getElementById("position").textContent = reviews[randomIndex].position;
    document.getElementById("review").textContent = reviews[randomIndex].review;
  });
}

function leftBtnClicked() {
  document.getElementById("previous").addEventListener("click", () => {
    let contentName = document.getElementById("name").textContent;
    const reviews = object.Reviews;
    // console.log(reviews.length - 1);
    for (i = 0; i < reviews.length; i++) {
      if (contentName === reviews[i].name && !i == 0) {
        document.getElementById("name").textContent = reviews[i - 1].name;
        document.getElementById("position").textContent = reviews[i - 1].position;
        document.getElementById("review").textContent = reviews[i - 1].review;
      }
      if (i == 0) {
        document.getElementById("name").textContent = reviews[reviews.length - 1].name;
        document.getElementById("position").textContent = reviews[reviews.length - 1].position;
        document.getElementById("review").textContent = reviews[reviews.length - 1].review;
      }
    }
  });
}

function rightBtnClicked() {
  document.getElementById("next").addEventListener("click", () => {
    let contentName = document.getElementById("name").textContent;
    const reviews = object.Reviews;
    console.log(reviews.length - 1);
    console.log(contentName);
    for (i = 0; i < reviews.length; i++) {
      if (contentName == reviews[i].name) {
        console.log(contentName, reviews[i].name);

        if (i < reviews.length - 1) {
          console.log("pumasok sa next");
          document.getElementById("name").textContent = reviews[i + 1].name;
          document.getElementById("position").textContent = reviews[i + 1].position;
          document.getElementById("review").textContent = reviews[i + 1].review;
        }

        if (i == reviews.length - 1) {
          console.log("pumasok sa taas");
          document.getElementById("name").textContent = reviews[0].name;
          document.getElementById("position").textContent = reviews[0].position;
          document.getElementById("review").textContent = reviews[0].review;
        }
      }
    }
  });
}

function listener() {
  surpriseBtnClicked();
  leftBtnClicked();
  rightBtnClicked();
}

function initilized() {
  const reviews = object.Reviews;
  document.getElementById("name").textContent = reviews[0].name;
  document.getElementById("position").textContent = reviews[0].position;
  document.getElementById("review").textContent = reviews[0].review;
}

document.addEventListener("DOMContentLoaded", () => {
  initilized();
  listener();
});
