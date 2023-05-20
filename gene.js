const container2 = document.getElementById("cont-2")

const name1 = document.getElementById("name-el")
const species = document.getElementById("species-el")
const origin1 = document.getElementById("origin-el")
const item1 = document.getElementById("item-el")
const clothing = document.getElementById("clothing-el")
const pet1 = document.getElementById("pet-el")

const anthroBTN = document.getElementById("anthro-btn")
const mythicBTN = document.getElementById("mythic-btn")

const modernLocBTN = document.getElementById("modern-loc-btn")
const mythicLocBTN = document.getElementById("mythic-loc-btn")

const weaponBTN = document.getElementById("weapon-btn")
const itemBTN = document.getElementById("item-btn")

const modernFnBTN = document.getElementById("modern-fash-btn")
const oldFnBTN = document.getElementById("fantasy-fash-btn")

const hideSpec = document.getElementById("hide-species")
const hideLoc = document.getElementById("hide-locale")
const hideItem = document.getElementById("hide-item")
const hideFash = document.getElementById("hide-fashion")
const hidePet = document.getElementById("hide-pet")

const swapSpec = document.getElementById("swap-spec")
const swapLoc = document.getElementById("swap-loc")
const swapItem = document.getElementById("swap-item")
const swapFash = document.getElementById("swap-fash")
const swapPet = document.getElementById("swap-pet")

let anthroCheck = true
let mythicCheck = true
let modernLocCheck = true
let mythicLocCheck = true
let weaponCheck = true
let itemCheck = true
let modernFnCheck = true
let oldFnCheck = true

const onColor = "#2ab"
const offColor = "#aaa"
const offText = "#555"
const onText = "#fff"


const firstNames = ["Fred", "Jerry", "Hammond", "Reece", "Saint", "Washoop", "Illeece", "Shar", "Godger", "Tricepa", "Tomrys", "Uptun", "Sir", "Madame", "Mistress", "Lt.", "Gov.", "Wendy", "Killer", "Upeek", "Lambkin", "Shashay", "Laqweise", "Quin", "Lillete", "Rondowe", "Peel", "Tit Wit", "Eroth", "The Second", "Fridays", "Sun", "Lord", "Gidfrack", "Ill", "Uloo", "Moon", "Galek Z.", "Frim", "Clairvo", "Mohté", "Rü", "Y.Set", "Trinity", "The Lover's", "'So Adorned'", "The", "Freeman", "Rothwhick", "Doomer", "Vanity", "Vain", "Lustitia", "Jan", "F.T", "Barlowe", "Black", "The Withering", "","Zefreece","Lairot","Lucas","Tret","Ooul","Aldanna","Uldeer","Doe Remütte","Thorn-Day","Wickik","Quat","Pollu","Úddr'","Bitter","Sourling","Mistress","Paramour"]

const lastNames = ["FF", "D.D.", "S.T.", "Rick", "Kinword", "Hatch", "Lillian", "Kidlock", "Jitters", "Sod", "Cram", "Happ", "Kill", "Lord", "Thirdly", "Lady", "Manless", "Mopp", "Lustitia", "Loop", "Wendy", "Twice Died", "III", "I", "II", "V", "Greatess", "of Rim-House", "Hustlmon", "Horr'", "Oppulan", "TT Opate", "Sorrows", "Lightmare", "Ultrahyde", "Franks", "Sharkest", "Lambkin", "Kíne", "The Kindred", "Hollows Heart", "Yelloes", "Yiquuiz", "Opera Ill", "The Forgotten", "Zebra-patch", "Zinbras O' Lucas", "Madribain", "Doom Bro", "Synergamétte", "Syntris", "Creep", "The God", "of the West", "of The North", "of The South", "of The East", "Skyborńe", "Earthfell", "The Everpresent", "Handy", "Fifthly", "of the Ten", "Ninty-Fingers", "Finger", "Saints","Neo Decc","Floreaus","Streams","The Elderly"]

const adjSpecies = ["Tarnished", "Irradescent", "Shining", "Bloodied", "Conjoined", "Wealthy", "Horned", "Mad", "Sorrowful", "Conscripted", "Rabid", "Horny", "Foolhardy", "Rancid", "Jubilant", "Noble", "Parasitic", "Knightly", "Stoic", "Hateful", "Psychic", "Flamboyant", "Slippery", "Devious", "Light-Footed", "Maidenless", "Fae", "Empty-Headed", "Ghostly", "Petrified", "Sickly", "Angry", "Bewitched", "Sterile", "Sharp", "Servant", "Legendary", "Brilliant", "Lustful", "Gifted", "Crowned", "", "", "", ""]

const phySpecies = ["Bewinged", "Many-Armed", "Many-Faced", "Marked", "Tatted", "Painted", "Indecent", "Two-Headed", "Multi-Sight", "Sanguine", "Bulky", "Thin", "Hairy", "Heavy-Set", "Top-Heavy", "Big-Headed", "Faceless", "Masked", "Handsome", "Beauteous", "Extra-Thicc", "Two-Faced", "Boney", "Narrow", "Lop-Sided", "Muscle Bound", "Average", "Well-Endowed", "", "", "", "", "Big-chested", "Aged", "Scaled", "Floof", "Gaseous"]

const speciesArr = ["Bunny", "Dragon", "Worm", "Mare", "Squid Person", "Puppy", "Feline", "Insect", "Bird-Person", "Bird", "Field-Mouse", "Elk", "Wolf-boy", "Half-Wolf", "Wolf Lady", "Wolf", "Tigress", "Large Cat", "Drake", "Lion", "Lioness", "Cub", "Bear", "Bob Cat", "House Cat", "Dog", "Dog Man", "Cat Woman", "Dog Woman", "Cat Man", "Horse", "Horse Man", "Horse Girl", "Horse Lady", "Fish", "Fish Boy", "Fish girl", "Lizard", "Lizardess", "Snake", "Snake Lady", "Snake Boy", "Turtle", "Bovine", "Hog", "Insectoid", "Jackalope","Sea Squirt"]

const speciesMythic = ["Demon", "Dwarf", "Elf", "Skulk", "Khajiit", "Kobold", "Drowned", "Fairy", "Spectre", "Ghoul", "Cyclops", "Human Being", "Daemon", "Basilisk", "Manticore", "Mandrake", "Dragonborn", "Troll", "Orc", "Half-Orc", "Angel", "Sphinx", "Corn Child", "Leshie", "Puppet", "Doll", "Chimera","Imp","Goblin","Golem","Slime"]

const locAdj = ["'Sunbeam-a-plenty'", "Ever Mysterious", "Hellish, Misbegotten", "Flood-stripped", "Underground", "Flowery", "Cursed", "Sanctified", "Dry and Barren", "Decrepit", "Peace-driven", "Delapidated", "Rotten", "Enchanted", "Rainbow-blessed", "Gothic", "Black and White", "Transcendental", "Skeletal","Thevious","Spirit Caller's","Arcanist","Beast-infested"]
const locAdj2 = ["Quarantined", "Florida", "Underground", "Delapidated", "Mega Hub", "Downtown", "Corrupted", "Corprate", "Friendly", "Socialite's", "Western", "Principal", "Crypto", "Modern", "Noíre", "Metro", "Developed", "Art Decco", "Classical", "Electronica", "Drowsy", "Corprate", "Industrial", "Impoverished", "Cyber", "Layman","Just"]

const locationArr = ["Manor", "Temple", "Sepulcher", "Asylum", "Shop", "Cemetery", "Badlands", "Swamp Town", "Fields", "Gymnasium", "Clouds", "Colusseum", "Sky Tower", "Theater", "Beaches", "Ocean", "Shores", "Eerie", "Hills", "Kingdom", "Secret Organization", "Filth Pit", "Pest Den", "Mineral Quary", "Abyssal Depths", "Church", "Great Bank", "Libraries", "Heavens", "Hell Circle", "Paradise", "Stables", "Empire", "Castle","Village","Tribe"]

const locMythic = ["Pain", "Perfect Order", "Greater Nobility", "Wind and Song", "Terrible Knowledge", "Death", "Frosted Waters", "Luscious Dreams", "Flame", "Stagnant Waters", "Fairy Delights", "Darkness", "Heavy Metal", "Secrets and Hidden Knowledge", "Crystal Magic", "Rot", "Golden Light", "The Black Flame", "Occult Rituals", "Worship","Knighthood"]
const locModern = ["Oppulance", "Prowess", "Finance", "Merchandizing", "Warfare", "Governance", "Corprate Greed", "Blind Justice", "The Court", "Law", "Taxation", "Scholarly Debate", "Festivity", "Candid Socialites","Aristocracy"]

const adjItem = ["Broiling", "Spiked", "Ancient", "Forked", "Modified", "Broken", "Bewitched", "Enchanted", "Long-headed", "Chilling", "Horned", "Concrete", "Butcher's", "Haunted", "Infested", "Patchwork", "Two-Sided", "Extra-Sharp", "Double", "Light", "Hard-Light", "Skeletal", "Weighty", "Light Weight", "Crystal", "Monster's", "Charred", "Shelled","Porcelian","Obsidian","Extraordinary","Death-gripped","Seabed","Delirium"]

const itemArr = ["Staff", "Stick", "Bug Net", "Giant Net", "Needle", "Pin-Cushion", "Giant Needle", "Pitch Fork", "Kitchenware Set", "Dummy", "Beast Tail", "Skull", "Giant Nail", "Sceptor", "Spellbook", "Key", "Ring", "Banner", "Urn", "Lantern", "Treasure", "Statue", "Mirror", "Feather Duster", "Goblet", "Horn", "Vass", "Food Jug", "Medical Bag", "Coffin", "Spade", "Prosthetic", "Prosthesis", "Battery", "Pen & Quil", "Journal", "Slab Tablet", "Halo", "Stringed Intrument", "Stringed Intrument","Idiophone","Jug Bottle","Travel Pack","Great Discus","Branding Iron","Comb","Paint Brush"]

const weaponArr = ["Spear", "Great Sword", "Hammer", "Hand-Cannon", "Ballista", "Gun Sword", "Hand Cannon", "Club", "Bolo", "Twin-Blade", "Kukri Set", "Stake", "Gauntlet", "Scythe", "Spellbook", "Bow", "Great Bow", "Katana", "Sabre", "Pick-Axe", "Axe", "Atlatl and Spear", "Spear", "Scythe", "Urumi", "Bagh Nakh", "Macuahuitl", "Katar", "Hook Swords", "Mere Club", "Kpinga", "Gladiator Scissor", "Chakram", "Zhua", "Man Catcher", "Fletched Javelin", "Khopesh","Shield","Branding Iron","Harpoon"]

const adjclothe = ["Fanciful", "Tattered", "Silky", "Dirtied", "Flowery", "Stained", "Colorful", "Striped", "Bulky", "Furry", "Faux Leather", "Rich", "patterned", "Scantly Clad", "Scanty", "Simple", "Bountiful", "Tight", "Shining", "Blackened", "Festive", "Avante Garde", "Casual", "Grungey", "Exotic", "Vintage", "Chic", "Armoured", "Artsy", "Strapped", "Stylish", "Bejewled", "Bohemian", "Sexy", "Fine", "Laced", "Belted", "Vibrant", "Darkened", "Unfitting", "Extra-Large", "Extra-Tight", "Punk", "Caped", "Gothic", "Unnatural", "Puritanical", "Feathery", "Belled", "Flaring", "Dramatic"]

const clothe = ["Drape", "Bloomer", "Cloak", "Kimono", "Poncho", "Robe", "Armour", "Pelt", "Chainmail", "Tunic", "Samurai Armour", "Chaperon Hood", "Liripipe and Crakow", "Houppelande", "Kilt", "Frock", "Pallium", "Turban and Sultan's Kaftan", "Fez", "Turban", "Keffiyeh", "Braccae", "Alb", "Plate", "Noble Gown", "Quilted Doublet"]

const clotheMod = ["Casual Look", "T-shirt and Shorts", "T-shirt and Pants", "Jacket and Jeans", "Shawl", "Short Skirt", "Jacket", "Leather Suit", "Dress-Suit", "Suit and Tie", "Robes", "Mesh", "NightCap and Pajamas", "Off Shoulder Dress", "Mini Dress", "Formal Gown", "Poncho", "Flannel", "Plaid Top and Bottoms", "Petticoat", "Cargo Pants and Heavy Boots", "Suit and High-Heels", "Hooded Sweater", "Cardigan"]

const clotheOrigin = ["from GoodWill", " of the Coastal Waves", "from the Nobility", "of Earthly Wonders", "kissed by the Sun", "of the Moon", "made by Pest-kind", "fallen from the Heavens", "graced by the Underworld", ", a memory of the Scortched Dessert","decorated by natures bounty","decorated in symbols of the devout","aliven with color",", a gift of True Luxury","touched by Sullied Earth",", a patchwork piece",",clean and unsullied",", decepively flesh-like...almost alive","made by unearthly hands", "from the Valley of Death", "drenched in Darkness", "bathed in Sunlight", "bathed in blood", "of the Spacial Realm", "ripped from the Stars", "'made in Hell'", "of Hidden Might", "of Dreary Comforts", "of Fiery Flamboyancy", "of Glacial Might", "of mixed pelts and skins", "of Rhythm and Rhyme", "of the Crystal Shardlands"]

// const adjPet = []
const petSpecies = speciesArr.concat(speciesMythic)
// ["Lion", "Blob", "Sea Squirt", "Snail", "Bear", "Slug", "Wolf", "Hawk", "Imp", "Demon", "Ghost", "Human", "Alien", "Giant Plant", "Drake", "Feline", "Canine", "Beholder", "Hippogriff", "Jackalope", "Pheonix"]
const petUse = ["Pet", "Consort", "Partner", "Apprentice", "Companion", "Friend", "Steed", "Prisoner", "Advisor", "Boss", "Spirit Animal", "Best Friend", "Desciple", "Follower", "Squire", "Paramour", "Mistress"]

const bgColor =["rgb(83, 83, 83)","rgb(72, 53, 53)","rgb(57, 80, 41)","rgb(31, 63, 72)","rgb(43, 31, 72)","rgb(99, 50, 102)","rgb(102, 94, 50)","rgb(73, 117, 123)","rgb(68, 33, 36)","rgb(37, 68, 33)","rgb(41, 60, 95)","rgb(62, 91, 144)"]

//option buttons

anthroBTN.addEventListener("click", function () {
    if (anthroCheck === true) {
        anthroCheck = false;
        anthroBTN.style.color = offText
        anthroBTN.style.backgroundColor = offColor
    }
    else {
        anthroCheck = true;
        anthroBTN.style.color = onText
        anthroBTN.style.backgroundColor = onColor
    }
})

mythicBTN.addEventListener("click", function () {
    if (mythicCheck === true) {
        mythicCheck = false;
        mythicBTN.style.color = offText
        mythicBTN.style.backgroundColor = offColor
    }
    else {
        mythicCheck = true;
        mythicBTN.style.color = onText
        mythicBTN.style.backgroundColor = onColor
    }
})

weaponBTN.addEventListener("click", function () {
    if (weaponCheck === true) {
        weaponCheck = false;
        weaponBTN.style.color = offText
        weaponBTN.style.backgroundColor = offColor
    }
    else {
        weaponCheck = true;
        weaponBTN.style.color = onText
        weaponBTN.style.backgroundColor = onColor
    }
})

itemBTN.addEventListener("click", function () {
    if (itemCheck === true) {
        itemCheck = false;
        itemBTN.style.color = offText
        itemBTN.style.backgroundColor = offColor
    }
    else {
        itemCheck = true;
        itemBTN.style.color = onText
        itemBTN.style.backgroundColor = onColor
    }
})

modernFnBTN.addEventListener("click", function () {
    if (modernFnCheck === true) {
        modernFnCheck = false;
        modernFnBTN.style.color = offText
        modernFnBTN.style.backgroundColor = offColor
    }
    else {
        modernFnCheck = true;
        modernFnBTN.style.color = onText
        modernFnBTN.style.backgroundColor = onColor
    }
})

oldFnBTN.addEventListener("click", function () {
    if (oldFnCheck === true) {
        oldFnCheck = false;
        oldFnBTN.style.color = offText
        oldFnBTN.style.backgroundColor = offColor
    }
    else {
        oldFnCheck = true;
        oldFnBTN.style.color = onText
        oldFnBTN.style.backgroundColor = onColor
    }
})

modernLocBTN.addEventListener("click", function () {
    if (modernLocCheck === true) {
        modernLocCheck = false;
        modernLocBTN.style.color = offText
        modernLocBTN.style.backgroundColor = offColor
    }
    else {
        modernLocCheck = true;
        modernLocBTN.style.color = onText
        modernLocBTN.style.backgroundColor = onColor
    }
})

mythicLocBTN.addEventListener("click", function () {
    if (mythicLocCheck === true) {
        mythicLocCheck = false;
        mythicLocBTN.style.color = offText
        mythicLocBTN.style.backgroundColor = offColor
    }
    else {
        mythicLocCheck = true;
        mythicLocBTN.style.color = onText
        mythicLocBTN.style.backgroundColor = onColor
    }
})

//hide buttons
hideSpec.addEventListener("click", function () {
    if (document.getElementById("sp-box").style.display === "") {
        document.getElementById("sp-box").style.display = "none"
        hideSpec.style.backgroundColor = "lightgrey"
    }
    else {
        document.getElementById("sp-box").style.display = ""
        hideSpec.style.backgroundColor = onColor
    }

})

hideLoc.addEventListener("click", function () {
    if (document.getElementById("loc-box").style.display === "") {
        document.getElementById("loc-box").style.display = "none"
        hideLoc.style.backgroundColor = "lightgrey"
    }
    else {
        document.getElementById("loc-box").style.display = ""
        hideLoc.style.backgroundColor = onColor
    }

})

hideItem.addEventListener("click", function () {
    if (document.getElementById("it-box").style.display === "") {
        document.getElementById("it-box").style.display = "none"
        hideItem.style.backgroundColor = "lightgrey"
    }
    else {
        document.getElementById("it-box").style.display = ""
        hideItem.style.backgroundColor = onColor
    }

})

hideFash.addEventListener("click", function () {
    if (document.getElementById("cl-box").style.display === "") {
        document.getElementById("cl-box").style.display = "none"
        hideFash.style.backgroundColor = "lightgrey"
    }
    else {
        document.getElementById("cl-box").style.display = ""
        hideFash.style.backgroundColor = onColor
    }

})

hidePet.addEventListener("click", function () {
    if (document.getElementById("pt-box").style.display === "") {
        document.getElementById("pt-box").style.display = "none"
        hidePet.style.backgroundColor = "lightgrey"
    }
    else {
        document.getElementById("pt-box").style.display = ""
        hidePet.style.backgroundColor = onColor
    }

})

// swap buttons
swapSpec.addEventListener("click", function () { getSpecies() })

swapLoc.addEventListener("click", function () { getLocation() })

swapItem.addEventListener("click", function () { getItem() })

swapFash.addEventListener("click", function () { getFashion() })

swapPet.addEventListener("click", function () { getCompanion() })

//main generators

function generate() {

    name1.textContent = `
    ${firstNames[Math.floor(Math.random() * firstNames.length)]} 
    ${lastNames[Math.floor(Math.random() * lastNames.length)]}
    `
    getSpecies()
    getLocation()
    getItem()
    getFashion()
    getCompanion()

    let x = Math.floor(Math.random() * bgColor.length)
    document.getElementById("char-box").style.backgroundColor = bgColor[x]
}

function getSpecies() {
    species.textContent = `The`
    getSpeciesAdj()
    getSpeciesPhys()
    if (anthroCheck === true && mythicCheck === false) {
        species.textContent += ` ${speciesArr[Math.floor(Math.random() * speciesArr.length)]}`
    }
    else if (anthroCheck === false && mythicCheck === true) {
        species.textContent += ` ${speciesMythic[Math.floor(Math.random() * Math.random() * speciesMythic.length)]}`
    }
    else if (anthroCheck === true && mythicCheck === true) {
        let speciesAll = speciesArr.concat(speciesMythic)
        species.textContent += ` ${speciesAll[Math.floor(Math.random() * speciesAll.length)]}`

    }

    else {
        species.textContent += ` Individual.`
    }
}

function getLocation() {
    origin1.textContent = `- Hails from The`
    getlocAdj1()
    origin1.textContent += ` ${locationArr[Math.floor(Math.random() * locationArr.length)]} of`
    getlocAdj2()
}

function getItem() {
    item1.textContent = `- They wield a`
    getItemAdj()

    if (weaponCheck === true && itemCheck === false) {
        item1.textContent += ` ${weaponArr[Math.floor(Math.random() * weaponArr.length)]}`
    }
    else if (weaponCheck === false && itemCheck === true) {
        item1.textContent += ` ${itemArr[Math.floor(Math.random() * itemArr.length)]}`
    }
    else if (weaponCheck === true && itemCheck === true) {
        let allItems = itemArr.concat(weaponArr)
        item1.textContent += ` ${allItems[Math.floor(Math.random() * allItems.length)]}`
    }

    else {
        item1.textContent += ` Item`
    }
}

function getFashion() {
    clothing.textContent = `- Adorned with a`
    getFashionAdj()

    if (modernFnCheck === true && oldFnCheck === false) {
        clothing.textContent += ` ${clotheMod[Math.floor(Math.random() * clotheMod.length)]}`
    }

    else if (modernFnCheck === false && oldFnCheck === true) {
        clothing.textContent += ` ${clothe[Math.floor(Math.random() * clothe.length)]}`
    }

    else if (modernFnCheck === true && oldFnCheck === true) {
        let allFash = clothe.concat(clotheMod)

        clothing.textContent += ` ${allFash[Math.floor(Math.random() * allFash.length)]}`

    }

    else {
        clothing.textContent = `and are adorned with 
        ${adjclothe[Math.floor(Math.random() * adjclothe.length)]} 
        clothing
        `
    }

    getFashionOrigin()

}
function getCompanion() {
    pet1.textContent = `- Accompanied by their`
    pet1.textContent += ` 
${phySpecies[Math.floor(Math.random() * phySpecies.length)]} 
${petSpecies[Math.floor(Math.random() * petSpecies.length)]} 
${petUse[Math.floor(Math.random() * petUse.length)]}
`

}

//Adjetives

function getSpeciesPhys() {
    species.textContent += ` ${phySpecies[Math.floor(Math.random() * Math.random() * phySpecies.length)]}`
}

function getSpeciesAdj() {
    species.textContent += ` ${adjSpecies[Math.floor(Math.random() * adjSpecies.length)]}`
}

function getlocAdj1() {
    if (modernLocCheck === true && mythicLocCheck === false) {
        origin1.textContent += ` ${locAdj2[Math.floor(Math.random() * locAdj2.length)]}`
    }
    else if (modernLocCheck === false && mythicLocCheck === true) {
        origin1.textContent += ` ${locAdj[Math.floor(Math.random() * locAdj.length)]}`
    }
    else if (modernLocCheck === true && mythicLocCheck === true) {
        let allAdj = locAdj.concat(locAdj2)
        origin1.textContent += ` ${allAdj[Math.floor(Math.random() * allAdj.length)]}`

    }
    else { }
}

function getlocAdj2() {
    if (modernLocCheck === true && mythicLocCheck === false) {
        origin1.textContent += ` ${locModern[Math.floor(Math.random() * locModern.length)]}`
    }
    else if (modernLocCheck === false && mythicLocCheck === true) {
        origin1.textContent += ` ${locMythic[Math.floor(Math.random() * locMythic.length)]}`
    }
    else if (modernLocCheck === true && mythicLocCheck === true) {
        let allAdj = locModern.concat(locMythic)
        origin1.textContent += ` ${allAdj[Math.floor(Math.random() * allAdj.length)]}`

    }
    else { }
}

function getItemAdj() {
    item1.textContent += ` ${adjItem[Math.floor(Math.random() * adjItem.length)]}`
}

function getFashionAdj() {
    clothing.textContent += ` ${adjclothe[Math.floor(Math.random() * adjclothe.length)]}`
}

function getFashionOrigin() {
    clothing.textContent += ` ${clotheOrigin[Math.floor(Math.random() * clotheOrigin.length)]}`
}