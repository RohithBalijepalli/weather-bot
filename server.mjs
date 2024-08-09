import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

const apiKey = 'b87e8cc5a0ca62560bc57ecf96f9693a'; // Replace with your OpenWeatherMap API key

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    const place = req.query.place;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`;

    console.log(`Fetching weather data for: ${place}`); // Debugging output

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(`API Response: ${JSON.stringify(data)}`); // Debugging output

        if (data.cod !== 200) {
            console.log(`Error from API: ${data.message}`); // Debugging output
            res.json({ error: data.message });
        } else {
            res.json({
                weather: capitalizeFirstLetter(data.weather[0].description),
                temperature: data.main.temp
            });
        }
    } catch (error) {
        console.log(`Error during fetch: ${error.message}`); // Debugging output
        res.json({ error: 'Unable to retrieve weather data' });
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
