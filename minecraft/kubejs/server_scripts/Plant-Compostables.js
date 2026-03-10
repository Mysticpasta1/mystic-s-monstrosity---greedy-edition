// priority: 0

//* ======================================== Compostable Recipes
ServerEvents.compostableRecipes(event => {
    
    Color.DYE.forEach(color => {
        var sealing_wax_palm = 'plantsmegapackreborn:'+color+'_sealing_wax_palm'
        var azalea = 'plantsmegapackreborn:'+color+'_azalea'
        var bell_flower = 'plantsmegapackreborn:'+color+'_bell_flower'
        var celosia = 'plantsmegapackreborn:'+color+'_celosia'
        var columbine = 'plantsmegapackreborn:'+color+'_columbine'
        var dahlia = 'plantsmegapackreborn:'+color+'_dahlia'
        var delphinium = 'plantsmegapackreborn:'+color+'_delphinium'
        var hawkweed = 'plantsmegapackreborn:'+color+'_hawkweed'
        var geranium = 'plantsmegapackreborn:'+color+'_geranium'
        var hydrangea = 'plantsmegapackreborn:'+color+'_hydrangea'
        var marigold = 'plantsmegapackreborn:'+color+'_marigold'
        var nemesia = 'plantsmegapackreborn:'+color+'_nemesia'
        var rose = 'plantsmegapackreborn:'+color+'_rose'
        var cypress = 'plantsmegapackreborn:'+color+'_cypress'
        var jasmine = 'plantsmegapackreborn:'+color+'_jasmine'

        if (Item.exists(sealing_wax_palm)) { event.add(sealing_wax_palm, 0.3) }
        if (Item.exists(azalea)) { event.add(azalea, 0.3) }
        if (Item.exists(bell_flower)) { event.add(bell_flower, 0.3) }
        if (Item.exists(celosia)) { event.add(celosia, 0.3) }
        if (Item.exists(columbine)) { event.add(columbine, 0.3) }
        if (Item.exists(dahlia)) { event.add(dahlia, 0.3) }
        if (Item.exists(delphinium)) { event.add(delphinium, 0.3) }
        if (Item.exists(geranium)) { event.add(geranium, 0.3) }
        if (Item.exists(hawkweed)) { event.add(hawkweed, 0.3) }
        if (Item.exists(hydrangea)) { event.add(hydrangea, 0.3) }
        if (Item.exists(marigold)) { event.add(marigold, 0.3) }
        if (Item.exists(nemesia)) { event.add(nemesia, 0.3) }
        if (Item.exists(rose)) { event.add(rose, 0.3) }
        if (Item.exists(cypress)) { event.add(cypress, 0.3) }
        if (Item.exists(jasmine)) { event.add(jasmine, 0.3) }
    });

    global.PlantsForGreen.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.PlantsForWhite.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.PlantsForPurple.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.PlantsForYellow.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.PlantsForLightGray.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.PlantsForPink.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.PlantsForRed.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.PlantsForOrange.forEach(plant => {
        event.add(plant, 0.3)
    })

    global.Mushrooms.forEach(mushroom => {
        event.add(mushroom, 0.3)
    })

    event.add('plantsmegapackreborn:mediterranean_sea_holly', 0.3)

    event.add('plantsmegapackreborn:pride_of_madeira', 0.3)
    
    event.add('plantsmegapackreborn:death_cap', 0.3)

    event.add('plantsmegapackreborn:woolly_gomphus', 0.3)
    
    event.add('plantsmegapackreborn:parasol', 0.3)
    
    event.add('plantsmegapackreborn:stinkhorn', 0.3)

    event.add('plantsmegapackreborn:wood_blewit', 0.3)
    
    event.add('plantsmegapackreborn:alpine_thistle', 0.3)

})