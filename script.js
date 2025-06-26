// Example Pokémon starting array (can add more)
    const hisuiPokedex = [
  { number: 1, name: "abomasnow", types: ["Grass", "Ice"] },
  { number: 2, name: "abra", types: ["Psychic"] },
  { number: 3, name: "aipom", types: ["Normal"] },
  { number: 4, name: "alakazam", types: ["Psychic"] },
  { number: 5, name: "alolan_ninetales", types: ["Ice", "Fairy"] },
  { number: 6, name: "alolan_vulpix", types: ["Ice"] },
  { number: 7, name: "ambipom", types: ["Normal"] },
  { number: 8, name: "arceus", types: ["Normal"] }, // Arceus changes type, default Normal
  { number: 9, name: "azelf", types: ["Psychic"] },
  { number: 10, name: "barboach", types: ["Water", "Ground"] },
  { number: 11, name: "basculegion", types: ["Water", "Ghost"] },
  { number: 12, name: "basculin", types: ["Water"] },
  { number: 13, name: "bastiodon", types: ["Rock", "Steel"] },
  { number: 14, name: "beautifly", types: ["Bug", "Flying"] },
  { number: 15, name: "bergmite", types: ["Ice"] },
  { number: 16, name: "bibarel", types: ["Normal", "Water"] },
  { number: 17, name: "bidoof", types: ["Normal"] },
  { number: 18, name: "blissey", types: ["Normal"] },
  { number: 19, name: "bonsly", types: ["Rock"] },
  { number: 20, name: "bronzong", types: ["Steel", "Psychic"] },
  { number: 21, name: "bronzor", types: ["Steel", "Psychic"] },
  { number: 22, name: "budew", types: ["Grass", "Poison"] },
  { number: 23, name: "buizel", types: ["Water"] },
  { number: 24, name: "buneary", types: ["Normal"] },
  { number: 25, name: "burmy", types: ["Bug"] },
  { number: 26, name: "carnivine", types: ["Grass"] },
  { number: 27, name: "cascoon", types: ["Bug"] },
  { number: 28, name: "chansey", types: ["Normal"] },
  { number: 29, name: "chatot", types: ["Normal", "Flying"] },
  { number: 30, name: "cherrim", types: ["Grass"] },
  { number: 31, name: "cherubi", types: ["Grass"] },
  { number: 32, name: "chimchar", types: ["Fire"] },
  { number: 33, name: "chimecho", types: ["Psychic"] },
  { number: 34, name: "chingling", types: ["Psychic"] },
  { number: 35, name: "clefable", types: ["Fairy"] },
  { number: 36, name: "clefairy", types: ["Fairy"] },
  { number: 37, name: "cleffa", types: ["Fairy"] },
  { number: 38, name: "combee", types: ["Bug", "Flying"] },
  { number: 39, name: "cranidos", types: ["Rock"] },
  { number: 40, name: "cresselia", types: ["Psychic"] },
  { number: 41, name: "croagunk", types: ["Poison", "Fighting"] },
  { number: 42, name: "crobat", types: ["Poison", "Flying"] },
  { number: 43, name: "cyndaquil", types: ["Fire"] },
  { number: 44, name: "darkrai", types: ["Dark"] },
  { number: 45, name: "datrix", types: ["Grass"] }, 
  { number: 46, name: "dewott", types: ["Water"] },
  { number: 47, name: "dialga", types: ["Steel", "Dragon"] },
  { number: 48, name: "drapion", types: ["Poison", "Dark"] },
  { number: 49, name: "drifblim", types: ["Ghost", "Flying"] },
  { number: 50, name: "drifloon", types: ["Ghost", "Flying"] },
  { number: 51, name: "dusclops", types: ["Ghost"] },
  { number: 52, name: "dusknoir", types: ["Ghost"] },
  { number: 53, name: "duskull", types: ["Ghost"] },
  { number: 54, name: "dustox", types: ["Bug", "Poison"] },
  { number: 55, name: "eevee", types: ["Normal"] },
  { number: 56, name: "electabuzz", types: ["Electric"] },
  { number: 57, name: "electivire", types: ["Electric"] },
  { number: 58, name: "elekid", types: ["Electric"] },
  { number: 59, name: "empoleon", types: ["Water", "Steel"] },
  { number: 60, name: "enamorus", types: ["Fairy", "Flying"] },
  { number: 61, name: "espeon", types: ["Psychic"] },
  { number: 62, name: "finneon", types: ["Water"] },
  { number: 63, name: "flareon", types: ["Fire"] },
  { number: 64, name: "floatzel", types: ["Water"] },
  { number: 65, name: "froslass", types: ["Ice", "Ghost"] },
  { number: 66, name: "gabite", types: ["Dragon", "Ground"] },
  { number: 67, name: "gallade", types: ["Psychic", "Fighting"] },
  { number: 68, name: "garchomp", types: ["Dragon", "Ground"] },
  { number: 69, name: "gardevoir", types: ["Psychic", "Fairy"] },
  { number: 70, name: "gastly", types: ["Ghost", "Poison"] },
  { number: 71, name: "gastrodon", types: ["Water", "Ground"] },
  { number: 72, name: "gengar", types: ["Ghost", "Poison"] },
  { number: 73, name: "geodude", types: ["Rock", "Ground"] },
  { number: 74, name: "gible", types: ["Dragon", "Ground"] },
  { number: 75, name: "girratina", types: ["Ghost", "Dragon"] },
  { number: 76, name: "glaceon", types: ["Ice"] },
  { number: 77, name: "glalie", types: ["Ice"] },
  { number: 78, name: "glameow", types: ["Normal"] },
  { number: 79, name: "gligar", types: ["Ground", "Flying"] },
  { number: 80, name: "gliscor", types: ["Ground", "Flying"] },
  { number: 81, name: "golbat", types: ["Poison", "Flying"] },
  { number: 82, name: "golduck", types: ["Water"] },
  { number: 83, name: "golem", types: ["Rock", "Ground"] },
  { number: 84, name: "goomy", types: ["Dragon"] },
  { number: 85, name: "graveler", types: ["Rock", "Ground"] },
  { number: 86, name: "grotle", types: ["Grass"] },
  { number: 87, name: "gyarados", types: ["Water", "Flying"] },
  { number: 88, name: "happiny", types: ["Normal"] },
  { number: 89, name: "haunter", types: ["Ghost", "Poison"] },
  { number: 90, name: "heatran", types: ["Fire", "Steel"] },
  { number: 91, name: "heracross", types: ["Bug", "Fighting"] },
  { number: 92, name: "hippopotas", types: ["Ground"] },
  { number: 93, name: "hippowdon", types: ["Ground"] },
   { number: 94, name: "decidueye_hisui", types: ["Grass", "Fighting"] },
  { number: 95, name: "typhlosion_hisui", types: ["Fire", "Ghost"] },
  { number: 96, name: "arcanine_hisui", types: ["Fire", "Rock"] },
  { number: 97, name: "avalugg_hisui", types: ["Ice", "Rock"] },
  { number: 98, name: "braviary_hisui", types: ["Psychic", "Flying"] },
  { number: 99, name: "electrode_hisui", types: ["Electric", "Grass"] },
  { number: 100, name: "goodra_hisui", types: ["Dragon", "Steel"] },
  { number: 101, name: "growlithe_hisui", types: ["Fire", "Rock"] },
  { number: 102, name: "lilligant_hisui", types: ["Grass", "Fighting"] },
  { number: 103, name: "sliggoo_hisui", types: ["Dragon", "Steel"] },
  { number: 104, name: "sneasel_hisui", types: ["Fighting", "Poison"] },
  { number: 105, name: "sneasler_hisui", types: ["Fighting", "Poison"] },
  { number: 106, name: "voltorb_hisui", types: ["Electric", "Grass"] },
  { number: 107, name: "zoroark_hisui", types: ["Normal", "Ghost"] },
  { number: 108, name: "zorua_hisui", types: ["Normal", "Ghost"] },
  { number: 109, name: "qwilfish_hisui", types: ["Dark", "Poison"] },
  { number: 110, name: "honchkrow", types: ["Dark", "Flying"] },
  { number: 111, name: "infernape", types: ["Fire", "Fighting"] },
  { number: 112, name: "jolteon", types: ["Electric"] },
  { number: 113, name: "kadabra", types: ["Psychic"] },
  { number: 114, name: "kirlia", types: ["Psychic", "Fairy"] },
  { number: 115, name: "kleavor", types: ["Bug", "Rock"] },
  { number: 116, name: "kricketot", types: ["Bug"] },
  { number: 117, name: "kricketune", types: ["Bug"] },
  { number: 118, name: "landorus", types: ["Ground", "Flying"] },
  { number: 119, name: "leafeon", types: ["Grass"] },
  { number: 120, name: "lickilicky", types: ["Normal"] },
  { number: 121, name: "lickitung", types: ["Normal"] },
  { number: 122, name: "lopunny", types: ["Normal"] },
  { number: 123, name: "lucario", types: ["Fighting", "Steel"] },
  { number: 124, name: "lumineon", types: ["Water"] },
  { number: 125, name: "luxio", types: ["Electric"] },
  { number: 126, name: "luxray", types: ["Electric"] },
  { number: 127, name: "machamp", types: ["Fighting"] },
  { number: 128, name: "machoke", types: ["Fighting"] },
  { number: 129, name: "machop", types: ["Fighting"] },
  { number: 130, name: "magby", types: ["Fire"] },
  { number: 131, name: "magikarp", types: ["Water"] },
  { number: 132, name: "magmar", types: ["Fire"] },
  { number: 133, name: "magmortar", types: ["Fire"] },
  { number: 134, name: "magnemite", types: ["Electric", "Steel"] },
  { number: 135, name: "magneton", types: ["Electric", "Steel"] },
  { number: 136, name: "magnezone", types: ["Electric", "Steel"] },
  { number: 137, name: "mamoswine", types: ["Ice", "Ground"] },
  { number: 138, name: "manaphy", types: ["Water"] },
  { number: 139, name: "mantine", types: ["Water", "Flying"] },
  { number: 140, name: "mantyke", types: ["Water", "Flying"] },
  { number: 141, name: "mesprit", types: ["Psychic"] },
  { number: 142, name: "mime_jr", types: ["Psychic", "Fairy"] },
  { number: 143, name: "misdreavus", types: ["Ghost"] },
  { number: 144, name: "mismagius", types: ["Ghost"] },
  { number: 145, name: "monferno", types: ["Fire", "Fighting"] },
  { number: 146, name: "mothim", types: ["Bug", "Flying"] },
  { number: 147, name: "mr_mime", types: ["Psychic", "Fairy"] },
  { number: 148, name: "munchlax", types: ["Normal"] },
  { number: 149, name: "murkrow", types: ["Dark", "Flying"] },
  { number: 150, name: "ninetales", types: ["Fire"] },
  { number: 151, name: "nosepass", types: ["Rock"] },
  { number: 152, name: "octillery", types: ["Water"] },
  { number: 153, name: "onix", types: ["Rock", "Ground"] },
  { number: 154, name: "oshawott", types: ["Water"] },
  { number: 155, name: "overqwil", types: ["Dark", "Poison"] },
  { number: 156, name: "pachirisu", types: ["Electric"] },
  { number: 157, name: "palkia", types: ["Water", "Dragon"] },
  { number: 158, name: "paras", types: ["Bug", "Grass"] },
  { number: 159, name: "parasect", types: ["Bug", "Grass"] },
  { number: 160, name: "petilil", types: ["Grass"] },
  { number: 161, name: "phione", types: ["Water"] },
  { number: 162, name: "pichu", types: ["Electric"] },
  { number: 163, name: "pikachu", types: ["Electric"] },
  { number: 164, name: "piloswine", types: ["Ice", "Ground"] },
  { number: 165, name: "piplup", types: ["Water"] },
  { number: 166, name: "ponyta", types: ["Fire"] },
  { number: 167, name: "porygon", types: ["Normal"] },
  { number: 168, name: "porygon2", types: ["Normal"] },
  { number: 169, name: "porygon3", types: ["Normal"] },
  { number: 170, name: "prinplup", types: ["Water"] },
  { number: 171, name: "probopass", types: ["Rock", "Steel"] },
  { number: 172, name: "psyduck", types: ["Water"] },
  { number: 173, name: "purugly", types: ["Normal"] },
  { number: 174, name: "quilava", types: ["Fire"] },
  { number: 175, name: "raichu", types: ["Electric"] },
  { number: 176, name: "ralts", types: ["Psychic", "Fairy"] },
  { number: 177, name: "rampardos", types: ["Rock"] },
  { number: 178, name: "rapidash", types: ["Fire"] },
  { number: 179, name: "regigigas", types: ["Normal"] },
  { number: 180, name: "remoraid", types: ["Water"] },
  { number: 181, name: "rhydon", types: ["Ground", "Rock"] },
  { number: 182, name: "rhyhorn", types: ["Ground", "Rock"] },
  { number: 183, name: "rhyperior", types: ["Ground", "Rock"] },
  { number: 184, name: "riolu", types: ["Fighting"] },
  { number: 185, name: "roselia", types: ["Grass", "Poison"] },
  { number: 186, name: "roserade", types: ["Grass", "Poison"] },
  { number: 187, name: "rotom", types: ["Electric", "Ghost"] },
  { number: 188, name: "rowlet", types: ["Grass", "Flying"] },
  { number: 189, name: "rufflet", types: ["Normal", "Flying"] },
  { number: 190, name: "samurott", types: ["Water"] },
  { number: 191, name: "scizor", types: ["Bug", "Steel"] },
  { number: 192, name: "scyther", types: ["Bug", "Flying"] },
  { number: 193, name: "sealeo", types: ["Ice", "Water"] },
  { number: 194, name: "shaymin", types: ["Grass"] },
  { number: 195, name: "shellos", types: ["Water"] },
  { number: 196, name: "shieldon", types: ["Rock", "Steel"] },
  { number: 197, name: "shinx", types: ["Electric"] },
  { number: 198, name: "silcoon", types: ["Bug"] },
  { number: 199, name: "skorupi", types: ["Poison", "Bug"] },
  { number: 200, name: "skuntank", types: ["Poison", "Dark"] },
  { number: 201, name: "sneasel", types: ["Dark", "Ice"] },
  { number: 202, name: "snorlax", types: ["Normal"] },
  { number: 203, name: "snorunt", types: ["Ice"] },
  { number: 204, name: "snover", types: ["Grass", "Ice"] },
  { number: 205, name: "spheal", types: ["Ice", "Water"] },
  { number: 206, name: "spiritomb", types: ["Ghost", "Dark"] },
  { number: 207, name: "stantler", types: ["Normal"] },
  { number: 208, name: "staraptor", types: ["Normal", "Flying"] },
  { number: 209, name: "staravia", types: ["Normal", "Flying"] },
  { number: 210, name: "starly", types: ["Normal", "Flying"] },
  { number: 211, name: "steelix", types: ["Steel", "Ground"] },
  { number: 212, name: "stunky", types: ["Poison", "Dark"] },
  { number: 213, name: "sudowoodo", types: ["Rock"] },
  { number: 214, name: "swinub", types: ["Ice", "Ground"] },
  { number: 215, name: "sylveon", types: ["Fairy"] },
  { number: 216, name: "tangela", types: ["Grass"] },
  { number: 217, name: "tangrowth", types: ["Grass"] },
  { number: 218, name: "teddiursa", types: ["Normal"] },
  { number: 219, name: "tentacool", types: ["Water", "Poison"] },
  { number: 220, name: "tentacruel", types: ["Water", "Poison"] },
  { number: 221, name: "thundurus", types: ["Electric", "Flying"] },
  { number: 222, name: "togekiss", types: ["Fairy", "Flying"] },
  { number: 223, name: "togepi", types: ["Fairy"] },
  { number: 224, name: "togetic", types: ["Fairy", "Flying"] },
  { number: 225, name: "tornadus", types: ["Flying"] },
  { number: 226, name: "torterra", types: ["Grass", "Ground"] },
  { number: 227, name: "toxicroak", types: ["Poison", "Fighting"] },
  { number: 228, name: "turtwig", types: ["Grass"] },
  { number: 229, name: "umbreon", types: ["Dark"] },
  { number: 230, name: "unown", types: ["Psychic"] },
  { number: 231, name: "ursaluna", types: ["Ground", "Normal"] },
  { number: 232, name: "ursalring", types: ["Normal"] }, // likely Ursaring
  { number: 233, name: "uxie", types: ["Psychic"] },
  { number: 234, name: "vaporeon", types: ["Water"] },
  { number: 235, name: "vespiquen", types: ["Bug", "Flying"] },
  { number: 236, name: "vulpix", types: ["Fire"] },
  { number: 237, name: "walrein", types: ["Ice", "Water"] },
  { number: 238, name: "weavile", types: ["Dark", "Ice"] },
  { number: 239, name: "whiscash", types: ["Water", "Ground"] },
  { number: 240, name: "wormadam", types: ["Bug", "Grass"] }, // Default form
  { number: 241, name: "wurmple", types: ["Bug"] },
  { number: 242, name: "wyrdeer", types: ["Normal", "Psychic"] },
  { number: 243, name: "yanma", types: ["Bug", "Flying"] },
  { number: 244, name: "yanmega", types: ["Bug", "Flying"] },
  { number: 245, name: "zubat", types: ["Poison", "Flying"] },
    ];

    // Load from localStorage or initialize
    let score = parseInt(localStorage.getItem("score")) || 0;
    let caughtPokemons = JSON.parse(localStorage.getItem("caughtPokemons") || "[]");

    const scoreValueElem = document.getElementById("scoreValue");
    const caughtListElem = document.getElementById("caughtList");
    const toggleBtn = document.getElementById("caughtToggle");
    const spriteElem = document.getElementById("pokemonSprite");
    const nameElem = document.getElementById("pokemonName");
    const typesElem = document.getElementById("pokemonTypes");

    function saveToLocal() {
      localStorage.setItem("score", score.toString());
      localStorage.setItem("caughtPokemons", JSON.stringify(caughtPokemons));
    }

    function getRandomPokemon() {
      if (!hisuiPokedex.length) {
        alert("Pokédex is empty or missing!");
        throw new Error("Pokédex array is empty.");
      }
      return hisuiPokedex[Math.floor(Math.random() * hisuiPokedex.length)];
    }

    function rollOdds(pokemonName) {
      const roll = Math.floor(Math.random() * 300) + 1;
      // Slightly better shiny odds for Bunneary
      if (pokemonName.toLowerCase().includes("bunneary")) {
        if (roll === 1 || roll === 2) return "shiny-alpha";  // 2/300 instead of 1/300
        if (roll <= 5) return "shiny";  // 5/300 instead of 3/300
        if (roll <= 18) return "alpha";
        return "regular";
      }
      if (roll === 1) return "shiny-alpha";
      if (roll <= 3) return "shiny";
      if (roll <= 18) return "alpha";
      return "regular";
    }

    function updateScoreAndCaught(pokemon, variant) {
      let pts = 0, label = "";
      if (variant === "shiny-alpha") { pts = 10; label = "✨ Shiny Alpha ✨"; }
      else if (variant === "shiny") { pts = 3; label = "⭐ Shiny"; }
      else if (variant === "alpha") { pts = 2; label = "👺 Alpha"; }
      else { pts = 1; }

      score += pts;
      scoreValueElem.textContent = score;

      const displayName = pokemon.name.replace(/_/g, " ");
      // Save as object with variant for easier handling
      caughtPokemons.unshift({ name: displayName, variant });
      saveToLocal();
      updateCaughtListWithSprites();
    }

    toggleBtn.addEventListener("click", () => {
      const visible = caughtListElem.style.display === "block";
      caughtListElem.style.display = visible ? "none" : "block";
      toggleBtn.textContent = visible ? "Show Caught Pokémon" : "Hide Caught Pokémon";
    });

    async function fetchMiniSprite(pokeName, variant) {
      try {
        const formName = pokeName.toLowerCase();
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${formName}`);
        if (!resp.ok) throw new Error("Form not found");
        const data = await resp.json();

        if (variant === "shiny" || variant === "shiny-alpha") {
          return data.sprites.front_shiny || data.sprites.front_default;
        }
        return data.sprites.front_default;
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

        const variant = rollOdds(pokemon.name);
        updateScoreAndCaught(pokemon, variant);

        const formName = pokemon.name.toLowerCase();

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${formName}`);
        if (!resp.ok) throw new Error("Form not found");
        const data = await resp.json();

        const shinySrc = data.sprites.front_shiny;
        const defaultSrc = data.sprites.front_default;

        spriteElem.src = (variant === "shiny" || variant === "shiny-alpha") && shinySrc ? shinySrc : defaultSrc;
        spriteElem.alt = pokemon.name;
        spriteElem.className = "";
        if (variant === "alpha") spriteElem.classList.add("alpha-glow");
        else if (variant === "shiny") spriteElem.classList.add("shiny-glow");
        else if (variant === "shiny-alpha") spriteElem.classList.add("shiny-alpha-glow");

      } catch (error) {
        console.error("Failed to load Pokémon data:", error);
      }
    }

    // Show score on load
    scoreValueElem.textContent = score;
    updateCaughtListWithSprites();

    // Load first Pokémon on page load
    loadPokemon();

    
    // Retry image load if it fails
    spriteElem.onerror = () => {
      console.warn("Initial image failed, retrying...");
      const baseSrc = spriteElem.src.split("?")[0];
      spriteElem.src = baseSrc + "?retry=" + Date.now();
    };


  // You can add a button or interval to load new Pokémon if you want
    // Example to load new Pokémon on click anywhere on pokedex box:
    document.getElementById("pokedex").addEventListener("click", loadPokemon);
