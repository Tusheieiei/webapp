export default class Data {
    constructor(url) {
        this.dataURL = url;
        this.masterKey = "$2a$10$7AM1j/hBZhPvc/smCjpiBuEtdtf85XHlFHw3JdaHGwnQwT7XD9gP.";
    }

    async fetchData() {
        const res = await fetch(dataURL, {
            method: "GET",
            headers: {
                "X-Master-Key": masterKey,
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            const data = await response.json();
            return data;
        }
    }
};