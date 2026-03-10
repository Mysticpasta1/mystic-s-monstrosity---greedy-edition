ServerEvents.tags('item', event => {
    if (Platform.isLoaded('quark')) {
        event.removeAll('quark:stone_tool_materials')
        event.add('quark:stone_tool_materials', '#minecraft:stone_tool_materials')
    }
})
