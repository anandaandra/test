import clubs from './clubs.js';
class DataSource {
    static searchClub(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            console.log(response);
           return response;
        })
        .then(responseJson => {
           if(responseJson.teams) {
               return Promise.resolve(responseJson.teams);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
    }
}

export default DataSource;