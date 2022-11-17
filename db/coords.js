const { Book } = require("../models");

let bookBand = 0
async function generateCoOrds() {
    const count = await Book.count()
    console.log(count)
    if (count%50 === 0) {
        bookBand += 10
    }

    let posX = Math.random() * ((bookBand + 5) - (bookBand - 5) + 1) + (bookBand - 5);
    let posZ = Math.random() * ((bookBand + 5) - (bookBand - 5) + 1) + (bookBand - 5);
    if (bookBand > 0) {
        const ranges = [{max: bookBand, min: bookBand - 5}, {min: (-bookBand) + 5, max: -bookBand}]
        console.log(ranges)
        posX = Math.random() * (ranges[0].max - ranges[1].max) + ranges[1].max
        if (posX < ranges[0].min && posX > ranges[1].min) {
            const randomRange = Math.floor(Math.random() * 2);
            posZ = Math.random() * (ranges[randomRange].max - ranges[randomRange].min + 1) + ranges[randomRange].min
        }
    }

    let posY = Math.random() * (3 - 1)+ 1;

    let rotX = Math.random() * 45
    let rotY = Math.random() * 45
    let rotZ = Math.random() * 45

    return [
        {
            x: posX,
            y: posY,
            z: posZ
        },
        {
            x: rotX,
            y: rotY,
            z: rotZ
        }
    ]
}

module.exports = generateCoOrds;
