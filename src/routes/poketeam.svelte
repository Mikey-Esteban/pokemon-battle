<script>
    import Card from '$lib/card.svelte';
    import List from '$lib/list.svelte';
    import { pokemonTeam } from '../stores/pokestore.js';

    let showMoves = false;
    $: activePokemon = null;
    let moves;

    const handleAddMove = (event) => {
        
        activePokemon.activeMoves ?
            activePokemon.activeMoves.push(event.detail) :
            activePokemon.activeMoves = [event.detail] ;

        const index = $pokemonTeam.findIndex(p => p.name == activePokemon.name);
        $pokemonTeam = $pokemonTeam.map((p, i) => i == index ? activePokemon : p );

    }

    const handleShowMoves = (event) => {
        showMoves = !showMoves;
        moves = event.detail.moves;
        activePokemon = event.detail;
    }
</script>

<main class="container-lg mt-5">
    <div class="container text-center">
        <a class="btn btn-primary btn-large" href="/">Home</a>
        <a class="btn btn-warning btn-large" href="/battle">Battle</a>
    </div>

    <h1>Poketeam</h1>
    <div class="cards">
        {#each $pokemonTeam as p}
            <Card pokemon={p} on:handleShowMoves={handleShowMoves} />
        {/each}
    </div>
    {#if showMoves }
        <List moves={moves} on:handleAddMove={handleAddMove} />
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cards {
        display: flex;
    }
</style>