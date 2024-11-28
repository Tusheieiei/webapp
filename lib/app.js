import Data from "./data.js";
import { Filter } from "./filter.js";
import Jobs from "./jobs.js";
const urlParams = new URLSearchParams(window.location.search);
let jobTitle = urlParams.get("job");

console.log(window.location.href);
if (jobTitle == null) {
    jobTitle = "Засвар";
}

const idPicker = id => document.getElementById(id);

idPicker("jobTitle").innerHTML = jobTitle;


var priceRange = idPicker("price");
var currentPrice = idPicker("currentPrice");

currentPrice.textContent = priceRange.value;

const url = "https://api.jsonbin.io/v3/b/671f6fb1e41b4d34e44a1ff4/";

const data = new Data(url, jobTitle);
app.jobs = await data.fetchData();

console.log(app.jobs, `${jobTitle}`);

priceRange.addEventListener("input", () => {
    const resultContainer = idPicker("listOfWorkers");
    resultContainer.innerHTML = "";
    currentPrice.textContent = priceRange.value;
    let filteredData = Filter(currentPrice.textContent, app.jobs);
    console.log(filteredData);
    const renderedItems = filteredData.map(item => (new Jobs(item)).render()).join("");
    resultContainer.innerHTML = renderedItems;
});






