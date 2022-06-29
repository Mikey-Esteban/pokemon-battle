<script>
    import FightingMoves from '../fightingPokemon/fightingMoves.svelte';
    import { arceusHealth } from '../../stores/arceusHealth';
    export let activePokemon;


    console.log(activePokemon.name.toUpperCase(), activePokemon)

    let showMoves = false;
    let showActionText = false;
    $: moveText = "";

    const handleMoveClick = (event) => {
        const move = event.detail;
        showMoves = false;
        showActionText = true;

        console.log("handleMoveClick", move);
        moveText = move.flavorText.flavor_text;
        editMoveText();

        let power = move.power;
        let base = move.type == "special" ? 
            activePokemon.stats.special_attack :
            activePokemon.stats.attack ;

        if (move.type == "special") {
            console.log(`${activePokemon.name.toUpperCase()} special attack is:`, base);
        } else {
            console.log(`${activePokemon.name.toUpperCase()} attack is:`, base)
        }
        console.log(`${move.name} power is ${power}`);
        const currentDmg = calculateDmg(power, base);
        console.log(`${activePokemon.name} attacked for ${currentDmg}`);
        $arceusHealth = $arceusHealth - currentDmg;

        setTimeout(() => {
            showMoves = false;
            showActionText = false;
        }, 5000)
    }

    const calculateDmg = (power, base) => {
        let multiplier = (Math.random() * (12 - 8) + 8) / 10;
        return Math.floor(power * base / 150 * multiplier);
    }

    const handleCancelClick = () => {
        showMoves = false;
    }

    const handleFightClick = () => {
        showMoves = true;
    }

    const editMoveText = () => {
        moveText = moveText.replace("The user", activePokemon.name);
        moveText = moveText.replace("the user", activePokemon.name);
        moveText = moveText.replace("user", activePokemon.name);
        moveText = moveText.replace("\n", " ");
    }
    
</script>

<main>
    <div class="container pokemon-box">
        <img src={ activePokemon.isShiny ? activePokemon.shiny_back_sprite : activePokemon.normal_back_sprite } alt={`Back of ${activePokemon.name}`}>
        <div class="health">hp: <b>{activePokemon.stats.currentHp}/{activePokemon.stats.hp}</b></div>
    </div>
    <div class="container text-box">
        {#if showMoves && !showActionText}
            <FightingMoves pokemon={activePokemon} on:handleMoveClick={handleMoveClick} on:handleCancelClick={handleCancelClick} />
        {:else if (!showMoves && showActionText)}
            <p class="move-description">{moveText}</p>
        {:else}
            <p on:click={handleFightClick}>fight</p>
            <p>switch</p>
        {/if}
    </div>
</main>

<style>
    .text-box > p {
        cursor: pointer;
    }
</style>