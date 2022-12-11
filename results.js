const fkinres = () => {
    // 1. Get all elements with the "result" class
    const myresults = document.querySelectorAll(".result");

    // 2. Loop through each of the 17 elements in myresults
    for (let i = 0; i < 17; i++) {
        // 3. Create three empty arrays
        const firstArray = [];
        const secondArray = [];
        let thirdArray = 0;

        // 4. Loop through each of the storingArray_ arrays
        for (let j = 1; j <= 6; j++) {
            // 5. Get the storingArray_ array for the current iteration
            const arrayName = `storingArray_${j}`;
            const storingArray = window[arrayName];

            // 6. Push the i-th element of the current storingArray_ array into firstArray
            firstArray.push(storingArray[i]);
        }

        // 7. Push a value to secondArray based on the element's value in firstArray
        firstArray.forEach(element => {
            if (element == 1) {
                secondArray.push(1);
            } else if (element == 0) {
                secondArray.push(2.2);
            } else if (element == 4) {
                secondArray.push(0.1);
            } else if (element == 2) {
                secondArray.push(0.4);
            } else if (element > 4) {
                secondArray.push(0.1);
            } else if (element > 2) {
                secondArray.push(0.1);
            } else if (element > 1) {
                secondArray.push(0.4);
            } else if (element < 1) {
                secondArray.push(2);
            }
        });

        // 8. Add all values in secondArray to thirdArray
        for (const value of secondArray) {
            thirdArray += value;
        }

        // 9. Multiply thirdArray based on the length of secondArray
        if (secondArray.length == 1) {
            thirdArray = thirdArray * 6;
        } else if (secondArray.length == 2) {
            thirdArray = thirdArray * 3;
        } else if (secondArray.length == 3) {
            thirdArray = thirdArray * 2;
        } else if (secondArray.length == 4) {
            thirdArray = thirdArray * 1.5;
        } else if (secondArray.length == 5) {
            thirdArray = thirdArray * 1.2;
        } else if (secondArray.length == 0) {
            myresults[i].style.backgroundColor = "white";
        }

        // 10. Set the background color of each element in myresults based on the value of thirdArray
        if (thirdArray > 8) {
            myresults[i].style.backgroundColor = "#52A242";
        } else if (thirdArray > 6) {
            myresults[i].style.backgroundColor = "#6FDB59";
        } else if (thirdArray == 6) {
            myresults[i].style.backgroundColor = "#C03131";
        } else if (thirdArray < 4 && secondArray.length !== 0) {
            myresults[i].style.backgroundColor = "#8F2424";
        } else if (secondArray.length !== 0) {
            myresults[i].style.backgroundColor = "#C03131";
        }
    }
}
