
let language = 9

updateSelectOptions = (json, theselect, theability, language) => {

        // Obtenez une liste des options de l'élément <select>
        const options = theselect.querySelectorAll("option");
  
        // Supprimez les options d'index 480 à 484
        for (var i = 480; i <= 484; i++) {
          options[i].remove();
        }
    
    
  
    const newoptions = theselect.querySelectorAll("option");
  
    // Remplacez le contenu HTML des options restantes
    for(j = 0; j < 645; j++) {
      json.forEach(element => {
        if (element.pokemon_species_id === j && element.local_language_id === language) {
          newoptions[j].innerHTML = (element.name);
        }
      });
    }
  
    // Ajoutez le bloc rotoms à la fin de l'élément <select>
    let rotoms = ``
    const abioptions = theability.querySelectorAll("option");
    abioptions.forEach(option => option.remove());
    let newabi = ``

    let types = [];

    
    if (language === 3){
      rotoms = `
      <option value="rotom-heat">히트로토무</option>
      <option value="rotom-wash">워시로토무</option>
      <option value="rotom-frost">프로스트로토</option>
      <option value="rotom-fan">스핀로토무</option>
      <option value="rotom-mow">커트로토무</option>`;

      newabi = `
      <option value="">None</option>
      <option value="1">건조피부</option>
      <option value="2">타오르는 불꽃</option>
      <option value="3">내열</option>
      <option value="4">부유</option>
      <option value="5">피뢰침</option>
      <option value="6">전기엔진</option>
      <option value="7">초식</option>
      <option value="8">마중물</option>
      <option value="9">두꺼운 지방	</option>
      <option value="10">축전</option>
      <option value="11">저수</option>
      <option value="12">불가사의 부적</option>`;

      types = ["일반", "격투", "비행", "독", "땅", "바위", "벌레", "고스트", "강철", "불꽃", "물", "풀", "전기", "에스퍼", "얼음", "드래곤", "악"];

    }

    if (language === 4){
      rotoms = `
      <option value="rotom-heat">加热洛托姆</option>
      <option value="rotom-wash">清洗洛托姆</option>
      <option value="rotom-frost">结冰洛托姆</option>
      <option value="rotom-fan">旋转洛托姆</option>
      <option value="rotom-mow">切割洛托姆</option>`;

      newabi = `
      <option value="">None</option>
      <option value="1">干燥皮肤</option>
      <option value="2">引火</option>
      <option value="3">耐热</option>
      <option value="4">飘浮</option>
      <option value="5">避雷针</option>
      <option value="6">电气引擎</option>
      <option value="7">食草</option>
      <option value="8">引水</option>
      <option value="9">厚脂肪</option>
      <option value="10">蓄电</option>
      <option value="11">储水</option>
      <option value="12">神奇守护</option>`;

      types = ["普通", "格斗", "飞行", "毒", "地面", "岩石", "虫", "鬼", "钢", "火", "水", "草", "电", "超能力", "冰", "龙", "恶"];

    }

    if (language === 5){
      rotoms = `
      <option value="rotom-heat">Motisma-Chaleur</option>
      <option value="rotom-wash">Motisma-Lavage</option>
      <option value="rotom-frost">Motisma-Froid</option>
      <option value="rotom-fan">Motisma-Hélice</option>
      <option value="rotom-mow">Motisma-Tonte</option>`;

      newabi = `
      <option value="">None</option>
      <option value="1">Peau Sèche</option>
      <option value="2">Torche</option>
      <option value="3">Ignifugé</option>
      <option value="4">Levitation</option>
      <option value="5">Paratonnerre</option>
      <option value="6">Motorisé</option>
      <option value="7">Herbivore</option>
      <option value="8">Lavabo</option>
      <option value="9">Isograisse</option>
      <option value="10">Absorb Volt</option>
      <option value="11">Absorb Eau</option>
      <option value="12">Garde Mystik</option>`;

      types = ["Normal", "Combat", "Vol", "Poison", "Sol", "Roche", "Insecte", "Spectre", "Acier", "Feu", "Eau", "Plante", "Electrik", "Psy", "Glace", "Dragon", "Ténèbre"];

    }

    if (language === 9){
      rotoms = `
      <option value="rotom-heat">Rotom-Heat</option>
      <option value="rotom-wash">Rotom-Wash</option>
      <option value="rotom-frost">Rotom-Frost</option>
      <option value="rotom-fan">Rotom-Fan</option>
      <option value="rotom-mow">Rotom-Mow</option>`;

      newabi = `
      <option value="">None</option>
      <option value="1">Dry Skin</option>
      <option value="2">Flash Fire</option>
      <option value="3">Heatproof</option>
      <option value="4">Levitate</option>
      <option value="5">Lightning Rod</option>
      <option value="6">Motor Drive</option>
      <option value="7">Sap Sipper</option>
      <option value="8">Storm Drain</option>
      <option value="9">Thick Fat</option>
      <option value="10">Volt Absorb</option>
      <option value="11">Water Absorb</option>
      <option value="12">Wonder Guard</option>`;

      types = ["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark"];

    }

    if (language === 15){
      rotoms = `
      <option value="rotom-heat">Rotom-Heat</option>
      <option value="rotom-wash">Rotom-Wash</option>
      <option value="rotom-frost">Rotom-Frost</option>
      <option value="rotom-fan">Rotom-Fan</option>
      <option value="rotom-mow">Rotom-Mow</option>`;

      newabi = `
      <option value="">None</option>
      <option value="1">Piel Seca	</option>
      <option value="2">Absorbe Fuego</option>
      <option value="3">Ignífugo</option>
      <option value="4">Levitación</option>
      <option value="5">Pararrayos</option>
      <option value="6">Electromotor</option>
      <option value="7">Herbívoro</option>
      <option value="8">Colector</option>
      <option value="9">Sebo</option>
      <option value="10">Absorbe Electricidad</option>
      <option value="11">Absorbe Agua</option>
      <option value="12">Superguarda</option>`;

      types = ["Normal", "Lucha", "Volador", "Veneno", "Tierra", "Roca", "Bicho", "Fantasma", "Acero", "Fuego", "Agua", "Planta", "Eléctrico", "Psíquico", "Hielo", "Dragón", "Siniestro"];
    }


    theselect.insertAdjacentHTML("beforeend", rotoms);
  
    let m = 480;
    for (let i = 645; i < 650; i++) {
      theselect.insertBefore(
        theselect.children[i],
        theselect.children[m]
      );
      m++;
    }
  
    theability.insertAdjacentHTML("beforeend", newabi);

const typingz = document.querySelectorAll(".type");

for (let i = 0; i < types.length; i++) {
  typingz[i].innerHTML = types[i];
}

    new Selectr(theselect);
    new Selectr(theability);


  }
  
  
  const createSelectLanguage = async (i) => {
      // z = index of the pokemon / value of options
      let z = 1;

      await htmlgen();
      
          for (let i = 1; i <= 6; i++) {
            await createSelect2(i);
          }
          

      // Select button
      const theselect = document.querySelector(`.selectpoke_${i}`);
      const theability = document.querySelector(`.ability_${i}`);

      megarefresh();

      const options = theselect.querySelectorAll("option");
      options.forEach(option => {
        option.remove();
      });
      const optionone = `<option value="">None</option>`
      theselect.insertAdjacentHTML("afterbegin", optionone);

    
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
    
      const rotomsindex = `
            <option value="rotom-heat">Rotom-Heat</option>
            <option value="rotom-wash">Rotom-Wash</option>
            <option value="rotom-frost">Rotom-Frost</option>
            <option value="rotom-fan">Rotom-Fan</option>
            <option value="rotom-mow">Rotom-Mow</option>`;
      theselect.insertAdjacentHTML("beforeend", rotomsindex);
      let m = 480;
      for (let i = 645; i < 650; i++) {
        theselect.insertBefore(
          theselect.children[i],
          theselect.children[m]
        );
        m++;
      }
      
  
      await fetch("pokemon-names.json")
  .then(response => response.json())
  .then(json => {
    updateSelectOptions(json, theselect, theability, language);
  });
  

    };
    

    const buttonFR = document.querySelector('.lang-fr')
    buttonFR.addEventListener('click', () => {

        for (let i = 1; i <= 6; i++) {
          language = 5
          const megabox = document.querySelector(".pokemons");
          megabox.innerHTML = '';
            createSelectLanguage(i);
          }
    })

    
    const buttonEN = document.querySelector('.lang-en')
    buttonEN.addEventListener('click', () => {

        for (let i = 1; i <= 6; i++) {
          language = 9
          const megabox = document.querySelector(".pokemons");
          megabox.innerHTML = '';
            createSelectLanguage(i);
          }
    })

    const buttonES = document.querySelector('.lang-es')
    buttonES.addEventListener('click', () => {

        for (let i = 1; i <= 6; i++) {
          language = 15
          const megabox = document.querySelector(".pokemons");
          megabox.innerHTML = '';
            createSelectLanguage(i);
          }
    })


    const buttonCH = document.querySelector('.lang-ch')
    buttonCH.addEventListener('click', () => {

        for (let i = 1; i <= 6; i++) {
          language = 4
          const megabox = document.querySelector(".pokemons");
          megabox.innerHTML = '';
            createSelectLanguage(i);
          }
    })


    const buttonSK = document.querySelector('.lang-sk')
    buttonSK.addEventListener('click', () => {

        for (let i = 1; i <= 6; i++) {
          language = 3
          const megabox = document.querySelector(".pokemons");
          megabox.innerHTML = '';
            createSelectLanguage(i);
          }
    })

