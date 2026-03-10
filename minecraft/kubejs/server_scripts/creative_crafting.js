// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.

ServerEvents.recipes(neofastftl => {
  neofastftl.shaped(
    Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'),
    [
      'SDS',
      'DUD',
      'SDS'
    ],
    {
      D: 'mysticalagradditions:gaia_spirit_crux',
      S: 'botania:terrasteel_block',
      U: 'kubejs:the_greedy_completion'
    }
  ),
  neofastftl.custom({
  type: "extendedcrafting:shaped_table",
    pattern: [
      '1FFF2',
      'F3E4F',
      'FESEF',
      'F5E6F',
      '7FFF8'
    ],
    key: {
      1:Item.of('mekanism:ultimate_fluid_tank', {
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
      2:Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'tconstruct:molten_amethyst',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      3:Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'nuclearcraft:fuel_californium_hecf_251_za',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      4:Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'mysticalagradditions:molten_soulium',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      5:Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'mysticalagradditions:molten_supremium',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      6:Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'tconstruct:molten_knightslime',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      7:Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'tconstruct:molten_signalum',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      8:Item.of('mekanism:ultimate_fluid_tank', {
        mekData: {
          FluidTanks: [
            {
              Tank: '0b',
              stored: {
                FluidName: 'tconstruct:molten_netherite',
                Amount: 256000
              }
            }
          ]
        }
      }).strongNBT(),
      S: {"item": 'kubejs:the_greedy_completion'},
      F: {"item": 'thermal_extra:abyssal_fluid_tank_augment'},
      E: {"item": 'thermal:fluid_cell'},
    },
    result: {
      item:'mekanism:creative_fluid_tank'
    }
  }),
  neofastftl.custom({
  type: "extendedcrafting:shaped_table",
    pattern: [
      '1FFF2',
      'F3E4F',
      'FESEF',
      'F5E6F',
      '7FFF8'
    ],
    key: {
      1:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          GasTanks: [],
          InfusionTanks: [],
          SlurryTanks: [],
          PigmentTanks: [
            {
              Tank: '0b',
              stored: {
                pigmentName: 'mekanism:dark_red',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      2:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          GasTanks: [],
          InfusionTanks: [],
          SlurryTanks: [],
          PigmentTanks: [
            {
              Tank: '0b',
              stored: {
                pigmentName: 'mekanism:cyan',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      3:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          PigmentTanks: [],
          InfusionTanks: [],
          SlurryTanks: [],
          GasTanks: [
            {
              Tank: '0b',
              stored: {
                gasName: 'mekanism_extras:molten_thermonuclear',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      4:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          PigmentTanks: [],
          InfusionTanks: [],
          SlurryTanks: [],
          GasTanks: [
            {
              Tank: '0b',
              stored: {
                gasName: 'mekanism:antimatter',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      5:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          PigmentTanks: [],
          InfusionTanks: [],
          GasTanks: [],
          SlurryTanks: [
            {
              Tank: '0b',
              stored: {
                slurryName: 'mekanism:clean_osmium',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      6:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          PigmentTanks: [],
          InfusionTanks: [],
          GasTanks: [],
          SlurryTanks: [
            {
              Tank: '0b',
              stored: {
                slurryName: 'allthemodium:dirty_unobtainium',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      7:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          PigmentTanks: [],
          InfusionTanks: [],
          GasTanks: [],
          SlurryTanks: [
            {
              Tank: '0b',
              stored: {
                slurryName: 'allthemodium:dirty_unobtainium',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      8:Item.of('mekanism:ultimate_chemical_tank', {
        mekData: {
          PigmentTanks: [],
          InfusionTanks: [],
          SlurryTanks: [],
          GasTanks: [
            {
              Tank: '0b',
              stored: {
                gasName: 'mekanism_extras:polonium-208',
                amount: '8192000L'
              }
            }
          ]
        }
      }).strongNBT(),
      S: {"item": 'kubejs:the_greedy_completion'},
      F: {"item": 'nuclearcraft:supercooler'},
      E: {"item": 'forestry:engine_biogas'},
    },
    result: {
      item:'mekanism:creative_chemical_tank'
    }
  })
});
// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.