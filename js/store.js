
function handleSearch(){
    const searchInputElement = document.getElementById("search-input-field")
    const searchInputValue = searchInputElement.value;

    loadPhone(searchInputValue);
}
// async function loadPhone2 (searchText) {
//     const res = await fetch("https://openapi.programming-hero.com/api/phones?search=samsung")
//     const data = await res.json();
    
//     console.log(data);
// }

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const serverData = await res.json();

    if (Array.isArray(serverData.data)) {
        displayPhone(serverData.data);
    } else {
        console.error("API response format unexpected:", serverData);
    }
};

const displayPhone = (data) => {
    const cardContainer = document.getElementById("card-section");
    cardContainer.innerHTML = "";

    data.forEach((Phone) => {
        const productCard = document.createElement('div');
        productCard.classList.add("card");

        productCard.innerHTML = `
        <div class="card-image">
            <img src="${Phone.image}" alt="iphone-img">
        </div>
        <h3 class="card-title">${Phone.phone_name}</h3>
        <p class="card-description">
            There are many variations of passages of available, but the majority have suffered
        </p>
        <div class="card-price">
            <span>$</span>
            <span id="card-item-price">999</span>
        </div>
        <div class="card-button">
            <button class="btn">Show Details</button>
        </div>
        `;

        cardContainer.appendChild(productCard);
    });
};
