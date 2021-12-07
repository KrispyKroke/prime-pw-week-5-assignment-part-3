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
