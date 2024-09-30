const cardWrapper = document.getElementById("cardWrapper");
const backBtn = document.getElementById("backBtn");
const newEntry = document.getElementById("newEntry");


const getAllItems = async () => {
    const response = await fetch("https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas")
    const data = await response.json();
    return data;
}
// console.log(getAllItems()) //Works and displays all items in an array.

import { buildCards } from "../utilisation/builder.js";

newEntry.addEventListener('click', () => {
    window.location.href = '../2_new_item_page/newItem.html';
})

const startCode = async () => {
    const items = await getAllItems();
    buildCards(items);
};

startCode();
// console.log(buildCards())


