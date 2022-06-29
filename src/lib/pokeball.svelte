<script>
    import { pokemonTeam } from '../stores/pokestore.js';
    export let src;
    export let occupied;
    let img;

    const handleClick = () => {
        img.classList.contains('grayscale') ? img.classList.remove('grayscale') : img.classList.add('grayscale') ;
    }
</script>

<main>
    {#if occupied }
        <img src={src} alt="pokeball" on:click={handleClick} bind:this={img}>
    {:else}
        <img class="grayscale" src={src} alt="pokeball" on:click={handleClick} bind:this={img}>
    {/if}
</main>

<style>
    img {
        cursor: pointer;
        transition: all ease-in-out 150ms;
    }

    img:hover {
        scale: 1.2;
    }

    .grayscale { filter: grayscale(200%); }
</style>