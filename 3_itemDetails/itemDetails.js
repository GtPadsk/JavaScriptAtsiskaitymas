// vv įsikelti elementai iš html failo vv

const backBtn = document.getElementById("backBtn")
const deleteBtn = document.getElementById("deleteBtn")



document.addEventListener('DOMContentLoaded', () => {

    // vv partempia paspaustos korteles duomenis palei kortelės id vv

    const getItemById = async (id) => {
        const response = await fetch(`https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas/${id}`);
        const item = await response.json();
        return item;
    };

    // vv iš API ištrina kortele kurią paspaudei praeitam puslapyje vv

    const deleteItemById = async (id) => {
        const response = await fetch(`https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas/${id}`, {
            method: 'DELETE'
        });
        // vv jei ištrina sekmingai - parsiunčia vartotoja į ROOT index faila po 3 sekundziu laiko vv
        if (response.ok) {
            message.textContent = "Item deleted successfully!";
            message.style.color = "green";
            setTimeout(() => {
                window.location.href = `/`;
            }, 3000);
            // vv jei nepavyksta ištrinti - išmeta žinute, kad nepavyko ir palieka tam pačiam puslapyje vv
        } else {
            message.textContent = "Failed to delete item.";
            message.style.color = "red";
        }
    };

    // vv partraukia id reikšme tos kortelės kuri buvo paspausta vv
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    // vv parodo kurioj vietoj koks elementas turi būti ir partraukia duomenis iš API. vv
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
        // vv ikelia šiuos duomenis į kortelę vv
        card.append(description, saleLocation)
    };
    // vv parodo šiuos duomenis ekrane ant kortelės. vv
    displayItemDetails();

    // vv paspaudus "backBtn" nusiunčia atgal į ROOT index faila vv
    backBtn.addEventListener('click', () => {
        window.location.href = `/`;
    })


    // vv paspaudus "deleteBtn" ištrinama kortelė kuri matosi ekrane, ši 'click' veikia nes aukščiau yra apiubūdinta "deleteItemById" vv 
    deleteBtn.addEventListener('click', () => {
        deleteItemById(itemId);
    })
});