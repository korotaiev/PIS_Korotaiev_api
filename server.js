const express = require("express");
const app = express();
const port = 3000;

// Задайте власний логін Moodle
const VALID_LOGIN = "is-31fiot-23-073";

app.get("/", (req, res) => {
  const login = req.query.login;
  if (login === VALID_LOGIN) {
    // Ваші персональні дані
    const info = {
      surname: "Коротаєв",
      name: "Михайло",
      course: "2",
      group: "ІС-31",
    };
    res.send(`
      <h1>Дані студента</h1>
      <ul>
        <li>Прізвище: ${info.surname}</li>
        <li>Ім’я: ${info.name}</li>
        <li>Курс: ${info.course}</li>
        <li>Група: ${info.group}</li>
      </ul>
    `);
  } else {
    res.status(401).send("<h1>Невалідний логін</h1>");
  }
});

app.listen(port, () => {
  console.log(`Сервер запущено: http://localhost:${port}`);
});
