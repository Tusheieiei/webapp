function getValue(element) {
    const elementValue = document.getElementById(element).innerText;
    const targetUrl = `/pages/employees.html?job=${encodeURIComponent(elementValue)}`; // Add it as a URL parameter

    window.location.href = targetUrl; // Navigate to the new URL
}