let base_pokemon_url = "https://pokeapi.co/api/v2";

const getAllPokemon = async () => {

    const init = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
    };

    const response = await fetch(`${base_pokemon_url}/pokemon?limit=151`, init);

    if (response.status === 404) {
    // empty
    return response;
    }
    if (response.status !== 200) {
    console.log(`Bad status: ${response.status}`);
    return Promise.reject("response is not 200 OK");
    // TODO: show this error in UI
    }

    const json = await response.json();
    return json;
}

const getPokemon = async (url) => {

    const init = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
    };

    const response = await fetch(url, init);

    if (response.status === 404) {
    // empty
    return response;
    }
    if (response.status !== 200) {
    console.log(`Bad status: ${response.status}`);
    return Promise.reject("response is not 200 OK");
    // TODO: show this error in UI
    }

    const json = await response.json();
    return json;
}

const getMove = async (url) => {

    const init = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
        };
    
        const response = await fetch(url, init);
    
        if (response.status === 404) {
        // empty
        return response;
        }
        if (response.status !== 200) {
        console.log(`Bad status: ${response.status}`);
        return Promise.reject("response is not 200 OK");
        // TODO: show this error in UI
        }
    
        const json = await response.json();
        return json; 
}

const getMoveFlavorText = async (id) => {

    const init = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
        };
    
        const response = await fetch(`https://pokeapi.co/api/v2/move/${id}`, init);
    
        if (response.status === 404) {
        // empty
        return response;
        }
        if (response.status !== 200) {
        console.log(`Bad status: ${response.status}`);
        return Promise.reject("response is not 200 OK");
        // TODO: show this error in UI
        }
    
        const json = await response.json();
        const flavorTextEntries = json.flavor_text_entries;
        const enFlavorTextEntires = flavorTextEntries.filter(f => f.language.name == "en");

        return enFlavorTextEntires[0]; 
}


export { getAllPokemon, getPokemon, getMove, getMoveFlavorText }