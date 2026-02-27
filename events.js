const worldEventPools = {

act1: [

/* ================= CORE EVENTS ================= */

{
title:"The World Anchor ⚖️",
text:"A titanic spike of stone plunges endlessly downward.",
options:[
{label:"Reinforce",tag:"Order",effect:"All factions gain 1 Relic."},
{label:"Damage",tag:"Profit",effect:"Spawn a World Boss."}
]
},

{
title:"The Silent Contract ⚖️",
text:"A stone table waits for signatures.",
options:[
{label:"Sign Together",tag:"Alliance",effect:"Ignore hostility once this campaign."},
{label:"Refuse",tag:"Independence",effect:"Gain 2 Legendary Potions."}
]
},

{
title:"The Shared Grave ⚖️",
text:"Every faction’s banners hang here — old, tattered, impossible.",
options:[
{label:"Honor the Dead",tag:"Reverence",effect:"All factions gain 1 Relic."},
{label:"Loot the Graves",tag:"Desecration",effect:"Each faction gains 1 Chest Card."},
{label:"Burn the Banners",tag:"Defiance",effect:"Each faction loses 3 Metal."}
]
},

{
title:"The Hunger Beneath Empires ⚖️",
text:"The ground pulses across the entire map. It feeds on excess.",
options:[
{label:"Feed It",tag:"Appeasement",effect:"Each faction sacrifices 15 resources."},
{label:"Starve It",tag:"Greed",effect:"Each faction gains +14 Gold or +14 Food."},
{label:"Strike It",tag:"Reckoning",effect:"Roll 1d6. 4–6: +3 Dragon Coins. 1–3: lose 9 Metal."}
]
},

{
title:"The Last Descent ⚖️",
text:"It offers no choices. Only a mirror.",
options:[
{label:"Judgment",tag:"Judgment",effect:"Faction with highest setup loses 2 units. All others gain 1 Rare Potion."}
]
},

{
title:"The First Betrayal",
text:"The caves replay a moment that hasn’t happened yet. Everyone sees it differently.",
options:[
{label:"Name the Traitor",tag:"Fracture",effect:"Choose a faction. They gain +1 Attack Action Upgrade."},
{label:"Deny the Vision",tag:"Fracture",effect:"Cancel one future Table-Wide event (all must agree). Presence +2."}
]
},

{
title:"The Cave Remembers the Sun",
text:"The underworld recalls light—and wants it back.",
options:[
{label:"Night Falls",tag:"Reversal",effect:"Nighttime triggers this mission & next mission. Caves gain +2 Stability."}
]
},

{
title:"The World Demands Tribute",
text:"Supply lines strain as the land itself exacts a cost.",
options:[
{label:"Pay the Land",tag:"Order",effect:"Each faction pays 10 Food."},
{label:"Refuse",tag:"Defiance",effect:"Spawn The Hunger of Many at the most contested POI. It immediately acts."}
]
},

{
title:"Banners Draw Blood",
text:"So many standards fly that war can no longer be ignored.",
options:[
{label:"Yield",tag:"Submission",effect:"Lose 2 Keywords of your choice."},
{label:"Stand Proud",tag:"Pride",effect:"Gain +10 Gold. Spawn keyword-hunting creature targeting one of your keywords."}
]
},

{
title:"The Champion Calls",
text:"A challenge rings out. Silence is also an answer.",
options:[
{label:"Commit",tag:"Glory",effect:"Send 1 unit to the Arena."},
{label:"Decline",tag:"Caution",effect:"Gain +5 Gold."}
]
},

{
title:"The Council Convenes",
text:"Commanders are summoned. Power shifts in the open.",
options:[
{label:"Send Commander",tag:"Influence",effect:"Gain +10 Gold. Most present gains 1 Blueprint. Others gain 1 Legendary Potion."},
{label:"Abstain",tag:"Neutral",effect:"No effect."}
]
},

{
title:"Rumours of Betrayal",
text:"Something is coming. No one agrees on what.",
options:[
{label:"Reveal Reserves",tag:"Transparency",effect:"Lose 10 Gold. Gain +1 Mythic Potion."},
{label:"Conceal Assets",tag:"Deception",effect:"Gain +10 Gold. Spawn keyword-hunting creature."}
]
},

/* ================= ENVIRONMENTAL EVENTS ================= */

{
title:"The Ground Trembles",
text:"Rumbles erupt from below and ripple across the realm.",
options:[
{label:"Stabilize the Fault Lines",tag:"Order",effect:"Table pays 15 Metal split. All factions gain +15 Food."},
{label:"Feed the Rupture",tag:"Chaos",effect:"Spawn a World Boss. Most Dragon Coins gains +2."}
]
},

{
title:"The Whispers of Time",
text:"Echoes from what has been tug at reality.",
options:[
{label:"Listen",tag:"Insight",effect:"Increase World Tension +1."},
{label:"Silence",tag:"Control",effect:"Lose 10 Gold. All factions gain +1 Dragon Coin."}
]
},

{
title:"Shivering Winds",
text:"Cold gusts rob supplies.",
options:[
{label:"Lose Food",tag:"Suffering",effect:"All factions lose 15 Food."},
{label:"Delay Movement",tag:"Delay",effect:"Skip all Movement next Phase."},
{label:"Freeze Weapons",tag:"Weakness",effect:"All unit attacks deal –2 damage next Phase."}
]
},

{
title:"Fading Light",
text:"Vision dims and secrecy looms.",
options:[
{label:"Hold Camp",tag:"Caution",effect:"Skip a unit action. Gain +7 Gold."},
{label:"Press On",tag:"Resolve",effect:"All units move –3 next Phase."}
]
},

{
title:"Rumbling Nearby",
text:"A tremor shakes the map.",
options:[
{label:"Endure",tag:"Omen",effect:"Presence +2."}
]
},

{
title:"Cries in the Dark",
text:"Something hunts in the shadows.",
options:[
{label:"Face the Dark",tag:"Risk",effect:"Roll 1d6. 4–6 gain 1 Random Potion. 1–3 lose 10 Gold."}
]
},

{
title:"Market Fluctuation",
text:"Trade routes tighten then boom.",
options:[
{label:"Profit",tag:"Wealth",effect:"Each faction gains +10 Gold."}
]
},

/* ================= LATE CHAOS EVENTS ================= */

{
title:"The Black Mirror Crevasse",
text:"A jagged rift opens, reflecting not faces—but intentions.",
options:[
{label:"Ally",tag:"Trust",effect:"Gain 1 Random Potion. If all Ally, all gain 1 Relic."},
{label:"Betray",tag:"Betrayal",effect:"Steal 10 Gold from an Ally. If 2+ Betray, spawn keyword-hunter."}
]
},

{
title:"The Gnawing Deep",
text:"Something hungry tunnels upward.",
options:[
{label:"Feed the Deep",tag:"Appeasement",effect:"Lose 10 Food. Gain +10 Gold."},
{label:"Starve It",tag:"Defiance",effect:"After reveal, each faction that Starved loses 1 unit."}
]
},

{
title:"The Echoing Pit of Oaths",
text:"Ancient promises claw their way back.",
options:[
{label:"Honor Old Oaths",tag:"Honor",effect:"Lose 5 Gold. Gain +10 Food."},
{label:"Break Them",tag:"Betrayal",effect:"Gain +20 Gold. Spawn Oathbreaker Behemoth."}
]
},

{
title:"The Vein of Living Metal",
text:"A raw seam of shifting metal splits the earth.",
options:[
{label:"Contribute Metal",tag:"Investment",effect:"Highest gains +2 Blueprints. Second gains +20 Gold."},
{label:"Contribute Nothing",tag:"Scavenger",effect:"Gain Scavenger keyword. Contributors lose 5 Metal."}
]
},

{
title:"The Throneless Hollow",
text:"A buried chamber where no ruler survived.",
options:[
{label:"Offer the Commander",tag:"Sacrifice",effect:"Remove Commander. Gain +2 Dragon Coins."},
{label:"Protect the Commander",tag:"Pride",effect:"Other factions may immediately attack that Commander."}
]
},

{
title:"The Fractured Alliance",
text:"A binding pact shatters.",
options:[
{label:"Bind Together",tag:"Unity",effect:"All gain +1 Dragon Coin. Presence –2."},
{label:"Break Away",tag:"Betrayal",effect:"Steal 10 Gold. Presence +1 per Break."}
]
},

{
title:"The Resource War",
text:"Scarcity spreads.",
options:[
{label:"Hoard",tag:"Greed",effect:"Gain +15 Gold."},
{label:"Share",tag:"Unity",effect:"Sharers gain +10 Food."},
{label:"Seize",tag:"Aggression",effect:"Steal 10 Food. If 2+ Seize, spawn Conflict Beast."}
]
},

{
title:"The Tithe of Power",
text:"The world demands sacrifice.",
options:[
{label:"Sacrifice Unit",tag:"Sacrifice",effect:"Gain 1 Relic."},
{label:"Sacrifice Gold",tag:"Payment",effect:"Lose 15 Gold."},
{label:"Refuse",tag:"Defiance",effect:"Lose 1 Dragon Coin. If none sacrifice, spawn World Devourer."}
]
},

{
title:"The Ascension Offer",
text:"A single faction may ascend.",
options:[
{label:"Vote",tag:"Power",effect:"Highest votes gains +2 Dragon Coins and loses 15 Food."}
]
},

{
title:"The Shared Burden",
text:"A catastrophe looms.",
options:[
{label:"Contribute Gold",tag:"Unity",effect:"If total ≥50 prevent disaster and gain 1 Relic. If not, spawn Cataclysm Titan."}
]
},

{
title:"The Claiming",
text:"A central POI destabilizes.",
options:[
{label:"Bid Food",tag:"Ambition",effect:"Highest bidder claims POI and gains +2 Dragon Coins."}
]
},

{
title:"The Shadow Exchange",
text:"A secret trade is offered.",
options:[
{label:"Trade",tag:"Alliance",effect:"Mutual trade: both gain 1 Relic."},
{label:"Sabotage",tag:"Betrayal",effect:"Steal 1 Dragon Coin. Mutual sabotage spawns Shadow Hunter."}
]
},

{
title:"The Final Rift",
text:"The world cracks open.",
options:[
{label:"Fortify",tag:"Defense",effect:"+20 Food. Lose 1 Dragon Coin."},
{label:"Expand",tag:"Ambition",effect:"+1 POI Influence. Presence +1."},
{label:"Exploit",tag:"Greed",effect:"+20 Gold. Spawn creature targeting you."}
]
},

{
title:"The Reckoning Vote",
text:"A faction must fall.",
options:[
{label:"Vote to Weaken",tag:"Judgment",effect:"Most votes lose 1 Dragon Coin and 1 unit. If unanimous, they gain 1 Relic."}
]
},

{
title:"The World Decides",
text:"The world judges alignment.",
options:[
{label:"Declare Order",tag:"Order",effect:"Majority gains +1 Dragon Coin."},
{label:"Declare Freedom",tag:"Freedom",effect:"Majority gains +1 Dragon Coin."},
{label:"Declare Profit",tag:"Profit",effect:"Majority gains +1 Dragon Coin. If evenly split, Presence +3."}
]
}

],

act2: [],
act3: []

};
