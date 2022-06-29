<script>
    import Pokeball from '$lib/pokeball.svelte';
    import { pokemonTeam } from '../stores/pokestore.js';
</script>

<main>
    <div class="pokeballs">
        <Pokeball src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" occupied={$pokemonTeam[0] !== undefined} />
        <Pokeball src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" occupied={$pokemonTeam[1] !== undefined} />
        <Pokeball src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" occupied={$pokemonTeam[2] !== undefined} />
        <Pokeball src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" occupied={$pokemonTeam[3] !== undefined} />
        <Pokeball src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" occupied={$pokemonTeam[4] !== undefined} />
        <Pokeball src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" occupied={$pokemonTeam[5] !== undefined} />
    </div>
</main>

<style>
    .pokeballs {
        display: flex;
    }
</style>