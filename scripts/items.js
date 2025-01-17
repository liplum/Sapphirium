const leadedCopper = extend(Item, "leaded-copper", {
cost: 0.9,
color: Color.valueOf("ffe18f")
});
const iceCube = extend(Item, "ice-cube", {
lowPriority: true
});
const cryoCube = extend(Item, "cryocube", {});
const ledoniteCube = extend(Item, "ledonite-cube", {});
const stone = extend(Item, "stone", {});
const creostone = extend(Item, "creostone", {});
const creosand = extend(Item, "creosand", {
lowPriority: true
});
const globium = extend(Item, "globium", {});
const tinorium = extend(Item, "tinorium", {
cost: 1.2,
flammability: 1.09,
radioactivity: 0.7,
explosiveness: 0.4
});
const granate = extend(Item, "granate", {});
const emerald = extend(Item, "emerald", {
cost: 1.6,
color: Color.valueOf("84f591")
});
const sapphire = extend(Item, "sapphire", {
cost: 1.4,
color: Color.valueOf("8ba9e8"),
hardness: 3,
healthScaling: 0.7
});
const lightCrystall = extend(Item, "light-crystall", {
cost: 2,
color: Color.valueOf("ededed")
});
const surgeStone = extend(Item, "surge-stone", {});
const chgStick = extend(Item, "charged-stick", {});
const chgLead = extend(Item, "charged-lead", {});
const chgIngot = extend(Item, "charged-ingot", {});
const chgCyl = extend(Item, "charged-cylinder", {});

Items.serpuloItems.addAll(Items.scrap, Items.copper, Items.lead, Items.graphite, Items.coal, Items.titanium, Items.thorium,
Items.silicon, Items.plastanium, Items.surgeAlloy, Items.sporePod, Items.phaseFabric, Items.sand, Items.blastCompound, Items.pyratite, Items.metaglass,
leadedCopper, iceCube, cryoCube, ledoniteCube, globium, tinorium, lightCrystall, emerald, surgeStone, chgStick, chgLead, chgIngot, chgCyl, granate, stone, creostone, creosand);

Items.erekirItems.addAll(Items.beryllium, Items.tungsten, Items.silicon, Items.phaseFabric, Items.silicon, Items.thorium, Items.sand, Items.oxide, Items.carbide, Items.fissileMatter, Items.dormantCyst, sapphire, emerald, granate, stone, creostone);

module.exports = {
surgeStone: surgeStone,
creostone: creostone,
globium: globium,
granate: granate,
sapphire: sapphire,
}