//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistname: string, albumtitle: string, albumsongs: number) {
    return { artistname, albumtitle, albumsongs};
}
console.log("Drake", "Take Care", "17");
function make_album2(artistname: string, albumtitle: string, albumsongs: number) {
    return { artistname, albumtitle, albumsongs};
}
console.log("Asim Azhar", "Noor", "5");
function make_album3(artistname: string, albumtitle: string, albumsongs: number) {
    return { artistname, albumtitle, albumsongs};
}
console.log("Talha Anjum", "Open Letter", "15");
