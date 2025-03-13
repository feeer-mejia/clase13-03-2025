import url from "./url.js";

async function getData() {
    try {
        const data = await fetch(url);
        if(!data.ok){
            throw new Error("Ups... :", data.status);
        }
        let dataJson = await data.json();
        console.log(dataJson.results);
        return dataJson.results;

    } catch (error) {
        console.log(error.message);
    }

    
}

export default getData;