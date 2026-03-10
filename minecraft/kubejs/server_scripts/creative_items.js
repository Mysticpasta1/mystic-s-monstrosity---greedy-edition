// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.


ServerEvents.recipes(neofastftl => {
  neofastftl.shaped(
    Item.of('ae2:creative_fluid_cell'),
    [
      '1C2',
      'CSC',
      '3C4'
    ],
    {
      1: Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'enderio:nutrient_distillation',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      2: Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'mekanism:nutritional_paste',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      3: Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'mekanismgenerators:fusion_fuel',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      4: Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'nuclearcraft:corium',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      S: 'kubejs:the_greedy_completion',
      C: 'ae2omnicells:complex_omni_cell_housing'
    }
  ),
  neofastftl.recipes.extendedcrafting.shaped_table({
  pattern: [
    "XXXXXXXXX",
    "XBEEEEEBX",
    "XEBSSSBEX",
    "XESBSBSEX",
    "XESSCSSEX",
    "XESBSBSEX",
    "XEBSSSBEX",
    "XBEEEEEBX",
    "XXXXXXXXX"
  ],
  key: {
    X: {
      item: "storagedrawers:netherite_storage_upgrade"
    },
    S: {
      item: "celestial_core:igloo_loot_box"
    },
    E: {
      item: "avaritia:compressed_chest"
    },
    C: {
      item: "kubejs:the_greedy_completion"
    },
    B: {
      item: "brutality:plunder_chest_charm"
    }
    
  },
  result: {
    item: "ae2:creative_item_cell"
  }
})
})

// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.
