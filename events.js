const worldEventPools = {

  act1: [

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
        {label:"Strike It",tag:"Reckoning",effect:"Roll 1d6. Success: +3 Dragon Coins. Failure: lose 9 Metal."}
      ]
    },

    {
      title:"The Last Descent ⚖️",
      text:"It offers no choices. Only a mirror.",
      options:[
        {label:"Judgment",tag:"Judgment",effect:"Faction with highest setup loses 2 units. Others gain 1 Rare Potion."}
      ]
    },

    {
      title:"Bloodied Field",
      text:"The dead outnumber the living.",
      options:[
        {label:"Bury the Elect Few",tag:"Remembrance",effect:"All factions gain 1 Relic and +1 Campaign Point."},
        {label:"Scavenge the Field",tag:"Greed",effect:"Each faction gains 1 Blueprint."}
      ]
    },

    {
      title:"The Golden Collapse",
      text:"A city-sized vault buckles deep below.",
      options:[
        {label:"Take the Gold",tag:"Inflation",effect:"All factions gain 14 Gold. Presence +2."}
      ]
    },

    {
      title:"The Vault That Should Not Open",
      text:"A single lock. Every key fits.",
      options:[
        {label:"Open It Together",tag:"Temptation",effect:"Split 2 Mythic Rewards. Spawn World Boss."},
        {label:"Seal It Forever",tag:"Restraint",effect:"Presence -3. Lose access to Mythic Rewards."}
      ]
    },

    {
      title:"The Map Is Redrawn",
      text:"Old paths collapse. New ones open.",
      options:[
        {label:"Stabilize",tag:"Order",effect:"All factions gain +5 Food."},
        {label:"Let It Shift",tag:"Chaos",effect:"Remove a central POI. Most Dragon Coins +1."}
      ]
    },

    {
      title:"The Blood Moon Ascends",
      text:"The red moon rises and the dead answer its call.",
      options:[
        {label:"United Circle",tag:"Unity",effect:"All contribute 5 Food. Gain 1 Relic each."},
        {label:"Reckless Stand",tag:"Blood",effect:"All gain +20 Gold. Spawn Table Beast."}
      ]
    },

    {
      title:"The Storm Breaks",
      text:"The sky no longer tolerates defiance.",
      options:[
        {label:"Seek Shelter",tag:"Caution",effect:"All factions skip 1 round."},
        {label:"Press On",tag:"Defiance",effect:"Ignore terrain penalties. Spawn Stormward Avatar."}
      ]
    },

    {
      title:"Oaths Are Tested",
      text:"Words spoken in iron are tested by fire.",
      options:[
        {label:"Honour the Oath",tag:"Honor",effect:"Lose 5 Gold."},
        {label:"Exploit the Moment",tag:"Greed",effect:"Gain +10 Gold. Spawn Oathbreaker Behemoth."}
      ]
    },

    {
      title:"The Council of Shades",
      text:"Ancient spirits demand tribute — or punish all for silence.",
      options:[
        {label:"Tribute",tag:"Submission",effect:"Lose 10 Gold. Gain 1 Relic."},
        {label:"Defiance",tag:"Defiance",effect:"Spawn keyword-hunter targeting faction with most keywords."}
      ]
    },

    {
      title:"The Broken Celestial Clock",
      text:"A cosmic mechanism fractures, twisting time.",
      options:[
        {label:"Anchor Time",tag:"Control",effect:"Skip 1 Movement. Gain 1 Potion."},
        {label:"Bend Time",tag:"Distortion",effect:"Extra Attack next Phase. Lose 10 Food."}
      ]
    },

    {
      title:"The Veil Thins",
      text:"Secrets become weapons.",
      options:[
        {label:"Reveal and Steal",tag:"Exposure",effect:"Reveal 1 resource and steal 5 of it from chosen faction."}
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
      title:"The First Betrayal",
      text:"The caves replay a moment that hasn’t happened yet. Everyone sees it differently.",
      options:[
        {label:"Name the Traitor",tag:"Fracture",effect:"Choose a faction. They gain +1 Attack Action Upgrade."},
        {label:"Deny the Vision",tag:"Fracture",effect:"Cancel one future Table-Wide event (all must agree). Presence +2."}
      ]
    },

    {
      title:"The Cave Remembers the Sun",
      text:"The underworld recalls light — and wants it back.",
      options:[
        {label:"Night Falls",tag:"Reversal",effect:"Nighttime triggers for this mission and the next. Caves gain +2 Stability."}
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
        {label:"Stand Proud",tag:"Pride",effect:"Gain +10 Gold. Spawn keyword-hunter targeting one of your keywords."}
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
    }

  ],

  act2: [],
  act3: []

};
