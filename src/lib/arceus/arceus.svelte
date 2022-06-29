<script>
    import { onMount } from "svelte";
    import { arceusHealth } from '../../stores/arceusHealth';

    $arceusHealth;
    let isLoaded = false;
    let arceusData;

    const getData = async () => {

        const init = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
        };
    
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/arceus`, init);
    
        if (response.status === 404) {
        // empty
        return response;
        }
        if (response.status !== 200) {
        console.log(`Bad status: ${response.status}`);
        return Promise.reject("response is not 200 OK");
        }
    
        const json = await response.json();
        return json; 
    }

    onMount(async () => {
        arceusData = await getData();
        isLoaded = true;
    })
</script>

<main>
    {#if !isLoaded}
        <h2>...loading</h2>
    {:else}
        <div class="container arceus-container">
            <img src={arceusData.sprites.front_shiny} alt="Shiny Arceus">
            <div class="container health">hp: <b>{$arceusHealth} / {arceusData.stats[0].base_stat * 3}</b></div>
        </div>

    {/if}
</main>

<style>
    .arceus-container {
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .health {
        display: flex;
        justify-content: end;
    }
</style>