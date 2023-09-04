// Bakerloo Line: 25 stations
// Central Line: 48 stations
// Circle Line: 35 stations
// District Line: 60 stations
// Hammersmith & City Line: 29 stations
// Jubilee Line: 27 stations
// Metropolitan Line: 35 stations
// Northern Line: 50 stations
// Piccadilly Line: 53 stations
// Victoria Line: 16 stations
// Waterloo & City Line: 2 stations

const bakerloo = [
  "Harrow & Wealdstone",
  "Kenton",
  "South Kenton",
  "North Wembley",
  "Wembley Central",
  "Stonebridge Park",
  "Harlesden",
  "Willesden Junction",
  "Kensal Green",
  "Queen's Park",
  "Kilburn Park",
  "Maida Vale",
  "Warwick Avenue",
  "Paddington",
  "Edgware Road",
  "Marylebone",
  "Baker Street",
  "Regent's Park",
  "Oxford Circus",
  "Piccadilly Circus",
  "Charing Cross",
  "Embankment",
  "Waterloo",
  "Lambeth North",
  "Elephant & Castle"
] // 25

const central = [
  "West Ruislip",
  "Ruislip Gardens",
  "South Ruislip",
  "Northolt",
  "Greenford",
  "Perivale",
  "Hanger Lane",
  "North Acton",
  "West Acton",
  "East Acton",
  "White City",
  "Shepherds Bush",
  "Holland Park",
  "Notting Hill Gate",
  "Queensway",
  "Lancaster Gate",
  "Marble Arch",
  "Bond Street",
  "Oxford Circus",
  "Tottenham Court Road",
  "Holborn",
  "Chancery Lane",
  "St Pauls",
  "Bank",
  "Liverpool Street",
  "Bethnal Green",
  "Mile End",
  "Stratford",
  "Leyton",
  "Leytonstone",
  "Snaresbrook",
  "South Woodford",
  "Woodford",
  "Buckhurst Hill",
  "Loughton",
  "Debden",
  "Theydon Bois",
  "Epping",
  "Roding Valley",
  "Chigwell",
  "Grange Hill",
  "Hainault",
  "Fairlop",
  "Barkingside",
  "Newbury Park",
  "Gants Hill",
  "Redbridge",
  "Wanstead"
]; // 48

const circle = [
  "Hammersmith",
  "Goldhawk Road",
  "Shepherds Bush Market",
  "Wood Lane",
  "Latimer Road",
  "Ladbroke Grove",
  "Westbourne Park",
  "Royal Oak",
  "Paddington",
  "Edgware Road",
  "Baker Street",
  "Great Portland Street",
  "Euston Square",
  "Kings Cross St Pancras",
  "Farringdon",
  "Barbican",
  "Moorgate",
  "Liverpool Street",
  "Aldgate",
  "Tower Hill",
  "Monument",
  "Cannon Street",
  "Mansion House",
  "Blackfriars",
  "Temple",
  "Embankment",
  "Westminster",
  "St James's Park",
  "Victoria St",
  "Sloane Square",
  "South Kensington",
  "Gloucester Road",
  "High Street Kensington",
  "NottingHill Gate",
  "Bayswater"
]; // 35

const district = [
  "ActonTown",
  "AldgateEast",
  "Bromley-by-Bow",
  "Becontree",
  "Blackfriars",
  "Barking",
  "BaronsCourt",
  "BowRoad",
  "Bayswater",
  "CannonStreet",
  "ChiswickPark",
  "DagenhamEast",
  "DagenhamHeathway",
  "EalingBroadway",
  "EalingCommon",
  "EarlsCourt",
  "EastHam",
  "Embankment",
  "ElmPark",
  "EastPutney",
  "EdgwareRoad(CircleLine)",
  "FulhamBroadway",
  "Gunnersbury",
  "GloucesterRoad",
  "Hornchurch",
  "Hammersmith(Dist&PiccLine)",
  "HighStreetKensington",
  "Kensington(Olympia)",
  "KewGardens",
  "MileEnd",
  "Monument",
  "MansionHouse",
  "NottingHillGate",
  "Paddington",
  "Plaistow",
  "ParsonsGreen",
  "PutneyBridge",
  "Richmond",
  "RavenscourtPark",
  "StamfordBrook",
  "Southfields",
  "StepneyGreen",
  "StJamessPark",
  "SouthKensington",
  "SloaneSquare",
  "Temple",
  "TurnhamGreen",
  "TowerHill",
  "UpminsterBridge",
  "UptonPark",
  "Upminster",
  "Upney",
  "VictoriaSt",
  "WestBrompton",
  "WestHam",
  "Wimbledon",
  "WimbledonPark",
  "WestKensington",
  "Whitechapel",
  "Westminster"
] // 60

const hammersmithCity = [
  "AldgateEast",
  "Bromley-by-Bow",
  "Barbican",
  "Barking",
  "BakerStreet",
  "BowRoad",
  "EastHam",
  "EdgwareRoad(CircleLine)",
  "EustonSquare",
  "Farringdon",
  "GoldhawkRoad",
  "GreatPortlandStreet",
  "Hammersmith(H&CLine)",
  "KingsCrossStPancras",
  "LadbrokeGrove",
  "LatimerRoad",
  "LiverpoolStreet",
  "MileEnd",
  "Moorgate",
  "Paddington(H&CLine)-Underground",
  "Plaistow",
  "RoyalOak",
  "ShepherdsBushMarket",
  "StepneyGreen",
  "UptonPark",
  "WestHam",
  "WoodLane",
  "Whitechapel",
  "WestbournePark"
] // 29

const jubilee = [
  "Bermondsey",
  "BondStreet",
  "BakerStreet",
  "CanningTown",
  "CanonsPark",
  "CanadaWater",
  "CanaryWharf",
  "DollisHill",
  "FinchleyRoad",
  "GreenPark",
  "Kilburn",
  "Kingsbury",
  "LondonBridge",
  "Neasden",
  "NorthGreenwich",
  "Queensbury",
  "StJohnsWood",
  "Stratford",
  "Stanmore",
  "SwissCottage",
  "Southwark",
  "WestHam",
  "WestHampstead",
  "WillesdenGreen",
  "Waterloo",
  "Westminster",
  "WembleyPark"
] // 27

const metropolitan = [
  "Aldgate",
  "Amersham",
  "Barbican",
  "BakerStreet",
  "Chalfont&Latimer",
  "Chesham",
  "Croxley",
  "Chorleywood",
  "Eastcote",
  "EustonSquare",
  "Farringdon",
  "FinchleyRoad",
  "GreatPortlandStreet",
  "Hillingdon",
  "Harrow-on-the-Hill",
  "Ickenham",
  "KingsCrossStPancras",
  "LiverpoolStreet",
  "Moorgate",
  "MoorPark",
  "NorthHarrow",
  "NorthwickPark",
  "Northwood",
  "NorthwoodHills",
  "Pinner",
  "PrestonRoad",
  "Rickmansworth",
  "RuislipManor",
  "Ruislip",
  "RaynersLane",
  "Uxbridge",
  "Watford",
  "WestHarrow",
  "WillesdenGreen",
  "WembleyPark"
] // 35

const northern = [
  "Archway",
  "Angel",
  "Balham",
  "Bank",
  "Borough",
  "BurntOak",
  "BrentCross",
  "BelsizePark",
  "ChalkFarm",
  "CharingCross",
  "Colindale",
  "ClaphamCommon",
  "ClaphamNorth",
  "ClaphamSouth",
  "ColliersWood",
  "CamdenTown",
  "Elephant&Castle",
  "EastFinchley",
  "Edgware",
  "Embankment",
  "Euston",
  "FinchleyCentral",
  "GoodgeStreet",
  "GoldersGreen",
  "HighBarnet",
  "HendonCentral",
  "Highgate",
  "Hampstead",
  "Kennington",
  "KentishTown",
  "KingsCrossStPancras",
  "LondonBridge",
  "LeicesterSquare",
  "Morden",
  "Moorgate",
  "MillHillEast",
  "MorningtonCrescent",
  "OldStreet",
  "Oval",
  "Stockwell",
  "SouthWimbledon",
  "Totteridge&Whetstone",
  "TootingBec",
  "TootingBroadway",
  "TottenhamCourtRoad",
  "TufnellPark",
  "WestFinchley",
  "Waterloo",
  "WoodsidePark",
  "WarrenStreet"
] // 50

const piccadilly = [
  "ActonTown",
  "Alperton",
  "ArnosGrove",
  "Arsenal",
  "BoundsGreen",
  "BostonManor",
  "BaronsCourt",
  "CaledonianRoad",
  "CoventGarden",
  "Cockfosters",
  "Eastcote",
  "EalingCommon",
  "EarlsCourt",
  "FinsburyPark",
  "GreenPark",
  "GloucesterRoad",
  "Holborn",
  "Hillingdon",
  "HattonCross",
  "HydeParkCorner",
  "HeathrowTerminal4",
  "HeathrowTerminal5",
  "HeathrowTerminals2&3",
  "Hammersmith(Dist&PiccLine)",
  "HounslowCentral",
  "HounslowEast",
  "HounslowWest",
  "HollowayRoad",
  "Ickenham",
  "Knightsbridge",
  "KingsCrossStPancras",
  "LeicesterSquare",
  "ManorHouse",
  "NorthEaling",
  "Northfields",
  "Oakwood",
  "Osterley",
  "PiccadillyCircus",
  "ParkRoyal",
  "RuislipManor",
  "Ruislip",
  "RussellSquare",
  "RaynersLane",
  "SouthEaling",
  "Southgate",
  "SouthHarrow",
  "SouthKensington",
  "SudburyHill",
  "SudburyTown",
  "TurnhamGreen",
  "TurnpikeLane",
  "Uxbridge",
  "WoodGreen"
] // 53

const victoria = [
  "Blackhorse Road",
  "Brixton",
  "Euston",
  "Finsbury Park",
  "Green Park",
  "Highbury & Islington",
  "Kings Cross St Pancras",
  "Oxford Circus",
  "Pimlico",
  "Stockwell",
  "Seven Sisters",
  "Tottenham Hale",
  "Victoria St",
  "Vauxhall",
  "Warren Street",
  "Walthamstow Central"
] // 16

const waterlooCity = [
  "Bank",
  "Waterloo"
] // 2

const allLines = [
  "Central", "Bakerloo", "Circle", "District", "Hammersmith & City", "Jubilee", "Metropolitan", "Northern", "Piccadilly", "Victoria", "Waterloo & City"
]

const allStations = {
  bakerloo,
  central,
  circle,
  district,
  hammersmithCity,
  jubilee,
  metropolitan,
  northern,
  piccadilly,
  victoria,
  waterlooCity
}

const customStations = {
  bakerlooCustom: [],
  centralCustom: [],
  circleCustom: [],
  districtCustom: [],
  hammersmithCityCustom: [],
  jubileeCustom: [],
  metropolitanCustom: [],
  northernCustom: [],
  piccadillyCustom: [],
  victoriaCustom: [],
  waterlooCityCustom: []
};

// get the radio buttons
const radioButtons = document.querySelectorAll('input[type=radio]');
// get the form
const trackForm = document.querySelector('.track-form');
// get the div that will display the original station list
const originalListDiv = document.querySelector('.original-stations-list');
// get the div that will display the replacement station list
const newListDiv = document.querySelector('.new-stations-list');
// get the h2 that will head the original station list
const originalListHeading = document.querySelector('.original-stations-panel h3');
// get the h2 that will head the replacement station list
const newListHeading = document.querySelector('.new-stations-panel h3');
// set the initial selected radio button value to null
let selectedValue = null;
let lineSelection = "No line selected";
let stations = [];
let generatedStationNamesArray = [];

console.log(allStations);

const renderOriginalList = (lineSelection, stations) => {
  console.log('running renderOriginalList() with', lineSelection);
  if (originalListDiv.hasChildNodes()) {
    while (originalListDiv.firstChild) {
      originalListDiv.removeChild(originalListDiv.firstChild);
    }
  }

  if (lineSelection === 'No line selected') {
    originalListHeading.classList.add('not-in-service');
    originalListHeading.textContent = 'No line selected';
    return;
  } else {
    originalListHeading.classList.remove('not-in-service');
    originalListHeading.textContent = `${lineSelection} original station names`;
    stations.forEach(station => {
      const p = document.createElement('p');
      p.textContent = station;
      originalListDiv.appendChild(p);
    });

    // dispose of any custom names in new name panel
    if (newListDiv.hasChildNodes()) {
      while (newListDiv.firstChild) {
        newListDiv.removeChild(newListDiv.firstChild);
      }
    }

    if (customStations[`${selectedValue}Custom`].length > 0) {
      newListHeading.classList.remove('not-in-service');
      newListHeading.textContent = `${lineSelection} custom station names`;
      customStations[`${selectedValue}Custom`].forEach(station => {
        const p = document.createElement('p');
        p.textContent = station;
        newListDiv.appendChild(p);
      });
    } else {
      newListHeading.classList.add('not-in-service');
      newListHeading.textContent = 'Train replacement not currently in service for this line';
    }

  }
}

const renderNewList = (lineSelection, stations) => {
  console.log('running renderNewList() with', lineSelection);
  console.log('stations are', stations)
  if (newListDiv.hasChildNodes()) {
    while (newListDiv.firstChild) {
      newListDiv.removeChild(newListDiv.firstChild);
    }
  }

  if (lineSelection === 'No line selected') {
    newListHeading.classList.add('not-in-service');
    newListHeading.textContent = 'No line selected';
    return;
  } else {
    newListHeading.classList.remove('not-in-service');
    newListHeading.textContent = `${lineSelection} custom station names`;
    stations.forEach(station => {
      const p = document.createElement('p');
      p.textContent = station;
      newListDiv.appendChild(p);
    });

    customStations[`${selectedValue}Custom`] = stations;
    console.log('customStations is', customStations)

    // get span element in the selected line's label
    const span = document.querySelector(`label[for=${selectedValue}] span`);
    // set the text content of the span element to the userTheme
    span.textContent = ` (${trackForm.userTheme.value})`;

  }
}

// add event listeners to the radio buttons
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    // enable the submit button
    selectedValue = radioButton.value;
    console.log('selected station value:', selectedValue);
    switch (selectedValue) {
      case 'bakerloo': 
        lineSelection = 'Bakerloo Line';
        stations = allStations.bakerloo;
        break;
      case 'central':
        lineSelection = 'Central Line';
        stations = allStations.central;
        break;
      case 'circle':
        lineSelection = 'Circle Line';
        stations = allStations.circle;
        break;
      case 'district':
        lineSelection = 'District Line';
        stations = allStations.district;
        break;
      case 'hammersmithCity':
        lineSelection = 'Hammersmith & City Line';
        stations = allStations.hammersmithCity;
        break;
      case 'jubilee':
        lineSelection = 'Jubilee Line';
        stations = allStations.jubilee;
        break;
      case 'metropolitan':
        lineSelection = 'Metropolitan Line';
        stations = allStations.metropolitan;
        break;
      case 'northern':
        lineSelection = 'Northern Line';
        stations = allStations.northern;
        break;
      case 'piccadilly':
        lineSelection = 'Piccadilly Line';
        stations = allStations.piccadilly;
        break;
      case 'victoria':
        lineSelection = 'Victoria Line';
        stations = allStations.victoria;
        break;
      case 'waterlooCity':
        lineSelection = 'Waterloo & City Line';
        stations = waterlooCity;
        break;
      case 'none':
        lineSelection = 'No line selected';
        stations = [];
        break;
      default:
        lineSelection = "No line selected";
        stations = [];
    };
    renderOriginalList(lineSelection, stations);
  });
});

// add event listener to the form
trackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  console.log('theme is', trackForm.userTheme.value);
  console.log('lineSelection is', lineSelection);
  console.log('stations are', stations);

  const res = await fetch('http://localhost:4000/openai/tracks/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userTheme: trackForm.userTheme.value,
      quantity: stations.length,
    }),
  });

  const data = await res.json();
  console.log('data is', data);

  if (typeof data.generatedStationNames === 'string') {
    generatedStationNamesArray = JSON.parse(data.generatedStationNames);

    console.log('generatedStationNamesArray is', generatedStationNamesArray);
  }

  generatedStationNamesArray.forEach((station, index) => {
    console.log(`station ${index + 1} is ${station}`)
  });

  renderNewList(lineSelection, generatedStationNamesArray);
});





