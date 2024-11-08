import pokeneas from "../data/pokeneas.js";

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
            image: randomPokenea.image
        }
        res.status(200).json(result)
    } catch (error) {
        console.error("Error obtaining pokenea phrase and image", error)
        res.status(500).json({ message: "We could not obtain the pokenea phrase and image" })
    }
}

