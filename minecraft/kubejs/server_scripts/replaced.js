ServerEvents.recipes(neofastftl => {
neofastftl.replaceInput(
  { output: 'create:hose_pulley' }, // Arg 1: the filter
  'create:copper_casing',            // Arg 2: the item to replace
  'mekanism:creative_fluid_tank'         // Arg 3: the item to replace it with
)
})