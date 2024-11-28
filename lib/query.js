function getValue(element) {
    const elementValue = document.getElementById(element).innerText;
    const targetUrl = `/pages/employees.html?job=${elementValue}`; 

    window.location.href = targetUrl;
}