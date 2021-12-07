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

function showCollection(array) {
  console.log(array.length + " albums in the collection.");
  for (let album in array) {
    console.log(`${array[album].title} by ${array[album].artist}, published in ${array[album]["year published"]}`);
  }
}

showCollection(collection);

function findByArtist(musician) {
  let array = [];
  for (let album in collection) {
    if (collection[album].artist === musician) {
      array.push(collection[album]);
    }
  }
  return array;
}

console.log(findByArtist("Tame Impala"));
console.log(findByArtist("Giraffage"));
