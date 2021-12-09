console.log('***** Music Collection *****')
let collection = [];


function addToCollection(title, artist, yearPublished) {
   console.log('in addToCollection:', title, artist, yearPublished);
   let greatestAlbum = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
   }
   collection.push(greatestAlbum);
   return greatestAlbum;


}

console.log('running in:', addToCollection('Victory Lap', 'Nipsey Hussle', 2018));

// console.log('running in:', addToCollection('Victory Lap 2', 'Nipsey Hussle', 2021));


console.log(collection);

