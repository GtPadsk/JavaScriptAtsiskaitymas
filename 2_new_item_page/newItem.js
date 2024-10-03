const backBtn = document.getElementById("backBtn")
const message = document.getElementById("message")
const form = document.getElementById("form")
const submitBtn = document.getElementById("submitBtn")

//Gryžimas į pradinį puslapį vvvv

backBtn.addEventListener('click', () => {
    window.location.href = '/';
})

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log("Form submitted"); // tikrinimas ar veikia submit.

    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const imgUrl = document.getElementById("imgUrl").value;
    const description = document.getElementById("description").value;
    const saleLocation = document.getElementById("saleLocation").value;

    // vv cia prasideda validacija vv

    if (!title || !price || !imgUrl || !description || !saleLocation) {
        message.textContent = "All fields are required!";
        message.style.color = "red";
        return;
    }

    const validateSaleLocPattern = /^.{8,40}$/;
    if (!validateSaleLocPattern.test(saleLocation)) {
        message.textContent = "Sale location must be between 8 and 40 characters long!";
        message.style.color = "red";
        return;
    }

    const validateDescPattern = /^.{8,250}$/;
    if (!validateDescPattern.test(description)) {
        message.textContent = "Description must be between 8 and 250 characters long!";
        message.style.color = "red";
        return;
    }

    const validateTitlePattern = /^.{8,30}$/;
    if (!validateTitlePattern.test(title)) {
        message.textContent = "Title must be between 8 and 30 characters long!";
        message.style.color = "red";
        return;
    }

    const validateUrlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (!validateUrlPattern.test(imgUrl)) {
        message.textContent = "Invalid URL, needs to be this format : 'https://example.com' ";
        message.style.color = "red";
        return;
    }

    // ^^ cia baigiasi validacija ^^

    const data = {
        title,
        price,
        imgUrl,
        description,
        saleLocation
    };

    try {
        const response = await fetch("https://66ed081e380821644cdb0a67.mockapi.io/SkelbimuPortalas", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Status: ", result);

            message.textContent = "Item was added successfully !"
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "/"
            }, 3000);
        } else {
            const errorResponse = await response.text();
            console.error("Failed to add Item:", errorResponse);
            message.textContent = "Failed to add Item: " + errorResponse;
            message.style.color = "red";
        }
    } catch (error) {
        console.error('Error submitting data:', error);
        message.textContent = "An error occurred";
        message.style.color = "red";
    }
})

