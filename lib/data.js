export const Data = (url, jobTitle) => {
    const fetchData = async () => {
        const masterKey = "$2a$10$7AM1j/hBZhPvc/smCjpiBuEtdtf85XHlFHw3JdaHGwnQwT7XD9gP.";
        
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "X-Master-Key": masterKey,
                "Content-Type": "application/json"
            }
        });

        if (res.ok) {
            const data = await res.json();
            return data.record.jobTypes[jobTitle];
        } else {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
    };

    return { fetchData };
};
