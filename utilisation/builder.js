export const buildCards = (items) => {
    items.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("itemCard");

        console.log(item);
        const title = document.createElement("h3");
        const price = document.createElement("h3");
        const itemImg = document.createElement("img");

        title.classList.add("title");
        price.classList.add("price");
        itemImg.classList.add("itemImg");

        title.textContent = item.title;
        price.textContent = item.price + ' $';
        itemImg.src = item.imgUrl;

        card.setAttribute("class", `card`);
        card.append(title, price, itemImg);

        cardWrapper.appendChild(card);

    })
}