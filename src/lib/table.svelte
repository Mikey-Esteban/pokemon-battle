<script>
    import Row from '$lib/row.svelte';
    export let pokemon;
</script>

<main>
    <div class="cards text-center">
        {#each pokemon as p}
            <div class="card">
                <Row pokemon={p} on:handleAddPokemon />
            </div>
        {:else}
            <h2>...loading</h2>
        {/each}
    </div>
</main>

<style>
    .cards {
        display: flex;
        flex-wrap: wrap;
    }
    .card {
        width: 30%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>