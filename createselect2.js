const createSelect2 = async (i) => {
    // z = index of the pokemon / value of options
    let z = 1;
    // Select button
    const theselect = document.querySelector(`.selectpoke_${i}`);
    const theability = document.querySelector(`.ability_${i}`);
  
    // Function to create options (pokemons names + index in value) with an API
    await fetch("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=644")
      .then((response) => {
        if (!response.ok) {
          alert("Error");
          throw new Error("No Data");
        }
        return response.json();
      })
      .then((data) =>
        data.results.forEach((pokemon) => {
          const createoption = document.createElement("option");
          createoption.value = z;
          createoption.innerHTML = pokemon.name;
          theselect.appendChild(createoption);
          z++;
        })
      );
  
    const allrotoms = `
          <option value="rotom-heat">Rotom-Heat</option>
          <option value="rotom-wash">Rotom-Wash</option>
          <option value="rotom-frost">Rotom-Frost</option>
          <option value="rotom-fan">Rotom-Fan</option>
          <option value="rotom-mow">Rotom-Mow</option>`;
    theselect.insertAdjacentHTML("beforeend", allrotoms);
    let m = 480;
    for (let i = 645; i < 650; i++) {
      theselect.insertBefore(
        theselect.children[i],
        theselect.children[m]
      );
      m++;
    }
  
  };
  
  for (let i = 1; i <= 6; i++) {
    createSelect2(i);
  }