const APIKEY = "8693e4500be3c4d60e640e7ed276e884"
const $input = $("input")
const $button = $("button")



$button.on("click",() =>{
    let cityName = $input.val()
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`
    }).then((data) => {
        let weather = $(data.weather)
        $('#name').text(`Weather For: ${data.name}`);
        $('#temp').text(`Temperature: ${Math.round(((data.main.temp-273.15)*1.8)+32)}\xB0`);
        $('#feelsLike').text(`Feels Like: ${Math.round(((data.main.feels_like-273.15)*1.8)+32)}\xB0`);
        // last night the weather in New York was terrible so there was more than one array in the weather property therefore there was more than one deescription property.
        // I built this for loop to display all description values regardless of the number of arrays
        for (let i = 0; i < weather.length; i++)
        $('#weather').text(`Weather: ${weather[i].description}`);
    })

    const remove = (event) => {
        const $target = $(event.$input)
    }
    
    $button.on("click", remove)
    $input.val("")
})