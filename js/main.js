// document.querySelector('button').addEventListener('click',getWeather )

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
// 		'X-RapidAPI-Key': '7cabe9042emshed9e4a22c9864ebp1f540cjsnec8e39488784'
// 	}
// };


// function getWeather(){
//     const weather = document.querySelector('input').value
//     fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${weather}`, options)
// 	.then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('#location').innerText = `Current Location: ${data.location.name}, ${data.location.region}`
//         document.querySelector('#condition').innerText = `Current Condition: ${data.current.condition.text}`
//         document.querySelector('#temp').innerText = `Current Temp: ${data.current.temp_f}°F `
//         document.querySelector('#humidity').innerText = `Humidity: ${data.current.humidity}%`
//         document.querySelector('#wind-speed').innerText = `Wind Speed: ${data.current.wind_mph} mph`

//     })
// 	.catch(err =>{
//         console.log(`error ${err}`)
//     })
    

// }



document.querySelector('button').addEventListener('click',getWeather )


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': '7cabe9042emshed9e4a22c9864ebp1f540cjsnec8e39488784'
	}
};

function getWeather(){
    const weather = document.querySelector('input').value
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${weather}&days=5`, options)
	    .then(res => res.json())
            .then(data => {
                console.log(data.forecast.forecastday[0].day)
                document.querySelector('#location').innerText = `Current Location: ${data.location.name}, ${data.location.region}`
                document.querySelector('#condition').innerText = `Current Condition: ${data.current.condition.text}`
                document.querySelector('#temp').innerText = `Current Temp: ${data.current.temp_f}°F`
                document.querySelector('#humidity').innerText = `Current Humidity: ${data.current.humidity}%`
                document.querySelector('#wind-speed').innerText = `Wind Speed: ${data.current.wind_mph}mph`
                document.querySelector('#future').innerText = `Tomorrow's Forecast: ${data.forecast.forecastday[0].day.condition.text} and high of ${data.forecast.forecastday[0].day.maxtemp_f}°F`

        })
	    
    .catch(err => {
        console.log(`error ${err}`)
    })

}