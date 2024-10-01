const getItemById = async (id) => {
    const response = await fetch(`https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas/${id}`);
    const item = await response.json();
    return item;
};

// Get the ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

// Display the item's details
const displayItemDetails = async () => {
    const item = await getItemById(itemId);

    const itemTitle = document.getElementById("itemTitle");
    const itemPrice = document.getElementById("itemPrice");
    const itemImg = document.getElementById("itemImg");
    const description = document.getElementById("description");
    const saleLocation = document.getElementById("saleLocation");

    itemTitle.textContent = item.title;
    itemPrice.textContent = item.price + ' $';
    itemImg.src = item.imgUrl;
    description.textContent = item.description;
    saleLocation.textContent = item.saleLocation;

    card.append(description, saleLocation)
};

displayItemDetails();