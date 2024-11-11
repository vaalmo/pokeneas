import pokeneas from "../data/pokeneas.js";
import os from 'os';

const getRandomPokenea = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
};

export const getPokeneaInfo = async (req, res) => {
    try{
        const randomPokenea = getRandomPokenea();
        const result = {
            id: randomPokenea.id,
            name: randomPokenea.name,
            height: randomPokenea.height,
            ability: randomPokenea.ability,
            containerId: os.hostname()
        }
        res.status(200).json(result)
    } catch (error) {
        console.error("Error obtaining pokenea info", error)
        res.status(500).json({ message: "We could not obtain the pokenea info" })
    }
}

export const getPokeneaPhraseImage = async (req, res) => {
    try {
        const randomPokenea = getRandomPokenea();
        const result = {
            phrase: randomPokenea.phrase,
            image: randomPokenea.image,
            containerId: os.hostname()
        }
        res.status(200).json(result)
    } catch (error) {
        console.error("Error obtaining pokenea phrase and image", error)
        res.status(500).json({ message: "We could not obtain the pokenea phrase and image" })
    }
}

export const getPokeneaPhraseImagePage = async (req, res) => {
    try {
        const randomPokenea = getRandomPokenea();
        const phrase = randomPokenea.phrase;
        const image = randomPokenea.image;
        const containerId = os.hostname();

        // Construir el HTML con los valores
        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pokenea Information</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                        background-color: #f9f9f9;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                    .container {
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    h1 {
                        color: #4CAF50;
                    }
                    .content {
                        margin-top: 20px;
                    }
                    .phrase {
                        font-size: 1.5em;
                        color: #333;
                    }
                    .containerId {
                        font-size: 1em;
                        color: #777;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Pokenea Information</h1>
                    <div class="content">
                        <p class="phrase">${phrase}</p>
                        <img src="${image}" alt="Pokenea Image" />
                        <p class="containerId">Container ID: ${containerId}</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Enviar la respuesta HTML
        res.status(200).send(htmlResponse);
    } catch (error) {
        console.error("Error obtaining pokenea phrase and image", error);
        res.status(500).send("<h1>We could not obtain the pokenea phrase and image</h1>");
    }
}
