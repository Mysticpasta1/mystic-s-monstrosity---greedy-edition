let MODS_TO_SCAN = ['minecraft', 'upgrade_aquatic', 'coralup', 'rainbowreef', 'spawn', 'hybrid-aquatic', 'tartarus'];
let itemExists = (id) => Item.exists(id);
let detectDeadCorals = (ns) => {
    if (!global.__ALL_ITEM_IDS__) global.__ALL_ITEM_IDS__ = Ingredient.of(/.*/).itemIds;
    let pats = [
        new RegExp(`^${ns}:dead_.+_coral$`),
        new RegExp(`^${ns}:dead_.+_coral_block$`),
        new RegExp(`^${ns}:dead_.+_coral_fan$`)
    ];
    return global.__ALL_ITEM_IDS__.filter(id => pats.some(p => p.test(id)));
};
let guessLiveFromDead = (deadItem) => deadItem.replace(':dead_', ':');

// make a safe recipe id path: only [a-z0-9/._-], no spaces, no colons in the path
let toPathSafe = (s, seq) => {
    let base = String(s).trim().toLowerCase();
    base = base.replace(/:/g, '__');          // remove any colons from the path
    base = base.replace(/[^a-z0-9/._-]/g, '_'); // hard sanitize
    return `kubejs:revive/${base}_${seq}`;
};

ServerEvents.recipes(event => {
    let addedPairs = [];
    let seq = 0;
    let addRevive = (deadItem, liveItem) => {
        if (!itemExists(deadItem) || !itemExists(liveItem)) return;
        seq++;
        event.shapeless(liveItem, ['minecraft:water_bucket', deadItem, 'minecraft:bone_meal'])
        .id(toPathSafe(liveItem, seq));
        addedPairs.push([deadItem, liveItem]);
    };

    for (let i = 0; i < MODS_TO_SCAN.length; i++) {
        let ns = MODS_TO_SCAN[i];
        if (ns !== 'minecraft' && !Platform.isLoaded(ns)) continue;
        let ids = detectDeadCorals(ns);
        for (let j = 0; j < ids.length; j++) {
            let deadItem = ids[j];
            let liveItem = guessLiveFromDead(deadItem);
            if (itemExists(liveItem)) addRevive(deadItem, liveItem);
        }
    }

    let EXPLICIT_PAIRS = [];
    for (let k = 0; k < EXPLICIT_PAIRS.length; k++) {
        let deadExplicit = EXPLICIT_PAIRS[k][0];
        let liveExplicit = EXPLICIT_PAIRS[k][1];
        addRevive(deadExplicit, liveExplicit);
    }

    global.__REVIVE_DEAD_IDS__ = (global.__REVIVE_DEAD_IDS__ || new Set());
    for (let m = 0; m < addedPairs.length; m++) global.__REVIVE_DEAD_IDS__.add(addedPairs[m][0]);
    for (let n = 0; n < EXPLICIT_PAIRS.length; n++) global.__REVIVE_DEAD_IDS__.add(EXPLICIT_PAIRS[n][0]);

    event.remove({output: 'minecraft:furnace', type: 'minecraft:crafting_shaped'});
    event.shaped('minecraft:furnace', ['###','# #','###'], {'#': '#minecraft:stone_crafting_materials'}).id('minecraft:furnace');
});

ServerEvents.tags('item', event => {
    let addToTag = (id) => { if (itemExists(id)) event.add('forge:dead_corals', id); };
    for (let i = 0; i < MODS_TO_SCAN.length; i++) {
        let ns = MODS_TO_SCAN[i];
        if (ns !== 'minecraft' && !Platform.isLoaded(ns)) continue;
        let ids = detectDeadCorals(ns);
        for (let j = 0; j < ids.length; j++) addToTag(ids[j]);
    }
    if (global.__REVIVE_DEAD_IDS__) for (let id of global.__REVIVE_DEAD_IDS__) addToTag(id);
});
