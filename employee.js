
const urlParams = new URLSearchParams(window.location.search);
let jobTitle = urlParams.get("value");

if (jobTitle == null) {
    jobTitle = "Засвар";
}

const idPicker = id => document.getElementById(id);

idPicker("jobTitle").innerHTML = jobTitle;

const priceRange = idPicker("price");
const currentPrice = idPicker("currentPrice");


currentPrice.textContent = priceRange.value;


let fetchedData = [];

priceRange.addEventListener("input", (event) => {
    currentPrice.textContent = event.target.value;
    filterAndRenderData();
});

const DataFetch = async () => {
    const url = "https://api.jsonbin.io/v3/b/671f6fb1e41b4d34e44a1ff4";
    const masterKey = "$2a$10$7AM1j/hBZhPvc/smCjpiBuEtdtf85XHlFHw3JdaHGwnQwT7XD9gP.";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Master-Key": masterKey,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        fetchedData = data.record.jobTypes[jobTitle] || [];
        filterAndRenderData();

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const filterAndRenderData = () => {
    const selectedPrice = priceRange.value;
   

    if (!Array.isArray(fetchedData)) {
        console.error("Fetched data is not an array or not defined");
        return;
    }

    const filteredData = fetchedData.filter(item => item.pricePerHour <= selectedPrice);

    if (filteredData.length === 0) {
        console.log("No items match the selected price.");
    } else {
        console.log("Filtered data:", filteredData);
        Render(filteredData); 
    }
};


priceRange.addEventListener("input", () => {
    currentPrice.textContent = priceRange.value; 
    filterAndRenderData(); 
});

const Render = (filteredData) => {
    const resultContainer = idPicker("listOfWorkers");
    resultContainer.innerHTML = "";

    if (filteredData.length === 0) {
        resultContainer.innerHTML = "<p>No job listings found within this price range.</p>";
        return;
    }

    const renderedItems = filteredData.map(item => `
        <article class="services">
            <div class="picture">
                <img src="https://picsum.photos/200/200" alt="Үйлчилгээний ажилтан" />
            </div>
            <div class="profile">
                <h3>${item.firstName} ${item.lastName}</h3>
                <span>Үнэлгээ: ${item.rating || '★★★☆☆'}</span>
                <p>${item.jobDescription || 'Үйлчилгээний товч танилцуулга...'}</p>
            </div>
            <div class="PriceToTime">
                <p>Үнэ: 1цаг / ${item.pricePerHour}₮</p>
                <a href="workerProfile.html">
                    <button>Сонгох</button>
                </a>
            </div>
        </article>
    `).join('');


    resultContainer.innerHTML = renderedItems;
};

document.addEventListener("DOMContentLoaded", () => {
    DataFetch();
});
