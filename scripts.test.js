const googleSearch = require('./scripts');


dbMock =[
'dog.com',
'cheesepuff.com',
'disney.com',
'dogpictures.com'

];


it('this is this the test.',()=>{
expect ('Hello').toBe('Hello')
})

it('is searching google test', ()=>{
expect(googleSearch('testtest',dbMock)).toEqual([])
expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogpictures.com'])

})