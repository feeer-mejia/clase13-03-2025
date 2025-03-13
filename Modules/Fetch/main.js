async function getData() {
    const url = "https://rickandmortyapi.com/api/character";

    try {
        const data = await fetch(url);
        if(!data.ok){
            throw new Error("Ups... :", data.status);
        }
        let dataJson = await data.json();
        console.log(dataJson.results);

    } catch (error) {
        console.log(error.message);
    }

    
}

getData()