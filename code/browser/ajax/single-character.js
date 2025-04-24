const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get("id");

console.log({ characterId });

const fetchCharacter = async () => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );

    if (response.status === 200) {
      const data = await response.json();
      const characterContainer = document.getElementById("character-container");

      characterContainer.innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.image}" alt="${data.name}" />
        <p>Status: ${data.status}</p>
        <p>Species: ${data.species}</p>
        <p>Gender: ${data.gender}</p>
        <p>Origin: ${data.origin.name}</p>
        <p>Location: ${data.location.name}</p>
      `;
    } else {
      console.error("Error fetching character data");
    }
  } catch (e) {
    console.error("Error fetching character data", e);
  }
};

fetchCharacter();
