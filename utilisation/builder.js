export const buildCards = (items) => {
    items.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("itemCard");

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

        cardWrapper.appendChild(card);
    })
}


// newEntry.addEventListener('submit', async (e) => {
//     e.preventDefault

//     const title = document.getElementById('title').value;
//     const price = document.getElementById('description').value;
//     const itemImg = document.getElementById('instructions').value;
//     const description = document.getElementById('ingredients').value;
//     const saleLocation = document.getElementById('recipe_img').value;

//     const dataArray = [title, description, instructions, ingredients, recipe_img];

// })
