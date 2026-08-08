const marvel_heroes= ["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman","Batman","Flash"]

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes)

const all_heroes=marvel_heroes.concat(dc_heroes);
console.log(all_heroes)

const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);