/*jshint esversion: 6 */
function calc() {
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;
    totalValue.textContent = 0;


    persons.addEventListener("input", () => {
        persons.value = persons.value.replace(/[^0-9]/, " ");
    });

    restDays.addEventListener("input", () => {
        restDays.value = restDays.value.replace(/[^0-9]/, " ");
    });
  
    let payment = () => {
        daysSum = +restDays.value;
        personsSum = +persons.value;
        total = (daysSum * personsSum) * 4000;
        if (restDays.value == "") {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
        if (restDays.value == "" || persons.value == "") {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total * place.options[place.selectedIndex].value;
        }
    };
    persons.addEventListener("input", payment);
    restDays.addEventListener("input", payment);
    place.addEventListener("change", payment);
}
module.exports = calc;