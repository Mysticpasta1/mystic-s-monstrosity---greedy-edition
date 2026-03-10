//-----------------------------------------------------
//  Create: Draconic Integration - Full Recipe Script
//-----------------------------------------------------

ServerEvents.recipes(event => {

    // -------------------------------------------------
    // 1. Dragonbone → bone meal + rare loot
    // -------------------------------------------------
    event.recipes.create.crushing([
        '3x minecraft:bone_meal'
    ], 'iceandfire:dragonbone')
    .processingTime(20)


    // -------------------------------------------------
    // 2. Dragon Meal (Create Compacting)
    // -------------------------------------------------
    event.recipes.create.compacting(
        'iceandfire:dragon_meal',
        [
            '3x minecraft:bone_meal',
            '2x minecraft:cooked_beef'
        ]
    )


    // -------------------------------------------------
    // 3. Sticky Dragon Meal
    // -------------------------------------------------
    event.recipes.create.compacting(
        'iceandfire:sickly_dragon_meal',
        [
            '3x minecraft:bone_meal',
            '2x minecraft:cooked_beef',
            '3x minecraft:rotten_flesh'
        ]
    )


    // -------------------------------------------------
    // 4. Dragonsteel Fire (requires heating)
    //     Blood must be a fluid ingredient
    // -------------------------------------------------
    event.recipes.create.compacting(
        'iceandfire:dragonsteel_fire_ingot',
        [
            Fluid.of('iceandfire:fire_dragon_blood', 100),
            'minecraft:iron_ingot'
        ]
    ).heated()


    // -------------------------------------------------
    // 5. Fire Dragon Blood → Blaze items (Splashing)
    // -------------------------------------------------
    event.recipes.create.splashing([
        '2x minecraft:blaze_powder',
        Item.of('minecraft:blaze_rod').withChance(0.15),
        Item.of('minecraft:ghast_tear').withChance(0.05)
    ], 'iceandfire:fire_dragon_blood')


    // -------------------------------------------------
    // 6. Ice Dragon Scales → Ice products
    // -------------------------------------------------
    event.recipes.create.crushing([
        '2x minecraft:ice',
        Item.of('minecraft:packed_ice').withChance(0.25),
        Item.of('minecraft:blue_ice').withChance(0.05)
    ], 'iceandfire:dragonscale_ice')




    // -------------------------------------------------
        // 7 Water Splash Test
        // -------------------------------------------------
   event.recipes.create.splashing([
       Item.of('iceandfire:dragonegg_electric').withChance(0.01),
       Item.of('iceandfire:dragonegg_red').withChance(0.10)
   ], 'minecraft:gravel')






})





//-----------------------------------------------------
//  Item Tag Edits
//-----------------------------------------------------
ServerEvents.tags('item', event => {
    event.add('create:washing_blacklist', [
        'iceandfire:dragonbone',
        '#iceandfire:dragon_scales',
        '#iceandfire:dragon_blood',
        '#iceandfire:dragoneggs'
    ])
})


//-----------------------------------------------------
//  Fire Dragon Drops Extra Loot (Rare Cogwheel)
//-----------------------------------------------------
EntityEvents.death('iceandfire:fire_dragon', event => {
    if (event.source.actual?.isPlayer()) {
        let chance = 0.05 + (0.02 * event.lootingLevel)  // 5% + 2% per looting
        if (Math.random() < chance) {
            event.entity.dropItem('create:cogwheel')
        }
    }
})
