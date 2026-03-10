// priority: 0

//* ======================================== Item Tag
ServerEvents.tags('item', event => {
    
    var tagKey = 'longwinds:butterfly_tempt_items'
    var smalL_flowerTag = 'minecraft:small_flowers'
    var mushroomTag = 'forge:mushrooms'

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

        if (Item.exists(sealing_wax_palm)) { event.add(tagKey, sealing_wax_palm) }
        if (Item.exists(azalea)) { event.add(tagKey, azalea) }
        if (Item.exists(bell_flower)) { event.add(tagKey, bell_flower) }
        if (Item.exists(celosia)) { event.add(tagKey, celosia) }
        if (Item.exists(columbine)) { event.add(tagKey, columbine) }
        if (Item.exists(dahlia)) { event.add(tagKey, dahlia) }
        if (Item.exists(delphinium)) { event.add(tagKey, delphinium) }
        if (Item.exists(geranium)) { event.add(tagKey, geranium) }
        if (Item.exists(hydrangea)) { event.add(tagKey, hydrangea) }
        if (Item.exists(cypress)) { event.add(tagKey, cypress) }
        if (Item.exists(jasmine)) { event.add(tagKey, jasmine) }

        if (Item.exists(hawkweed)) { 
            event.add(tagKey, hawkweed) 
            event.add(smalL_flowerTag, hawkweed) 
        }
        if (Item.exists(marigold)) { 
            event.add(tagKey, marigold) 
            event.add(smalL_flowerTag, marigold) 
        }
        if (Item.exists(nemesia)) { 
            event.add(tagKey, nemesia) 
            event.add(smalL_flowerTag, nemesia) 
        }
        if (Item.exists(rose)) { 
            event.add(tagKey, rose) 
            event.add(smalL_flowerTag, rose) 
        }
    });

    global.PlantsForGreen.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.PlantsForWhite.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.PlantsForPurple.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.PlantsForYellow.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.PlantsForLightGray.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.PlantsForPink.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.PlantsForRed.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.PlantsForOrange.forEach(plant => {
        event.add(tagKey, plant)
    })

    global.Mushrooms.forEach(mushroom => {
        event.add(mushroomTag, mushroom)
    })

    event.add(tagKey, 'plantsmegapackreborn:mediterranean_sea_holly')

    event.add(tagKey, 'plantsmegapackreborn:pride_of_madeira')
    
    event.add(tagKey, 'plantsmegapackreborn:death_cap')

    event.add(tagKey, 'plantsmegapackreborn:woolly_gomphus')
    
    event.add(tagKey, 'plantsmegapackreborn:parasol')
    
    event.add(tagKey, 'plantsmegapackreborn:stinkhorn')

    event.add(tagKey, 'plantsmegapackreborn:wood_blewit')
    
    event.add(tagKey, 'plantsmegapackreborn:alpine_thistle')

})

//* ======================================== Block Tag 
ServerEvents.tags('block', event => {
    
    var longwindsTag = 'longwinds:butterfly_landable'
    var smalL_flowerTag = 'minecraft:small_flowers'
    var mushroomTag = 'forge:mushrooms'

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

        if (Item.exists(sealing_wax_palm)) { event.add(longwindsTag, sealing_wax_palm) }
        if (Item.exists(azalea)) { event.add(longwindsTag, azalea) }
        if (Item.exists(bell_flower)) { event.add(longwindsTag, bell_flower) }
        if (Item.exists(celosia)) { event.add(longwindsTag, celosia) }
        if (Item.exists(columbine)) { event.add(longwindsTag, columbine) }
        if (Item.exists(dahlia)) { event.add(longwindsTag, dahlia) }
        if (Item.exists(delphinium)) { event.add(longwindsTag, delphinium) }
        if (Item.exists(geranium)) { event.add(longwindsTag, geranium) }
        if (Item.exists(hydrangea)) { event.add(longwindsTag, hydrangea) }
        if (Item.exists(cypress)) { event.add(longwindsTag, cypress) }
        if (Item.exists(jasmine)) { event.add(longwindsTag, jasmine) }

        if (Item.exists(hawkweed)) { 
            event.add(longwindsTag, hawkweed) 
            event.add(smalL_flowerTag, hawkweed) 
        }
        if (Item.exists(marigold)) { 
            event.add(longwindsTag, marigold) 
            event.add(smalL_flowerTag, marigold) 
        }
        if (Item.exists(nemesia)) { 
            event.add(longwindsTag, nemesia) 
            event.add(smalL_flowerTag, nemesia) 
        }
        if (Item.exists(rose)) { 
            event.add(longwindsTag, rose) 
            event.add(smalL_flowerTag, rose) 
        }
    });

    global.PlantsForGreen.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.PlantsForWhite.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.PlantsForPurple.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.PlantsForYellow.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.PlantsForLightGray.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.PlantsForPink.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.PlantsForRed.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.PlantsForOrange.forEach(plant => {
        event.add(longwindsTag, plant)
    })

    global.Mushrooms.forEach(mushroom => {
        event.add(mushroomTag, mushroom)
    })

    event.add(longwindsTag, 'plantsmegapackreborn:mediterranean_sea_holly')

    event.add(longwindsTag, 'plantsmegapackreborn:pride_of_madeira')
    
    event.add(longwindsTag, 'plantsmegapackreborn:death_cap')

    event.add(longwindsTag, 'plantsmegapackreborn:woolly_gomphus')
    
    event.add(longwindsTag, 'plantsmegapackreborn:parasol')
    
    event.add(longwindsTag, 'plantsmegapackreborn:stinkhorn')

    event.add(longwindsTag, 'plantsmegapackreborn:wood_blewit')
    
    event.add(longwindsTag, 'plantsmegapackreborn:alpine_thistle')

})