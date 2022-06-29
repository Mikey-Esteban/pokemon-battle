<script>
    import { createEventDispatcher } from 'svelte';
    export let pokemon;

    let dispatch = createEventDispatcher();

    const getSprite = () => {
        return pokemon.isShiny ? pokemon.shiny_sprite : pokemon.normal_sprite ;
    }

    const handleClick = (pokemon) => {
        dispatch("handleShowMoves", pokemon);
    }
</script>

<main class="card">
    <img src={getSprite()} class="card-img-top" alt={pokemon.name}>
    <div class="card-body">
        <h5 class="card-title">{pokemon.name}</h5>
        {#if pokemon.activeMoves}
            {#each pokemon.activeMoves as move}
                <p class="card-text my-1">{move.name}</p>
            {/each}
        {/if}
        {#if !pokemon.activeMoves || pokemon.activeMoves.length < 4 }
            <button class="btn btn-primary" on:click={() => handleClick(pokemon)}>add moves</button>
        {/if}
    </div>
</main>

<style></style>