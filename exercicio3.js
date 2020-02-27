function bestRockBand(band) {
    return new Promise ((resolve, reject) => {
        if (band == "Queen") {
            resolve({
                success: true,
                bandName: band,
                mensage: band + "is the best rock band ever!"
            })
        } else {
            reject ({
                success: false,
                mensage: "I'm not so sure!"
            })
        }
    })
};

function bestRockSong(response) {
    return new Promise ((resolve, reject) => {
        if (response.success) {
            resolve("Bohemian Rhapsody by " + response.bandName);
        } else {
            reject("Do you know Queen?")
        }
    });
}

/*
bestRockBand("Queen")
    .then(response => {
        console.log("Checking the answer...");
        return bestRockSong(response)
    })
    .then(response => {
        console.log("Finding the best song...");
        console.log(response);
    })
    .catch(err => {
        console.log(err.mensage);
    })*/

async function doTheJob() {
    try {
    const bestRockBandResponse = await bestRockBand("Kiss");
    console.log(bestRockBandResponse);
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
    console.log(bestRockSongResponse);
    } catch (err) {
        console.log(err.mensage);
    }
}
doTheJob();