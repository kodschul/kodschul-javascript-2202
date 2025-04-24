const fetchData = async () => {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/" +
        Math.floor(Math.random() * 50) +
        1
    );

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);

      document.body.innerHTML = `

      <a href="character.html?id=${data.id}" target="_blank">
            <h1>${data.name}</h1>
            <img src="${data.image}" alt="${data.name}" />

      </a>
            `;
    } else {
      console.error("Error fetching data");
    }
  } catch (e) {
    console.error("Error fetching data", e);
  }
};
