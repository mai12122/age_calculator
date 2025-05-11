const userInput = document.getElementById("date");
const rollResult = document.getElementById("result");

document.querySelector("button").addEventListener("click", calculateAge);
function calculateAge() {
    if (!userInput.value) {
        rollResult.innerHTML = `<span>Please select your birthdate first.</span>`;
        return;
    }

    const dateValue = userInput.value;
    const [birthYear, birthMonth, birthDay] = dateValue.split("-").map(Number);
    const today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        const daysInPreviousMonth = getDayInMonth(currentYear, currentMonth - 1);
        days += daysInPreviousMonth;
    }
    rollResult.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old.`;
}

function getDayInMonth(year, month) {
    return new Date(year, month, 0).getDate(); 
}