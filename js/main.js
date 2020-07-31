const key = "vnRS0rSPE8XTsI0dwKoYaNiwBX38EM1XNFzELyyQ";

// Generate random date from 2015 - 2019
const year = 2015 + Math.floor(Math.random() * 5);

const monthIndex = Math.floor(Math.random() * 12);

const month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

function getDay() {
  if (year === 2016) {
    if (month[monthIndex] === "02") {
      let day = Math.floor(Math.random() * 29) + 1;
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    } else if (
      month[monthIndex] === "04" ||
      month[monthIndex] === "06" ||
      month[monthIndex] === "09" ||
      month[monthIndex] === "11"
    ) {
      let day = Math.floor(Math.random() * 30) + 1;
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    } else {
      let day = Math.floor(Math.random() * 31) + 1;
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    }
  } else {
    if (month[monthIndex] === "02") {
      let day = Math.floor(Math.random() * 28) + 1;
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    } else if (
      month[monthIndex] === "04" ||
      month[monthIndex] === "06" ||
      month[monthIndex] === "09" ||
      month[monthIndex] === "11"
    ) {
      let day = Math.floor(Math.random() * 30) + 1;
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    } else {
      let day = Math.floor(Math.random() * 31) + 1;
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    }
  }
}

const day = getDay();

const dateChoice = `${year}-${month[monthIndex]}-${day}`;

const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${dateChoice}`;

let image = "";

function getImage() {
  return axios
    .get(url, {
      date: dateChoice,
    })
    .then((resolved) => {
      image = resolved.data.hdurl;
      return image;
    })
    .catch((error) => console.log("not ok"));
}

let explanation = "";

function getExplanation() {
  return axios
    .get(url, {
      date: dateChoice,
    })
    .then((resolved) => {
      explanation = resolved.data.explanation;
      return explanation;
    })
    .catch((error) => console.log("not ok"));
}

const apod = document.querySelector(".apod");

function displayOnScreen(image, explanation) {
  apod.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("apod__wrapper");
  apod.appendChild(wrapper);

  const img = document.createElement("img");
  img.classList.add("apod__img");
  wrapper.appendChild(img);
  img.setAttribute("src", `${image}`);

  const article = document.createElement("article");
  article.classList.add("apod__article");
  apod.appendChild(article);
  article.innerText = explanation;
}

// getImage().then((image) => {
//   getExplanation().then((explanation) => {
//     displayOnScreen(image, explanation);
//   });
// });

getImage().then((image) => {
  getExplanation().then((explanation) => {
    displayOnScreen(image, explanation);
  });
});

setTimeout(function () {
  window.location.reload(10);
}, 30000);
