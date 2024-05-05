const googleSearch = require('./scripts');


dbMock =[
'dog.com',
'cheesepuff.com',
'disney.com',
'dogpictures.com'

];

describe('googleSearch',()=>{

it('this is this the test.',()=>{
expect ('Hello').toBe('Hello')
})

it('is searching google test', ()=>{
expect(googleSearch('testtest',dbMock)).toEqual([])
expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogpictures.com'])

})
it('work with undefined and null input',()=>{
expect(googleSearch(undefined,dbMock)).toEqual([])
expect(googleSearch(null,dbMock)).toEqual([])
})
it('does not return more than 4 matches',()=>{
expect(googleSearch('.com',dbMock).length).toEqual(4);
})
})