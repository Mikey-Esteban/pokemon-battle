<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import { getPokemon } from '../api.js';

    export let pokemon;
    export let sprite;
    
    const dispatch = createEventDispatcher();

    let isLoaded = false;
    let statsData;
    let showData = false;
    let normal_sprite;
    let normal_back_sprite;
    let shiny_sprite;
    let shiny_back_sprite
    let isShiny = false;
    let stats;
    let moves = null;
    

    const getStats = () => {
        stats = {
            "hp": statsData[0]['base_stat'],
            "currentHp": statsData[0]['base_stat'],
            "attack": statsData[1]['base_stat'],
            "defense": statsData[2]['base_stat'],
            "special_attack": statsData[3]['base_stat'],
            "special_defense": statsData[4]['base_stat'],
            "speed": statsData[5]['base_stat'],
        }

        return stats;
    }

    const handleStatsClick = () => {
        showData = !showData;
        getStats();
    }

    const handleShinyClick = () => {
        isShiny = !isShiny;
        sprite = sprite === normal_sprite ? shiny_sprite : normal_sprite ;
    }

    const handleAddClick = (pokemon) => {
        let fullPokemon = {
            name: pokemon.name,
            url: pokemon.url,
            stats: getStats(),
            normal_sprite: normal_sprite,
            normal_back_sprite: normal_back_sprite,
            shiny_sprite: shiny_sprite,
            shiny_back_sprite: shiny_back_sprite,
            isShiny: isShiny,
            moves: moves
        }

        dispatch("handleAddPokemon", fullPokemon);
    }

    onMount(async () => {
        const json = await getPokemon(pokemon.url);
        normal_sprite = json.sprites.front_default;
        normal_back_sprite = json.sprites.back_default;
        shiny_sprite = json.sprites.front_shiny;
        shiny_back_sprite = json.sprites.back_shiny;
        sprite = normal_sprite;
        statsData = json.stats;
        moves = json.moves;

        isLoaded = true;
    })
    
</script>

<main>
    {#if isLoaded}
        <h5>{pokemon.name}</h5>
        <div class="container main-container">
            <img src={sprite} alt="sprite">
            <div class="btn-group mb-4" role="group" aria-label="Basic example">
                <button class="btn btn-info btn-sm text-light" on:click={handleStatsClick}>stats</button>
                <button class="btn btn-warning btn-sm text-light mx-1" on:click={handleShinyClick}>shiny</button>
                <button class="btn btn-dark btn-sm text-light" on:click={() => handleAddClick(pokemon)}>add</button>
            </div>
        </div>
    {:else}
        <h3>...loading</h3>
    {/if}
    {#if showData}
        <div class="container stats-container mb-2">
            <div class="stat-container">
                <p class="stats"><b>hp</b>: {stats.hp}</p>
                <p class="stats"><b>attack</b>: {stats.attack}</p>
                <p class="stats"><b>defense</b>: {stats.defense}</p>
            </div>
            <div class="stat-container">
                <p class="stats"><b>sp attack</b>: {stats.special_attack}</p>
                <p class="stats"><b>sp defense</b>: {stats.special_defense}</p>
                <p class="stats"><b>speed</b>: {stats.speed}</p>
            </div>
        </div>
    {/if}
</main>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .stats-container {
        display: flex;
        justify-content: space-around;
    }
    .stat-container {
        display: flex;
        align-items: end;
        flex-direction: column;
    }
    .stats {
        margin: 0;
    }
</style>