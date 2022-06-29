<script>
    import { onMount } from 'svelte';
    import Pokeballs from '$lib/pokeballs.svelte';
    import Table from '$lib/table.svelte';
    import { pokemonTeam } from '../stores/pokestore.js';
    import { getAllPokemon } from '../api.js';

    let pokemon = [];
    let isLoaded = false;
    let showTeam = false;

    const addPokemon = (event) => {
        $pokemonTeam = [...$pokemonTeam, event.detail];

        if ($pokemonTeam.length >= 3) {
            showTeam = true;
        }
    }

    const handleGoToTeam = () => {}

    onMount(async () => {
        const response = await getAllPokemon();
        pokemon = [...response.results];
        isLoaded = true;
    })

</script>

<main class="container-lg">
    <h1 class="text-primary">Welcome to SvelteKit</h1>
    <p>Visit <a href="/about">About</a> to about this project</p>
    {#if isLoaded}
        {#if showTeam}
            <a class="btn btn-lg btn-danger" on:click={handleGoToTeam} href="/poketeam">Team</a>
        {/if}
        <Pokeballs />
        <Table pokemon={pokemon} on:handleAddPokemon={addPokemon} />
    {:else}
        <h2>...loading</h2>
    {/if}
</main>

<style></style>

