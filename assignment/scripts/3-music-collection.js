console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, arrayOfTracks) {
  let albumObject = {
    'title': title,
    'artist': artist,
    "year published": yearPublished,
    'tracks': arrayOfTracks
  };
  collection.push(albumObject);
  return albumObject;
}

console.log(addToCollection('Currents', "Tame Impala", 2015, [{name: "The Less I Know the Better", duration: '3:38'}, {name: "Let It Happen", duration: '7:55'}]));
console.log(addToCollection('Lonerism', "Tame Impala", 2012, [{name: "Be Above It", duration: '3:23'}]));
console.log(addToCollection('Runner', 'Tennis', 2020, [{name: 'Swimmer', duration: '4:10'}]));
console.log(addToCollection("The Slow Rush", "Tame Impala", 2020, [{name: "Lost In Yesterday", duration: '4:09'}]));
console.log(addToCollection("King Krule", "King Krule", 2011, [{name: "Bleak Bake", duration: '2:30'}]));
console.log(addToCollection("Death of a Party Girl", "TV Girl", 2018, [{name: "Legendary Lovers", duration: '3:36'}]));

console.log(collection);

function showCollection(array) {
  console.log(array.length + " albums in the collection.");
  for (let album in array) {
    console.log(`${array[album].title} by ${array[album].artist}, published in ${array[album]["year published"]}`);
    for (let i = 0; i < array[album].tracks.length; i++) {
      console.log(`${i+1}. ${array[album].tracks[i].name}: ${array[album].tracks[i].duration}`);
    }
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

function search(obj = {}) {
  let array = [];
  if (Object.keys(obj).length !== 0) {
  for (let album in collection) {
    if (obj['artist'] === collection[album]['artist'] && obj['year'] === collection[album]["year published"]) {
      for (let i = 0; i < collection[album].tracks.length; i++) {
        if (obj.trackName === collection[album].tracks[i].name) {
          array.push(collection[album]);
        }
    }
    }
    }
    return array;
  } else {
    return collection;
  }
  }

console.log(search({artist: "Ray Charles", year: 1957, trackName: "Georgia On My Mind"}));
console.log(search({artist: "Tame Impala", year: 2015, trackName: "The Less I Know the Better"}));
console.log(search({artist: "Tame Impala", year: 2015, trackName: "Here We Go Again"}));
console.log(search());
console.log(search({}));
