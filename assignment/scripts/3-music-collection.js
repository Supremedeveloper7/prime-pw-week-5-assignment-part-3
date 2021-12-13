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
console.log('running in:', addToCollection('The Marathon', 'Nipsey Hussle', 2010));
console.log('running in:', addToCollection('The Marathon Continues', 'Nipsey Hussle', 2011));
console.log('running in:', addToCollection('Born Sinner', 'J cole', 2013));
console.log('running in:', addToCollection('Mailbox Money', 'Nipsey Hussle', 2014));
console.log('running in:', addToCollection('Stillmatic', 'Nas', 2001));
console.log(collection);

function findByArtist(artist){
   let find = []
   for (let i=0; i<collection.length; i++){
      if(collection[i].artist=== artist){
      find.push(collection[i])
      }
   }
   return find;
}

console.log( 'running in:', findByArtist('J cole'));
console.log( 'running in:', findByArtist('Nas'));
console.log( 'running in:', findByArtist('Nipsey Hussle'));
console.log( 'running in:', findByArtist('Young Dolph'));

console.log(collection);