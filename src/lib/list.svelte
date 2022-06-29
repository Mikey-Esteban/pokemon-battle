<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { getMove, getMoveFlavorText } from '../api.js';
    export let moves;

    let dispatch = createEventDispatcher();

    let onlyAttacks = [];
    let isLoaded = false;

    const handleAddMove = async (m) => {
        const flavorText = await getMoveFlavorText(m.id)
        m.flavorText = flavorText;
        dispatch("handleAddMove", m);
    }

    onMount( async () => {
        for (let move of moves) {
            const moveData = await getMove(move.move.url);
            if (moveData.damage_class.name == "physical" || moveData.damage_class.name == "special") {
                const filteredMove = {
                    id: moveData.id,
                    name: moveData.name,
                    type: moveData.damage_class.name,
                    accuracy: moveData.accuracy,
                    power: moveData.power,
                    pp: moveData.pp,
                    priority: moveData.priority
                }
                onlyAttacks.push(filteredMove);
            }
        }

        isLoaded = true;
        console.log(onlyAttacks)
    })
</script>

<main class="container-lg">
    {#if isLoaded}
        {#each onlyAttacks as m}
            <p class="mx-1" on:click={() => handleAddMove(m)}>{m.name} </p>
        {/each}
    {:else}
        <h3>...loading</h3>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-wrap: wrap;
    }

    p {
        cursor: pointer;
        transition: all ease-in-out 150ms;
    }

    p:hover {
        color: red;
    }
</style>