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
  default: () => Poketeam
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c180ea3f = require("../../chunks/index-c180ea3f.js");
var import_pokestore_0a85a7cd = require("../../chunks/pokestore-0a85a7cd.js");
const Card = (0, import_index_c180ea3f.c)(($$result, $$props, $$bindings, slots) => {
  let { pokemon } = $$props;
  (0, import_index_c180ea3f.f)();
  const getSprite = () => {
    return pokemon.isShiny ? pokemon.shiny_sprite : pokemon.normal_sprite;
  };
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  return `<main class="${"card"}"><img${(0, import_index_c180ea3f.g)("src", getSprite(), 0)} class="${"card-img-top"}"${(0, import_index_c180ea3f.g)("alt", pokemon.name, 0)}>
    <div class="${"card-body"}"><h5 class="${"card-title"}">${(0, import_index_c180ea3f.e)(pokemon.name)}</h5>
        ${pokemon.activeMoves ? `${(0, import_index_c180ea3f.b)(pokemon.activeMoves, (move) => {
    return `<p class="${"card-text my-1"}">${(0, import_index_c180ea3f.e)(move.name)}</p>`;
  })}` : ``}
        ${!pokemon.activeMoves || pokemon.activeMoves.length < 4 ? `<button class="${"btn btn-primary"}">add moves</button>` : ``}</div>
</main>`;
});
var list_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-198ctb8{display:flex;flex-wrap:wrap}p.svelte-198ctb8{cursor:pointer;transition:all ease-in-out 150ms}p.svelte-198ctb8:hover{color:red}")();
var poketeam_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-96mq0l{display:flex;flex-direction:column;align-items:center;justify-content:center}.cards.svelte-96mq0l{display:flex}")();
const css = {
  code: "main.svelte-96mq0l{display:flex;flex-direction:column;align-items:center;justify-content:center}.cards.svelte-96mq0l{display:flex}",
  map: null
};
const Poketeam = (0, import_index_c180ea3f.c)(($$result, $$props, $$bindings, slots) => {
  let $pokemonTeam, $$unsubscribe_pokemonTeam;
  $$unsubscribe_pokemonTeam = (0, import_index_c180ea3f.a)(import_pokestore_0a85a7cd.p, (value) => $pokemonTeam = value);
  $$result.css.add(css);
  $$unsubscribe_pokemonTeam();
  return `<main class="${"container-lg mt-5 svelte-96mq0l"}"><div class="${"container text-center"}"><a class="${"btn btn-primary btn-large"}" href="${"/"}">Home</a>
        <a class="${"btn btn-warning btn-large"}" href="${"/battle"}">Battle</a></div>

    <h1>Poketeam</h1>
    <div class="${"cards svelte-96mq0l"}">${(0, import_index_c180ea3f.b)($pokemonTeam, (p) => {
    return `${(0, import_index_c180ea3f.v)(Card, "Card").$$render($$result, { pokemon: p }, {}, {})}`;
  })}</div>
    ${``}
</main>`;
});
