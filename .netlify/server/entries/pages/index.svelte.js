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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c180ea3f = require("../../chunks/index-c180ea3f.js");
var import_pokestore_0a85a7cd = require("../../chunks/pokestore-0a85a7cd.js");
var pokeball_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "img.svelte-o8api8{cursor:pointer;transition:all ease-in-out 150ms}img.svelte-o8api8:hover{scale:1.2}.grayscale.svelte-o8api8{filter:grayscale(200%)}")();
var pokeballs_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".pokeballs.svelte-10rhlqu{display:flex}")();
var row_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".main-container.svelte-ghjuto{display:flex;flex-direction:column;justify-content:center;align-items:center}.stats-container.svelte-ghjuto{display:flex;justify-content:space-around}.stat-container.svelte-ghjuto{display:flex;align-items:end;flex-direction:column}.stats.svelte-ghjuto{margin:0}")();
var table_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".cards.svelte-2c9w9z{display:flex;flex-wrap:wrap}.card.svelte-2c9w9z{width:30%;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}")();
const Routes = (0, import_index_c180ea3f.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pokemonTeam;
  $$unsubscribe_pokemonTeam = (0, import_index_c180ea3f.a)(import_pokestore_0a85a7cd.p, (value) => value);
  $$unsubscribe_pokemonTeam();
  return `<main class="${"container-lg"}"><h1 class="${"text-primary"}">Welcome to SvelteKit</h1>
    <p>Visit <a href="${"/about"}">About</a> to about this project</p>
    ${`<h2>...loading</h2>`}
</main>`;
});
