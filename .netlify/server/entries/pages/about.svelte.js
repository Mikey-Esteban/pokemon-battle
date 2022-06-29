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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c180ea3f = require("../../chunks/index-c180ea3f.js");
var about_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-hb6fcl{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}")();
const css = {
  code: "main.svelte-hb6fcl{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const About = (0, import_index_c180ea3f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"container-lg about svelte-hb6fcl"}"><h3>This is my about component</h3>
    <p>Some web development practice using SvelteKit, Bootstrap, Java Spring Boot / MVC, and the Pokemon API</p>
    <a class="${"btn btn-primary btn-outline"}" href="${"/"}">home</a>
</main>`;
});
