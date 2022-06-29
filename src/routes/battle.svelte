<script>
    import { onMount } from 'svelte';
    import Arceus from '../lib/arceus/arceus.svelte';
    import FightingPokemon from '../lib/fightingPokemon/fightingPokemon.svelte';
    import { pokemonTeam } from '../stores/pokestore.js';
    import { damagesInflicted } from '../stores/damagesInflicted.js';

    console.log($pokemonTeam);
    let isLoaded = false;
    $: activePokemon = null;



    const handleActivePokemon = (p) => {
        activePokemon = p;
        !isLoaded && eraseStartBattleText();
        isLoaded = true;
    }
    
    const displayStartBattleText = () => {
        document.querySelector(".battle-text-container").classList.remove("d-none");
    }

    const eraseStartBattleText = () => {
        document.querySelector(".battle-text-container").classList.add("d-none");
    }

    onMount( async () => {
        displayStartBattleText();
    });
</script>

<main class="container-sm battle-container">battle component
    {#if !isLoaded}
        <div class="container battle-text-container d-none">
            <h4>Welcome, choose your starting pokemon to battle</h4>
            {#each $pokemonTeam as p}
                <p class="pokemon-name" on:click={() => handleActivePokemon(p)}>{p.name}</p>
            {/each}
        </div>
    {:else}
        <Arceus  />
        <FightingPokemon {activePokemon} />
    {/if}
</main>

<style>
    .battle-container {
        max-width: 600px;
    }
    .pokemon-name {
        cursor: pointer;
        transition: all ease-in-out 150ms;
    }

    .pokemon-name:hover {
        color: red;
    }
</style>