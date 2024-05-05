const googleDb=[
'cats.com',
'souprecipes.com',
'flowers.com',
'animals.com',
'catpictures.com',
'myfavouritecats.com'
];

const googleSearch=(searchInput)=>{
const matches= googleDb.filter(website =>{
return website.includes(searchInput);
})

return matches.length > 4? matches.slice(0,4) :matches;
}

console.log (googleSearch('soup'));

module.exports = googleSearch;