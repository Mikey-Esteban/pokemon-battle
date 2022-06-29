<script>
    import { createEventDispatcher } from 'svelte';

    export let pokemon;

    let dispatch = createEventDispatcher();

    const handleMoveClick = (move) => {
        dispatch("handleMoveClick", move);
    }

    const handleCancelClick = () => {
        dispatch("handleCancelClick");
    }

</script>

<main class="container fighting-moves-container">
    {#each pokemon.activeMoves as move}
        <p class="move" on:click={() => handleMoveClick(move)}>{move.name} <b>{move.pp}/{move.pp}</b></p>
    {/each}
    <p class="move" on:click={handleCancelClick}>back</p>
</main>

<style>
    .fighting-moves-container {
        display: flex;
        flex-wrap: wrap;
    }
    .move {
        width: 50%;
        cursor: pointer;
    }
</style>