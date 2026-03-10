// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.


ServerEvents.recipes(neofastftl => {
        neofastftl.recipes.kubejs.shaped('mekanism:creative_energy_cube',
            [
                'ATA', 
                'UCU', 
                'ATA'
            ],
            {
                A: 'more_ores_more_gems:block_of_rainbow_fluorite',
                T: 'mekanismgenerators:module_solar_recharging_unit',
                U: 'enderio:vibrant_gear',
                C: 'mekanism:ultimate_energy_cube'
            }
        ).id('neofastftl:mekanism/creative_energy_cube')

        neofastftl.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('kubejs:the_greedy_completion').toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson()
                ],
                result: 
                   Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}')
                    .toJson()
            }
        ).id('neofastftl:energizing/mekanism_creative_energy_cube')
      })


// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.
