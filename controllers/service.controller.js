
// JSON data to send to the server
const serviceData = [
    {
        "id": 1,
        "name": "Soil Testing",
        "description": "Soil testing is the analysis of soil samples to determine the physical, chemical, and biological properties of the soil. Soil testing is used to determine the suitability of soil for agricultural purposes, to determine the soil's ability to support the construction of buildings and roads, and to determine the soil's suitability for waste disposal.",
        "available": true,
        "result_time": "1 day",

    },
    {
        "id": 2,
        "name": "Crops Growth",
        "description": "Crops are plants cultivated for food, fiber, biofuel, medicinal plants, or other uses. Crops can be annuals, biennials, or perennials. Annual crops are harvested once a year, biennials are harvested twice, and perennials are harvested for many years. Crops can be classified as either monocots or dicots. Monocots have one cotyledon, or seed leaf, and dicots have two.",
        "available": true,
        "result_time": "1 day",
    },
    {
        "id": 3,
        "name": "Plant Disease",
        "description": "Plant disease is any abnormal condition that impairs the normal functioning of a plant. Plant diseases can be caused by pathogens such as bacteria, fungi, viruses, phytoplasmas, viroids, nematodes, and parasitic plants. They can also be caused by environmental conditions such as drought, extreme temperatures, or exposure to toxic chemicals.",
        "available": true,
        "result_time": "same day",
    }
]

// service controller
const services = (req, res) => {
    // here we send data to user as json in proper format
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(serviceData));

}

module.exports = services;