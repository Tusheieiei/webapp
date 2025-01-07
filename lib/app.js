import { Data } from "./data.js";
import { Filter } from "./filter.js";

const urlParams = new URLSearchParams(window.location.search);
let jobTitle = urlParams.get("job");

if (jobTitle == null) {
    jobTitle = "Засвар";
}

const idPicker = id => document.getElementById(id);

idPicker("jobTitle").innerHTML = jobTitle;

const priceRange = idPicker("price");
const currentPrice = idPicker("currentPrice");

//currentPrice.textContent = priceRange.value;

const url = "https://api.jsonbin.io/v3/b/671f6fb1e41b4d34e44a1ff4/";
const data = Data(url, jobTitle);

const app = {};

(async () => {
    try {
        app.jobs = await data.fetchData();
        console.log(app.jobs, `${jobTitle}`);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
})();

priceRange.addEventListener("input", () => {
    const resultContainer = idPicker("listOfWorkers");
    currentPrice.textContent = priceRange.value;

    resultContainer.innerHTML = "";

    let filteredData = Filter(currentPrice.textContent, app.jobs);

    if (filteredData.length === 0) {
     
        resultContainer.innerHTML = "<p>Хайсан үнийн дүнд ажил одоогоор алга байна</p>";
    } else {
    
        filteredData.forEach(data => {
            const jobComponent = document.createElement("my-jobs");

            jobComponent.setAttribute("firstname", data.firstName);
            jobComponent.setAttribute("lastname", data.lastName);
            jobComponent.setAttribute("itemrating", data.rating);
            jobComponent.setAttribute("jobdescription", data.jobDescription);
            jobComponent.setAttribute("priceperhour", data.pricePerHour);

            resultContainer.appendChild(jobComponent);
        });
    }
});
