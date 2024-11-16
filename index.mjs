import express from 'express';
import fetch from 'node-fetch';
const planets = (await import('npm-solarsystem')).default;
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));


let randomImageData;

const fetchRandomImage = async () => {
    try {
        let apiKey = "Q0C7ESgePlyL70mKbMfFG00-wmdkJwwwURspg7TKSbQ";
        let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;
        let response = await fetch(url);
        randomImageData = await response.json();
    } catch (error) {
        console.error("Failed to fetch image", error);
    }
};

await fetchRandomImage();

setInterval(fetchRandomImage, 3 * 60 * 1000);


app.get('/', async(req, res) => {
    res.render("index",{randomImageData})
});

app.get('/nasa', async(req, res) => {
    let apiKey = "Y5zgTmozHZ81ezuYrDbcfigFAs4ngHO4pGiwjmfm";
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    let response = await fetch(url);
    let nasaAPOD = await response.json();
    res.render("nasa", {nasaAPOD, randomImageData});
})

app.get('/mercury', async(req, res) => {
    let planetMercury = planets.getMercury();
    res.render('mercury', {"planet":planetMercury, randomImageData});
});

app.get('/venus', async(req, res) => {
    let planetVenus = planets.getVenus();
    res.render('venus', {"planet":planetVenus, randomImageData});
});

app.get('/earth', async(req, res) => {
    let planetEarth = planets.getEarth();
    res.render('earth', {"planet":planetEarth, randomImageData});
});

app.get('/mars', async(req, res) => {
    let planetMars = planets.getMars();
    res.render('mars', {"planet":planetMars, randomImageData});
});

app.get('/jupiter', async(req, res) => {
    let planetJupiter = planets.getJupiter();
    res.render('jupiter', {"planet":planetJupiter, randomImageData});
});

app.get('/saturn', async(req, res) => {
    let planetSaturn = planets.getSaturn();
    res.render('saturn', {"planet":planetSaturn, randomImageData});
});

app.get('/uranus', async(req, res) => {
    let planetUranus = planets.getUranus();
    res.render('uranus', {"planet":planetUranus, randomImageData});
});

app.get('/neptune', async(req, res) => {
    let planetNeptune = planets.getNeptune();
    res.render('neptune', {"planet":planetNeptune, randomImageData});
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})