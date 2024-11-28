export const Filter = (price, jobs) => {
    const selectedPrice = price;
    if (!Array.isArray(jobs)) {
        console.error("Fetched data is not an array or not defined");
        return;
    }
    const filteredData = jobs.filter(item => item.pricePerHour <= selectedPrice);

    if (filteredData.length === 0) {
        console.log("No items match the selected price.");
        return (filteredData);
    }
    console.log("Filtered data:", filteredData);
    return (filteredData)

}