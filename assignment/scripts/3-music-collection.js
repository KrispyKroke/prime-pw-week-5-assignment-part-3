console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let albumObject = {
    'title': title,
    'artist': artist,
    "year published": yearPublished
  };
  collection.push(albumObject);
  return albumObject;
}

console.log(addToCollection('Currents', "Tame Impala", 2015));
console.log(addToCollection('Lonerism', "Tame Impala", 2012));
console.log(addToCollection('Runner', 'Tennis', 2020));
console.log(addToCollection("The Slow Rush", "Tame Impala", 2020));
console.log(addToCollection("King Krule", "King Krule", 2011));
console.log(addToCollection("Death of a Party Girl", "TV Girl", 2018));

console.log(collection);
