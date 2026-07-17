// Declarative Approach
const countElement = document.getElementById("count");

const countApp = {
    getCount: () => {
        const countElement = document.getElementById("count");
        return Number(countElement.textContent);
    },
    setCount: (val) => {
        const countElement = document.getElementById("count");
        countElement.textContent = val;
    }
}

function setCount() {
    let count = countApp.getCount();
    countApp.setCount(count + 1);
}

// Imperative Approach
// const countElement = document.getElementById("count");

// function setCount() {
//     let count = Number(countElement.textContent);
//     count = count + 1;
//     countElement.textContent = count;
// }