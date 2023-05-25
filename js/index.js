// Array of card data
const cardData = [
    {
        photo: "../images/speaker/speaker-1.png",
        name: "Yochai Benkler",
        role: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description:
            "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006"
    },
    {
        photo: "../images/speaker/speaker-2.png",
        name: "Yochai Benkler",
        role: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description:
            "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006"
    },
    {
        photo: "../images/speaker/speaker-3.png",
        name: "Yochai Benkler",
        role: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description:
            "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006"
    },
    {
        photo: "../images/speaker/speaker-4.png",
        name: "Yochai Benkler",
        role: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description:
            "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006"
    },
    {
        photo: "../images/speaker/speaker-5.png",
        name: "Yochai Benkler",
        role: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description:
            "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006"
    },
    {
        photo: "../images/speaker/speaker-6.png",
        name: "Yochai Benkler",
        role: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        description:
            "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006"
    }
    // Add more card data as needed
];

// Number of cards to initially display and load on each click
const cardsPerLoad = 2;

// Index to track the current set of loaded cards
let currentIndex = 0;

// Function to generate a card element
function createCard(photo, name, role, description) {
    const card = document.createElement("div");
    card.classList.add("col-md-6");
    card.innerHTML = `
      <div class="card speaker-cards">
        <div class="row g-0">
          <div class="col-md-6 col-sm-6">
            <img src="${photo}" class="card-img-top img-fluid card-img-no-padding" alt="${name}">
          </div>
          <div class="col-md-6 col-sm-6">
            <article class="card-body speaker-body">
              <h5 class="card-title-h">${name}</h5>
              <p class="card-text-two"> ${role}</p>
              <p class="card-text-three">${description}</p>
            </article>
          </div>
        </div>
      </div>
    `;
    return card;
}

// Function to load the next set of cards
function loadCards() {
    const cardRow = document.getElementById("cardRow");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const endIndex = currentIndex + cardsPerLoad;

    for (let i = currentIndex; i < endIndex; i += 1) {
        if (i >= cardData.length) {
            loadMoreBtn.style.display = "none";
            break;
        }
        const card = createCard(
            cardData[i].photo,
            cardData[i].name,
            cardData[i].role, // Add texttwo parameter
            cardData[i].description // Add textthree parameter
        );
        cardRow.appendChild(card);
    }

    currentIndex = endIndex;
}

// Function to handle window resize event
function handleResize() {
    const cardRow = document.getElementById("cardRow");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    // Clear existing cards
    cardRow.innerHTML = "";

    if (window.innerWidth >= 768) {
        loadMoreBtn.style.display = "none";
        // Display all cards on desktop
        for (let i = 0; i < cardData.length; i += 1) {
            const card = createCard(
                cardData[i].photo,
                cardData[i].name,
                cardData[i].role, // Add texttwo parameter
                cardData[i].description // Add textthree parameter
            );
            cardRow.appendChild(card);
        }
    } else {
        loadMoreBtn.style.display = "block";
        loadCards(); // Load initial set of cards on mobile
    }
}

// Execute the loadCards function when the page has finished loading
window.addEventListener("load", () => {
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", loadCards);
    }

    handleResize(); // Call handleResize initially to set the initial state
    window.addEventListener("resize", handleResize); // Add event listener for window resize
});
