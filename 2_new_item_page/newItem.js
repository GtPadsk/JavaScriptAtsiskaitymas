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

    if (!title || !price || !imgUrl || !description || !saleLocation) {
        message.textContent = "All fields are required!";
        message.style.color = "red";
        return;
    }

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

