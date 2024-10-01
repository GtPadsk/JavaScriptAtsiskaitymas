const cardWrapper = document.getElementById("cardWrapper");
const backBtn = document.getElementById("backBtn");
const newEntry = document.getElementById("newEntry");


const getAllItems = async () => {
    const response = await fetch("https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas")
    const data = await response.json();
    return data;
}
// console.log(getAllItems()) //Works and displays all items in an array.

const buildCards = (items) => {
    items.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("itemCard");
        card.setAttribute("data-id", item.id);

        console.log(item);
        const title = document.createElement("h3");
        const price = document.createElement("h3");
        const itemImg = document.createElement("img");
        // const description = document.createElement("p");
        // const saleLocation = document.createElement("p");

        title.classList.add("title");
        price.classList.add("price");
        itemImg.classList.add("itemImg");
        // description.classList.add("description");
        // saleLocation.classList.add("saleLocation");

        title.textContent = item.title;
        price.textContent = item.price + ' $';
        itemImg.src = item.imgUrl;
        // description.textContent = item.description;
        // saleLocation.textContent = item.saleLocation;

        card.setAttribute("class", `card`);
        card.append(title, price, itemImg);

        card.addEventListener('click', () => {
            window.location.href = `../3_itemDetails/itemDetails.html?id=${item.id}`;
        });

        cardWrapper.appendChild(card);

    })
}

newEntry.addEventListener('click', () => {
    window.location.href = '../2_new_item_page/newItem.html';
})

const startCode = async () => {
    const items = await getAllItems();

    const sortedItems = items.sort((a, b) => a.price - b.price);

    buildCards(sortedItems);
};

startCode();
// console.log(buildCards())


