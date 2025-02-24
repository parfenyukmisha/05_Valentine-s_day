function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  wishes = [
    "Кохання, радості та тепла в цей чудовий день!",
    "Хай серце наповнюється щастям і взаємною любов'ю!",
    "Бажаю тобі справжнього кохання, яке буде поруч завжди!",
    "Нехай кожен день буде наповнений романтикою та ніжністю!",
    "Любов і щастя нехай стануть твоїми постійними супутниками!",
  ];

  document.getElementById("btn_love_wishes").addEventListener("click", () => {
  document.getElementById("p-love_wishes").innerHTML = wishes[getRandomInt(4)];
  });