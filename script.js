const apiKey = "toh5vmHrCFBIbyVpKgQSIbEEXsHpuSXq0SMORYCB";
const titleEl = document.getElementById("title");
const imgEl = document.getElementById("image");
const explEl = document.getElementById("explanation");
const btnPrev = document.getElementById("prev-day");

let currentDate = new Date();

function formatDate(d) {
  return d.toISOString().slice(0, 10);
}

async function loadAPOD(date) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formatDate(
    date
  )}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    titleEl.textContent = data.title;
    imgEl.src = data.url;
    imgEl.alt = data.title;
    explEl.textContent = data.explanation;
  } catch (e) {
    titleEl.textContent = "Помилка завантаження";
    explEl.textContent = e;
  }
}

btnPrev.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  loadAPOD(currentDate);
});

// Завантажити сьогоднішнє зображення
loadAPOD(currentDate);
