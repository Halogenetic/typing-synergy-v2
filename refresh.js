for (let i = 1; i <= 6; i++) {

  let theselect = document.querySelector(`.selectpoke_${i}`);
  let theability = document.querySelector(`.ability_${i}`);

  let storingArray = [];
    let name = `storingArray_${i}`;
    window[name] = storingArray;

    // Select button generating image, duotype and typing
    const refresh = () => {
      const allduotype = document.querySelectorAll(`.typez_${i}`);
      const icones = document.querySelector(`.icones_${i}`);
  
      // Delete duotype of all types
      allduotype.forEach((type) => {
        type.innerHTML = "";
      });
  
      // Create duotype in type
      const typelist = () => {
        if (theselect.value !== "") {
          fetch(`https://pokeapi.co/api/v2/pokemon/${theselect.value}`)
            .then((response) => {
              if (!response.ok) {
                alert("Error");
                throw new Error("error");
              }
              return response.json();
            })
            .then((data) =>
              allduotype.forEach((type) => {
                if (
                  data.types[0].type.name == "normal" &&
                  typeof data.types[1] == "undefined"
                ) {
                  if (type.classList.contains(data.types[0].type.name)) {
                    type.innerHTML = data.types[0].type.name;
                    type.style.height = "50%";
                    type.style.paddingTop = "15%";
                  }
                } else if (
                  data.types[0].type.name == "normal" &&
                  data.types[1].type.name == "fairy"
                ) {
                  if (type.classList.contains("normal")) {
                    type.innerHTML = "normal";
                    type.style.height = "100%";
                    type.style.paddingTop = "40%";
                  }
                } else if (data.types[0].type.name == "fairy") {
                  if (type.classList.contains(data.past_types[0].types[0].type.name)) {
                    type.innerHTML = data.past_types[0].types[0].type.name;
                    type.style.height = "100%";
                    type.style.paddingTop = "40%";
                  }
                } else if (type.classList.contains(data.types[0].type.name)) {
                  type.innerHTML = data.types[0].type.name;
                  type.style.height = "50%";
                  type.style.paddingTop = "15%";
                }
                if (typeof (data.types[1]) !== "undefined"){
                    if ((data.types[1].type.name) == "fairy") {
                        type.style.height = "100%";
                        type.style.paddingTop = "40%";
                    }
                    else if (type.classList.contains(data.types[1].type.name)) {
                        type.innerHTML = data.types[1].type.name
                        type.style.height = "50%";
                        type.style.paddingTop = "15%";
                }   else {
                        type.style.height = "50%";
                        type.style.paddingTop = "15%";
                    }
             } 
                else {
                    type.style.height = "100%";
                    type.style.paddingTop = "40%";
                }
            }
            
        )
    )}
}
    
typelist();

  // Create image in icones
  const displayImage = () => {
    if (theselect.value !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${theselect.value}`)
        .then((response) => {
          if (!response.ok) {
            alert("Error");
            throw new Error("error");
          }
          return response.json();
        })
        .then((data) => (icones.src = data.sprites.front_default));
    } else {
      icones.src = "./images/imicon.png";
    }
  };

  displayImage();




  // Create the typing
let typingArray = [
  [1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5],
  [1, 0.5, 1, 1, 0, 2, 0.5, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1],
  [1, 0.5, 1, 0.5, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 1],
  [1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 2, 2, 0, 1, 2, 1, 1],
  [0.5, 2, 0.5, 0.5, 2, 1, 1, 1, 2, 0.5, 2, 2, 1, 1, 1, 1, 1],
  [1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1],
  [0, 0, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [0.5, 2, 0.5, 0, 2, 0.5, 0.5, 0.5, 0.5, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 0.5],
  [1, 1, 1, 1, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 0.5, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 2, 2, 1, 0.5, 1, 1],
  [1, 1, 2, 2, 0.5, 1, 2, 1, 1, 2, 0.5, 0.5, 0.5, 1, 2, 1, 1],
  [1, 1, 0.5, 1, 2, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1],
  [1, 0.5, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2],
  [1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 0.5]
  ]
  let typingcells = document.querySelectorAll(`.typing_${i}`)
  let t = 0
  let c = 0
  let d = 0
  let duotypeArray = []
  
  // Delete values of all types
  typingcells.forEach(cell => {
      cell.innerHTML = ''
      })

      const fullTyping = () => {
    if (theselect.value !== "") {
    fetch(`https://pokeapi.co/api/v2/pokemon/${theselect.value}`)
        .then((response) => {
        if (!response.ok) {
        alert("Error");
        throw new Error("error");
        }
        return response.json()
        })
        .then((data) => {
        let type = data.types[0].type.name
                if ((data.types[0].type.name) == "fairy" && typeof (data.types[1]) == "undefined") {
                    {t = 0}
                    {
                        typingcells.forEach(cell => {
                            cell.innerHTML=(typingArray[t][c])
                            c++
                        })
                    } }
                    else if ((data.types[0].type.name) == "normal" && typeof (data.types[1]) == "undefined") {
                        {t = 0}
                        {
                            typingcells.forEach(cell => {
                                cell.innerHTML=(typingArray[t][c])
                                c++
                            })
                        } }
                    else if ((data.types[0].type.name) == "normal" && (data.types[1].type.name) == "fairy") {
                        {t = 0}
                        {
                            typingcells.forEach(cell => {
                                cell.innerHTML=(typingArray[t][c])
                                c++
                            })
                        } }
            else if (typeof (data.types[1]) == "undefined" || (data.types[1].type.name) == "fairy") {
                if (type == 'normal') 
                {t = 0}
                else if (type == 'fighting') 
                {t = 1}
                else if (type == 'flying') 
                {t = 2}
                else if (type == 'poison') 
                {t = 3}
                else if (type == 'ground') 
                {t = 4}
                else if (type == 'rock') 
                {t = 5}
                else if (type == 'bug') 
                {t = 6}
                else if (type == 'ghost') 
                {t = 7}
                else if (type == 'steel') 
                {t = 8}
                else if (type == 'fire') 
                {t = 9}
                else if (type == 'water') 
                {t = 10}
                else if (type == 'grass') 
                {t = 11}
                else if (type == 'electric') 
                {t = 12}
                else if (type == 'psychic') 
                {t = 13}
                else if (type == 'ice') 
                {t = 14}
                else if (type == 'dragon') 
                {t = 15}
                else if (type == 'dark') 
                {t = 16}
                
                {
                    typingcells.forEach(cell => {
                        cell.innerHTML=(typingArray[t][c])
                        c++
                    })
                } 
            } 
  
            

            else 
                {
                let type2 = data.types[1].type.name

                if (type == 'normal') 
                {t = 0}
                else if (type == 'fighting') 
                {t = 1}
                else if (type == 'flying') 
                {t = 2}
                else if (type == 'poison') 
                {t = 3}
                else if (type == 'ground') 
                {t = 4}
                else if (type == 'rock') 
                {t = 5}
                else if (type == 'bug') 
                {t = 6}
                else if (type == 'ghost') 
                {t = 7}
                else if (type == 'steel') 
                {t = 8}
                else if (type == 'fire') 
                {t = 9}
                else if (type == 'water') 
                {t = 10}
                else if (type == 'grass') 
                {t = 11}
                else if (type == 'electric') 
                {t = 12}
                else if (type == 'psychic') 
                {t = 13}
                else if (type == 'ice') 
                {t = 14}
                else if (type == 'dragon') 
                {t = 15}
                else if (type == 'dark') 
                {t = 16}

                if (type2 == 'normal') 
                {d = 0}
                else if (type2 == 'fighting') 
                {d = 1}
                else if (type2 == 'flying') 
                {d = 2}
                else if (type2 == 'poison') 
                {d = 3}
                else if (type2 == 'ground') 
                {d = 4}
                else if (type2 == 'rock') 
                {d = 5}
                else if (type2 == 'bug') 
                {d = 6}
                else if (type2 == 'ghost') 
                {d = 7}
                else if (type2 == 'steel') 
                {d = 8}
                else if (type2 == 'fire') 
                {d = 9}
                else if (type2 == 'water') 
                {d = 10}
                else if (type2 == 'grass') 
                {d = 11}
                else if (type2 == 'electric') 
                {d = 12}
                else if (type2 == 'psychic') 
                {d = 13}
                else if (type2 == 'ice') 
                {d = 14}
                else if (type2 == 'dragon') 
                {d = 15}
                else if (type2 == 'dark') 
                {d = 16}
                
                {
                    typingcells.forEach(cell => {
                        duotypeArray.push(1*typingArray[t][c]*typingArray[d][c])
                        cell.innerHTML=(duotypeArray[c])
                        c++
                    })
                } 

      
                }


                if (typeof (data.types[1]) == "undefined") {
                if (theability.value == 1) {
                    typingcells[10].innerHTML=('0')
                    typingcells[9].innerHTML=((typingArray[t][9])*(1.3))
                }
                if (theability.value == 2) {
                    typingcells[9].innerHTML=("0")
                }
                if (theability.value == 3) {
                    typingcells[9].innerHTML=((typingArray[t][9])*(0.5))
                }
                if (theability.value == 4) {
                    typingcells[4].innerHTML=('0')
                }
                if (theability.value == 5) {
                    typingcells[12].innerHTML=('0')
                }
                if (theability.value == 6) {
                    typingcells[12].innerHTML=('0')
                }
                if (theability.value == 7) {
                    typingcells[11].innerHTML=('0')
                }
                if (theability.value == 8) {
                    typingcells[10].innerHTML=('0')
                }
                if (theability.value == 9) {
                    typingcells[9].innerHTML=((typingArray[t][9])*(0.5))
                    typingcells[14].innerHTML=((typingArray[t][14])*(0.5))
                }
                if (theability.value == 10) {
                    typingcells[12].innerHTML=('0')
                }
                if (theability.value == 11) {
                    typingcells[10].innerHTML=('0')
                }
                if (theability.value == 12) {
                    typingcells.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }



            if (typeof (data.types[1]) !== "undefined") {
                if (theability.value == 1) {
                    typingcells[10].innerHTML=('0')
                    typingcells[9].innerHTML=((duotypeArray[9])*(1.3))
                }
                if (theability.value == 2) {
                    typingcells[9].innerHTML=("0")
                }
                if (theability.value == 3) {
                    typingcells[9].innerHTML=((duotypeArray[9])*(0.5))
                }
                if (theability.value == 4) {
                    typingcells[4].innerHTML=('0')
                }
                if (theability.value == 5) {
                    typingcells[12].innerHTML=('0')
                }
                if (theability.value == 6) {
                    typingcells[12].innerHTML=('0')
                }
                if (theability.value == 7) {
                    typingcells[11].innerHTML=('0')
                }
                if (theability.value == 8) {
                    typingcells[10].innerHTML=('0')
                }
                if (theability.value == 9) {
                    typingcells[9].innerHTML=((duotypeArray[9])*(0.5))
                    typingcells[14].innerHTML=((duotypeArray[14])*(0.5))
                }
                if (theability.value == 10) {
                    typingcells[12].innerHTML=('0')
                }
                if (theability.value == 11) {
                    typingcells[10].innerHTML=('0')
                }
                if (theability.value == 12) {
                    typingcells.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }
            let storingArray = [];
            let name = `storingArray_${i}`;
            window[name] = storingArray;
            typingcells.forEach(cell => {
                storingArray.push(cell.textContent)
            });

            fkinres();

            {
                typingcells.forEach(cell => {
                    if (cell.textContent.includes("1") && cell.textContent.length == 1)  {
                        cell.style.backgroundColor = "white"
                    }
                    else if (cell.textContent.includes("0.5")) {
                        cell.style.backgroundColor = "#6FDB59"
                        cell.textContent=('½')
                    }
                    else if (cell.textContent.includes("2") && cell.textContent.length == 1) {
                        cell.style.backgroundColor = "#C03131"
                    }
                    else if (cell.textContent.includes("0") && cell.textContent.length == 1) {
                        cell.style.backgroundColor = "#858584"
                    }
                    else if (cell.textContent.includes("0.25")) {
                        cell.style.backgroundColor = "#52A242"
                        cell.textContent=('¼')
                    }
                    else if (cell.textContent.includes("0.325")) {
                        cell.style.backgroundColor = "#52A242"
                        cell.textContent=('¹³⁄₄₀')
                    }
                    else if (cell.textContent.includes("4") && cell.textContent.length == 1) {
                        cell.style.backgroundColor = "#8F2424"
                    }
                    else if (cell.textContent.includes("0.65")) {
                        cell.style.backgroundColor = "#6FDB59"
                        cell.textContent=('¹³⁄₂₀')
                    }
                    else if (cell.textContent.includes("2.6")) {
                        cell.style.backgroundColor = "#8F2424"
                    }
                    else if (cell.textContent.includes("1.3")) {
                        cell.style.backgroundColor = "#C03131"
                    }
                    else if (cell.textContent.includes("0.125")) {
                        cell.style.backgroundColor = "#52A242"
                        cell.textContent=('⅛')
                    }
                    else if (cell.textContent.includes("5.2")) {
                        cell.style.backgroundColor = "#8F2424"
                    }

                })
            } 
        }    
        )
}   else if (theselect.value == "") {
    typingcells.forEach(cell => {
        cell.style.backgroundColor = "white"
        let storingArray = [];
        let name = `storingArray_${i}`;
        window[name] = storingArray;

        fkinres();

    })}
}
    
fullTyping();

}

theselect.addEventListener('change', refresh)

theability.addEventListener('change', () => {
  
    refresh()
})

}
