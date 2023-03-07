
// The example of fetch: 

function getFetched1(getURL) {
    fetch(getURL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    })
}




// async await example with try catch:
// We use try catch to handle fetch error and data load problem.
const loadMealDetail = async (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try{
        const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]); 
    } 
    catch(error){
        console.log(error);
    } 
}
