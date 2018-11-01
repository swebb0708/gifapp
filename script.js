// READ the giphy API docs: https://developers.giphy.com/
var giphy_endpoint = 'http://api.giphy.com/v1/gifs/search';
var API_KEY ="muA9egsNePDG9iv7Kwge5Lxuo6qQ2WvI";
var searchForm = document.querySelector("#search-form");
var searchInput = searchForm.querySelector("input");
var results = document.querySelector(".results");



//define functions
//paramaters are variables that are used within a function and map out how the information is to be used
function getGifs(){
    //searchInput.value is my search bar value
    // console.log(searchInput.value);
    fetch(`${giphy_endpoint}?api_key=${API_KEY}&q=${searchInput.value}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //data.data[""0""].images.preview_gif.url got this from web development tools on chrome
        console.log(data);
        for(var i=0; i<data.data.length; i++){
        results.innerHTML += `
            <img class="image" src="${data.data[i].images.preview_gif.url}">
        
        `
        }
    })
    .catch(function(error){
        console.log("There was an error!")
    })
    
    
}




//add event listenders and call functions

searchForm.addEventListener('submit', function(event){
    event.preventDefault(); //prevents the submit button from refreshing the page. means what ever you do normally dont do it
    getGifs();
})
