export interface Civilization {
  id: string;
  name: string;
  leader: {
    name: string;
    fullName: string;
    imagePath: string;
  };
  uniqueUnit: string;
  uniqueBuilding: string;
  specialAbility: string;
}

export const civilizations: Civilization[] = [
  {
    id: 'america',
    name: 'America',
    leader: {
      name: 'Washington',
      fullName: 'George Washington',
      imagePath: '/src/assets/leaders/washington.png'
    },
    uniqueUnit: 'B17 Bomber',
    uniqueBuilding: 'Pentagon',
    specialAbility: 'Manifest Destiny'
  },
  {
    id: 'arabia',
    name: 'Arabia',
    leader: {
      name: 'Harun',
      fullName: 'Harun al-Rashid',
      imagePath: '/src/assets/leaders/harun.png'
    },
    uniqueUnit: 'Camel Archer',
    uniqueBuilding: 'Bazaar',
    specialAbility: 'Trade Caravans'
  },
  {
    id: 'aztec',
    name: 'Aztec',
    leader: {
      name: 'Montezuma',
      fullName: 'Montezuma I',
      imagePath: '/src/assets/leaders/montezuma.png'
    },
    uniqueUnit: 'Jaguar',
    uniqueBuilding: 'Floating Gardens',
    specialAbility: 'Sacrificial Captives'
  },
  {
    id: 'china',
    name: 'China',
    leader: {
      name: 'Wu Zetian',
      fullName: 'Wu Zetian',
      imagePath: '/src/assets/leaders/wu-zetian.png'
    },
    uniqueUnit: 'Chu-Ko-Nu',
    uniqueBuilding: 'Paper Maker',
    specialAbility: 'Art of War'
  },
  {
    id: 'egypt',
    name: 'Egypt',
    leader: {
      name: 'Ramesses',
      fullName: 'Ramesses II',
      imagePath: '/src/assets/leaders/ramesses.png'
    },
    uniqueUnit: 'War Chariot',
    uniqueBuilding: 'Burial Tomb',
    specialAbility: 'Monument Builders'
  },
  {
    id: 'england',
    name: 'England',
    leader: {
      name: 'Elizabeth',
      fullName: 'Elizabeth I',
      imagePath: '/src/assets/leaders/elizabeth.png'
    },
    uniqueUnit: 'Longbowman',
    uniqueBuilding: 'Ship of the Line',
    specialAbility: 'Sun Never Sets'
  },
  {
    id: 'france',
    name: 'France',
    leader: {
      name: 'Napoleon',
      fullName: 'Napoleon Bonaparte',
      imagePath: '/src/assets/leaders/napoleon.png'
    },
    uniqueUnit: 'Musketeer',
    uniqueBuilding: 'Chateau',
    specialAbility: 'Ancient Regime'
  },
  {
    id: 'germany',
    name: 'Germany',
    leader: {
      name: 'Bismarck',
      fullName: 'Otto von Bismarck',
      imagePath: '/src/assets/leaders/bismarck.png'
    },
    uniqueUnit: 'Panzer',
    uniqueBuilding: 'Hanse',
    specialAbility: 'Furor Teutonicus'
  },
  {
    id: 'greece',
    name: 'Greece',
    leader: {
      name: 'Alexander',
      fullName: 'Alexander the Great',
      imagePath: '/src/assets/leaders/alexander.png'
    },
    uniqueUnit: 'Companion Cavalry',
    uniqueBuilding: 'Acropolis',
    specialAbility: 'Hellenic League'
  },
  {
    id: 'india',
    name: 'India',
    leader: {
      name: 'Gandhi',
      fullName: 'Gandhi',
      imagePath: '/src/assets/leaders/gandhi.png'
    },
    uniqueUnit: 'War Elephant',
    uniqueBuilding: 'Mughal Fort',
    specialAbility: 'Population Growth'
  },
  {
    id: 'japan',
    name: 'Japan',
    leader: {
      name: 'Nobunaga',
      fullName: 'Oda Nobunaga',
      imagePath: '/src/assets/leaders/nobunaga.png'
    },
    uniqueUnit: 'Samurai',
    uniqueBuilding: 'Zero',
    specialAbility: 'Bushido'
  },
  {
    id: 'mongolia',
    name: 'Mongolia',
    leader: {
      name: 'Genghis',
      fullName: 'Genghis Khan',
      imagePath: '/src/assets/leaders/genghis.png'
    },
    uniqueUnit: 'Keshik',
    uniqueBuilding: 'Ger',
    specialAbility: 'Mongol Terror'
  },
  {
    id: 'rome',
    name: 'Rome',
    leader: {
      name: 'Augustus',
      fullName: 'Augustus Caesar',
      imagePath: '/src/assets/leaders/augustus.png'
    },
    uniqueUnit: 'Legion',
    uniqueBuilding: 'Ballista',
    specialAbility: 'The Glory of Rome'
  },
  {
    id: 'russia',
    name: 'Russia',
    leader: {
      name: 'Catherine',
      fullName: 'Catherine',
      imagePath: '/src/assets/leaders/catherine.png'
    },
    uniqueUnit: 'Cossack',
    uniqueBuilding: 'Krepost',
    specialAbility: 'Siberian Riches'
  },
  {
    id: 'siam',
    name: 'Siam',
    leader: {
      name: 'Ramkhamhaeng',
      fullName: 'Ramkhamhaeng',
      imagePath: '/src/assets/leaders/ramkhamhaeng.png'
    },
    uniqueUnit: 'Naresuan\'s Elephant',
    uniqueBuilding: 'Wat',
    specialAbility: 'Father Governs Children'
  },
  {
    id: 'songhai',
    name: 'Songhai',
    leader: {
      name: 'Askia',
      fullName: 'Askia',
      imagePath: '/src/assets/leaders/askia.png'
    },
    uniqueUnit: 'Mandekalu Cavalry',
    uniqueBuilding: 'Mud Pyramid Mosque',
    specialAbility: 'River Warlord'
  },
  {
    id: 'spain',
    name: 'Spain',
    leader: {
      name: 'Isabella',
      fullName: 'Isabella',
      imagePath: '/src/assets/leaders/isabella.png'
    },
    uniqueUnit: 'Conquistador',
    uniqueBuilding: 'Tercio',
    specialAbility: 'Seven Cities of Gold'
  },
  {
    id: 'celts',
    name: 'Celts',
    leader: {
      name: 'Boudicca',
      fullName: 'Boudicca',
      imagePath: '/src/assets/leaders/boudicca.png'
    },
    uniqueUnit: 'Pictish Warrior',
    uniqueBuilding: 'Ceilidh Hall',
    specialAbility: 'Druidic Lore'
  }
]; 