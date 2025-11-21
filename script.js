const MortgageCalculator = (() => {
    const inputs = document.querySelectorAll("input");
    const borders = document.querySelectorAll(".border");
    const form = document.querySelector("form");
    const notations = document.querySelectorAll(".notation");
    const errorMessages = document.querySelectorAll(".error-message");
    const clearButton = document.querySelector("#clear-button");

    const showErrorMessage = (input, index) => {
        if (input.validity.valueMissing) {
            errorMessages[index].style.display = "block";
            errorMessages[index].textContent = "This field is required";
        } else if (input.validity.patternMismatch) {
            errorMessages[index].style.display = "block";
            errorMessages[index].textContent = "This field is required";
        }
        
        borders[index].style.borderColor = "var(--Red)";
        if (index < 3) {
            notations[index].style.backgroundColor = "var(--Red)";
            notations[index].style.color = "var(--White)";
        }
    };

    const reset = () => {
        inputs.forEach((input, index) => {
            input.value = "";
            errorMessages[index].style.display = "none";
            borders[index].style.borderColor = "var(--Slate-300)";
            
            if (index < 3) {
                notations[index].style.backgroundColor = "var(--Slate-100)";
                notations[index].style.color = "var(--Slate-700)";
            }
        });
    };

    const inputValidation = () => {
        inputs.forEach((input, index) => {
            input.addEventListener("input", () => {
                if (input.validity.valid && input.value !== "") {
                    borders[index].style.borderColor = "var(--Lime)";
                    errorMessages[index].style.display = "none";
                    
                    if (index < 3) {
                        notations[index].style.backgroundColor = "var(--Lime)";
                        notations[index].style.color = "var(--Slate-900)";
                    }
                } else if (!input.validity.valid) {
                    showErrorMessage(input, index);
                }
            });
        });
    };

    const init = () => {
        inputValidation();
         clearButton.addEventListener("click", reset);
         form.addEventListener("submit", (e) => {
            e.preventDefault();
             let isValid = true;
            inputs.forEach((input, index) => {
                if (!input.validity.valid || input.value === "") {
                    showErrorMessage(input, index);
                    isValid = false;
                }
            });
            if (isValid) {
                console.log("Form is valid - proceed with calculation");
            }
        });
    };
    return {
        init
    };
})();
MortgageCalculator.init();