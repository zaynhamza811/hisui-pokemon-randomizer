
const hisuiPokedex = [
  { name: "basculegion-male", types: ["water", "ghost"] },
  { name: "ursaluna", types: ["ground", "normal"] }
];

let score = parseInt(localStorage.getItem("score")) || 0;
let caughtPokemons = JSON.parse(localStorage.getItem("caughtPokemons") || "[]");

const scoreValueElem = document.getElementById("scoreValue");
const caughtListElem = document.getElementById("caughtList");
const toggleBtn = document.getElementById("caughtToggle");
const resetBtn = document.getElementById("resetBtn");
const spriteElem = document.getElementById("pokemonSprite");
const nameElem = document.getElementById("pokemonName");
const typesElem = document.getElementById("pokemonTypes");

function saveToLocal() {
  localStorage.setItem("score", score.toString());
  localStorage.setItem("caughtPokemons", JSON.stringify(caughtPokemons));
}

function getRandomPokemon() {
  return hisuiPokedex[Math.floor(Math.random() * hisuiPokedex.length)];
}

function rollOdds() {
  const roll = Math.floor(Math.random() * 300) + 1;
  if (roll === 1) return "shiny-alpha";
  if (roll <= 3) return "shiny";
  if (roll <= 18) return "alpha";
  return "regular";
}

function updateScoreAndCaught(pokemon, variant) {
  let pts = 0;
  if (variant === "shiny-alpha") pts = 10;
  else if (variant === "shiny") pts = 3;
  else if (variant === "alpha") pts = 2;
  else pts = 1;

  const displayName = pokemon.name.replace(/_/g, " ");
  const alreadyCaught = caughtPokemons.find(p => p.name === displayName && p.variant === variant);
  if (alreadyCaught) return;

  score += pts;
  scoreValueElem.textContent = score;
  caughtPokemons.unshift({ name: displayName, variant });
  saveToLocal();
  updateCaughtListWithSprites();
}

toggleBtn.addEventListener("click", () => {
  const visible = caughtListElem.style.display === "block";
  caughtListElem.style.display = visible ? "none" : "block";
  toggleBtn.textContent = visible ? "Show Caught Pokémon" : "Hide Caught Pokémon";
});

resetBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset all progress?")) {
    score = 0;
    caughtPokemons = [];
    saveToLocal();
    scoreValueElem.textContent = score;
    updateCaughtListWithSprites();
  }
});

async function fetchMiniSprite(pokeName, variant) {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokeName}`);
    if (!resp.ok) throw new Error("Form not found");
    const data = await resp.json();
    return (variant === "shiny" || variant === "shiny-alpha")
      ? data.sprites.front_shiny || data.sprites.front_default
      : data.sprites.front_default;
  } catch {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeName}.png`;
  }
}

async function updateCaughtListWithSprites() {
  caughtListElem.innerHTML = "";
  for (const entry of caughtPokemons) {
    const { name: pokeName, variant } = entry;
    const formName = pokeName.toLowerCase().replace(/ /g, "-");
    const spriteUrl = await fetchMiniSprite(formName, variant);
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = spriteUrl;
    img.alt = pokeName;
    if (variant === "alpha") img.classList.add("alpha-glow");
    else if (variant === "shiny") img.classList.add("shiny-glow");
    else if (variant === "shiny-alpha") img.classList.add("shiny-alpha-glow");
    div.appendChild(img);
    div.appendChild(document.createTextNode(`${pokeName} ${variantLabel(variant)}`));
    caughtListElem.appendChild(div);
  }
}

function variantLabel(variant) {
  switch (variant) {
    case "shiny-alpha": return "✨ Shiny Alpha ✨";
    case "shiny": return "⭐ Shiny";
    case "alpha": return "👺 Alpha";
    default: return "";
  }
}

async function loadPokemon() {
  try {
    const pokemon = getRandomPokemon();
    nameElem.textContent = pokemon.name.replace(/_/g, " ");
    typesElem.innerHTML = "";
    pokemon.types.forEach(type => {
      const span = document.createElement("span");
      span.className = "type";
      span.textContent = type;
      typesElem.appendChild(span);
    });

    const variant = rollOdds();
    updateScoreAndCaught(pokemon, variant);

    const formName = pokemon.name.toLowerCase();
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${formName}`);
    if (!resp.ok) throw new Error("Form not found");
    const data = await resp.json();
    const shinySrc = data.sprites.front_shiny;
    const defaultSrc = data.sprites.front_default;
    spriteElem.src = (variant === "shiny" || variant === "shiny-alpha") ? (shinySrc || defaultSrc) : defaultSrc;
    spriteElem.alt = pokemon.name.replace(/_/g, " ") + " sprite";
    spriteElem.className = "";
    if (variant === "alpha") spriteElem.classList.add("alpha-glow");
    else if (variant === "shiny") spriteElem.classList.add("shiny-glow");
    else if (variant === "shiny-alpha") spriteElem.classList.add("shiny-alpha-glow");
  } catch (err) {
    console.error("Error loading Pokémon:", err);
    nameElem.textContent = "Error loading Pokémon.";
    spriteElem.src = "";
    spriteElem.className = "";
  }
}

window.onload = () => {
  scoreValueElem.textContent = score;
  updateCaughtListWithSprites();
  loadPokemon();
};
