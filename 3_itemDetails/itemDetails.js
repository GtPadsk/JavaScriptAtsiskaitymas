const backBtn = document.getElementById("backBtn")
const deleteBtn = document.getElementById("deleteBtn")

document.addEventListener('DOMContentLoaded', () => {


    const getItemById = async (id) => {
        const response = await fetch(`https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas/${id}`);
        const item = await response.json();
        return item;
    };

    const deleteItemById = async (id) => {
        const response = await fetch(`https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            message.textContent = "Item deleted successfully!";
            message.style.color = "green";
            setTimeout(() => {
                window.location.href = `/`;
            }, 3000);
        } else {
            message.textContent = "Failed to delete item.";
            message.style.color = "red";
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    const displayItemDetails = async () => {
        const item = await getItemById(itemId);

        const title = document.getElementById("title");
        const price = document.getElementById("price");
        const itemImg = document.getElementById("itemImg");
        const description = document.getElementById("description");
        const saleLocation = document.getElementById("saleLocation");

        title.textContent = item.title;
        price.textContent = item.price + ' €';
        itemImg.src = item.imgUrl;
        description.textContent = item.description;
        saleLocation.textContent = 'Location : ' + item.saleLocation;

        card.append(description, saleLocation)
    };

    displayItemDetails();

    backBtn.addEventListener('click', () => {
        window.location.href = `/`;
    })

    deleteBtn.addEventListener('click', () => {
        deleteItemById(itemId);
    })
});