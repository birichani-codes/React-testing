import fetch from 'node-fetch';

const getPeoplePromise = () => {
  return fetch('https://swapi.com/api/people')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return {
        count: data.count,
        results: data.results
      };
    });
}

const getPeople = async () => {
  const getRequest = await fetch('https://swapi.py4e.com/api/people');
  const data = await getRequest.json();
  console.log(data);
  return {
    count: data.count,
    results: data.results
  };
}

getPeoplePromise()
  .then(data => console.log(data))
  .catch(error => console.error(error));

getPeople()
  .then(data => console.log(data))
  .catch(error => console.error(error));
