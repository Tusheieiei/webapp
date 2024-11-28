export default class Data {
    constructor(url, jobTitle) {
        this.dataURL = url;
        this.masterKey = "$2a$10$7AM1j/hBZhPvc/smCjpiBuEtdtf85XHlFHw3JdaHGwnQwT7XD9gP.";
        this.jobTitle = jobTitle;
    }

    async fetchData() {
  
        const res = await fetch(this.dataURL, {
            method: "GET",
            headers: {
                "X-Master-Key": this.masterKey,
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            const data = await res.json();
            return data.record.jobTypes[this.jobTitle];
        }
    }
};