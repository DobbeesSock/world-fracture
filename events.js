const worldEventPools = {

  act1: [

    {
      title:"The Shared Grave ⚖️",
      text:"Every faction’s banners hang here — old, tattered, impossible.",
      options:[
        {
          label:"Honor the Dead",
          tag:"Reverence",
          effect:"All factions gain +1 Relic."
        },
        {
          label:"Loot the Graves",
          tag:"Desecration",
          effect:"Each faction gains 1 Chest Card."
        },
        {
          label:"Burn the Banners",
          tag:"Defiance",
          effect:"Each faction loses 3 Metal."
        }
      ]
    },

    {
      title:"The Hunger Beneath Empires ⚖️",
      text:"The ground pulses across the entire map. It feeds on excess.",
      options:[
        {
          label:"Feed It",
          tag:"Appeasement",
          effect:"Each faction sacrifices resources."
        },
        {
          label:"Starve It",
          tag:"Greed",
          effect:"Each faction gains +14 Gold or +14 Food."
        },
        {
          label:"Strike It",
          tag:"Reckoning",
          effect:"Roll 1d6. Success: +3 Dragon Coins. Failure: lose Metal."
        }
      ]
    },

    {
      title:"The Map Is Redrawn",
      text:"Old paths collapse. New ones open.",
      options:[
        {
          label:"Stabilize",
          tag:"Order",
          effect:"All factions gain +5 Food."
        },
        {
          label:"Let It Shift",
          tag:"Chaos",
          effect:"Remove a POI and replace with Hazardous Terrain."
        }
      ]
    },

    {
      title:"The Blood Moon Ascends",
      text:"The red moon rises and the dead answer its call.",
      options:[
        {
          label:"Unite",
          tag:"Unity",
          effect:"All contribute 5 Food. Gain 1 Relic each."
        },
        {
          label:"Reckless Stand",
          tag:"Blood",
          effect:"All gain +20 Gold. Spawn Table Beast."
        }
      ]
    }

  ],

  act2: [],
  act3: []

};
