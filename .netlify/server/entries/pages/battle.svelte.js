var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Battle
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c180ea3f = require("../../chunks/index-c180ea3f.js");
var import_pokestore_0a85a7cd = require("../../chunks/pokestore-0a85a7cd.js");
var arceus_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".arceus-container.svelte-1c1uug4{display:flex;flex-direction:column;align-items:end}.health.svelte-1c1uug4{display:flex;justify-content:end}")();
var fightingMoves_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".fighting-moves-container.svelte-c3lzdz{display:flex;flex-wrap:wrap}.move.svelte-c3lzdz{width:50%;cursor:pointer}")();
var fightingPokemon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".text-box.svelte-1erewbk>p.svelte-1erewbk{cursor:pointer}")();
var battle_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".battle-container.svelte-1nwatua{max-width:600px}.pokemon-name.svelte-1nwatua{cursor:pointer;transition:all ease-in-out 150ms}.pokemon-name.svelte-1nwatua:hover{color:red}")();
const css = {
  code: ".battle-container.svelte-1nwatua{max-width:600px}.pokemon-name.svelte-1nwatua{cursor:pointer;transition:all ease-in-out 150ms}.pokemon-name.svelte-1nwatua:hover{color:red}",
  map: null
};
const Battle = (0, import_index_c180ea3f.c)(($$result, $$props, $$bindings, slots) => {
  let $pokemonTeam, $$unsubscribe_pokemonTeam;
  $$unsubscribe_pokemonTeam = (0, import_index_c180ea3f.a)(import_pokestore_0a85a7cd.p, (value) => $pokemonTeam = value);
  console.log($pokemonTeam);
  $$result.css.add(css);
  $$unsubscribe_pokemonTeam();
  return `<main class="${"container-sm battle-container svelte-1nwatua"}">battle component
    ${`<div class="${"container battle-text-container d-none"}"><h4>Welcome, choose your starting pokemon to battle</h4>
            ${(0, import_index_c180ea3f.b)($pokemonTeam, (p) => {
    return `<p class="${"pokemon-name svelte-1nwatua"}">${(0, import_index_c180ea3f.e)(p.name)}</p>`;
  })}</div>`}
</main>`;
});
