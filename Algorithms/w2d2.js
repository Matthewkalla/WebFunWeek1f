var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


// console.log(pokemon[2].name);


function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse;
    var joinArray = reverseArray.join("");
    return joinArray;
}


// console.log the names of the pokémon whose only type is "poison"
function poisonOnly(arr){
    for(var i=0; i<arr.length; i++) {
        if((arr[i]['types'][0] == 'poison') && arr[i]['types'].length == 1) {
        //check for two conditions; if the first type is poison and if it doesn't have another type.
        arr[i].name = reverseString(arr[i].name);
        console.log(arr[i]);
        }
    }
    
    
}

poisonOnly(pokemon);



function divisible3(arr){
    // console.log the pokémon objects whose id is evenly divisible by 3
    for(var i=0; i<arr.length; i++) {
        if(arr[i].id % 3 === 0 ) {
            console.log(arr[i].name);
        }
    }
    
    
}


//if the length of the types array is greater than 1, console.log that item.
function multipleTypes(arr){
    for(var i=0; i<arr.length; i++) {
        //i was not being checked
        if(arr[i]['types'].length > 1) {
            console.log(arr[i]);
        }
    }
    
}

multipleTypes(pokemon);


// console.log the first type of all the pokémon whose second type is "flying"
function flyingPokemon (arr){
    for(var i=0; i<arr.length; i++) {
        //i was not being checked
        if(arr[i]['types'][1] == 'flying') {
            console.log(arr[i]);
        }
    }
    
    
}

// flyingPokemon(pokemon);