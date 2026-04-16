GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    const TagPrefix = Java.loadClass('com.gregtechceu.gtceu.api.data.tag.TagPrefix');
    const stonesToRemove = ['diorite', 'andesite', 'granite', 'tuff', 'deepslate'];
    stonesToRemove.forEach(stone => {
        let prefix = TagPrefix.get(`ore_${stone}`);
        if (prefix != null) {
            prefix.setSecondaryMaterial(null);
        }
    });
});