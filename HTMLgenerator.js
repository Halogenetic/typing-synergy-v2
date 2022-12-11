for (let i = 1; i <= 6; i++) {
    let html = `
        <div class="pokeone flexrow">
        <div class="imgbox flexrow">
            <img class="icones_${i}" src="./images/imicon.png">
            <div class="duotype flexcol">
                <div class="typez_${i} normal" style="background-color: #b3b3b2 ;"></div>
                <div class="typez_${i} fighting" style="background-color: #C03131 ;"></div>
                <div class="typez_${i} flying" style="background-color: #98BDBF ;"></div>
                <div class="typez_${i} poison" style="background-color: #AB55A2 ;"></div>
                <div class="typez_${i} ground" style="background-color: #CEBB6D ;"></div>
                <div class="typez_${i} rock" style="background-color: #BC9C5B ;"></div>
                <div class="typez_${i} bug" style="background-color: #BCD059 ;"></div>
                <div class="typez_${i} ghost" style="background-color: #5E7289 ;"></div>
                <div class="typez_${i} steel" style="background-color: #AFB4BC ;"></div>
                <div class="typez_${i} fire" style="background-color: #FB7A18 ;"></div>
                <div class="typez_${i} water" style="background-color: #37B0BD ;"></div>
                <div class="typez_${i} grass" style="background-color: #6FDB59 ;"></div>
                <div class="typez_${i} electric" style="background-color: #E0C519 ;"></div>
                <div class="typez_${i} psychic" style="background-color: #EC6CEC ;"></div>
                <div class="typez_${i} ice" style="background-color: #9BDED9 ;"></div>
                <div class="typez_${i} dragon" style="background-color: #729DD0 ;"></div>
                <div class="typez_${i} dark" style="background-color: #656565 ;"></div>
            </div>
        </div>
        <div class="selectbox flexcol">
            <select name="pokemons" id="select-pokemons" placeholder="Pick a pokemon..." class="selectpoke_${i}">
                <option value="">None</option>
            </select>
            <select name="ability" id="" class="ability_${i}">
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
                <option value="12">Wonder Guard</option>
            </select>
        </div>
        <div class="typingbox flexrow">
            <div class="typing_${i} normal"></div>
            <div class="typing_${i} fighting"></div>
            <div class="typing_${i} flying"></div>
            <div class="typing_${i} poison"></div>
            <div class="typing_${i} ground"></div>
            <div class="typing_${i} rock"></div>
            <div class="typing_${i} bug"></div>
            <div class="typing_${i} ghost"></div>
            <div class="typing_${i} steel"></div>
            <div class="typing_${i} fire"></div>
            <div class="typing_${i} water"></div>
            <div class="typing_${i} grass"></div>
            <div class="typing_${i} electric"></div>
            <div class="typing_${i} psychic"></div>
            <div class="typing_${i} ice"></div>
            <div class="typing_${i} dragon"></div>
            <div class="typing_${i} dark"></div>
        </div>
    </div>
`

    let pokestart = document.querySelector(".pokemons")
    pokestart.insertAdjacentHTML('beforeend', html);

}