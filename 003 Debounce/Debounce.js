const searchInput = document.getElementById("searchbox");

// function debounce(fn, delay){
//     let timer;

//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(fn, delay);
//     }
// }

function search(){
    console.log(searchInput.value);
}

searchInput.addEventListener('input', _.debounce(search, 1000));