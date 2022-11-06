
const Service = require('../models/service.model');

// Services
const services = (req, res) => {
    Service.find()
        .then(services => {
            res.status(200).json(services);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving services."
            });
        });
}

// Add Service
const addService = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).json({
            message: "Content can not be empty!"
        });
    }

    // Create a Service
    const service = new Service({
        name: req.body.name,
        description: req.body.description,
        available: req.body.available,

    });

    // Save Service in the database
    Service.create(service)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while creating the Service."
            });
        });
}

// update service
const updateService = (req, res) => {
    Service.updateOne({ _id: req.params.id }, req.body)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: `Cannot update Service with id=${id}. Maybe Service was not found!`
                });
            } else res.status(200).json({ message: "Service was updated successfully." });
        })
        .catch(err => {
            res.status(500).json({
                message: "Error updating Service with id=" + id
            });
        });
}

// delete service
const deleteService = (req, res) => {
    Service.deleteOne({ _id: req.params.id })
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: `Cannot delete Service with id=${id}. Maybe Service was not found!`
                });
            } else {
                res.status(200).json({
                    message: "Service was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not delete Service with id=" + id
            });
        });
}

// Select a service
const selectService = (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Service.findById(id)
        .then(data => {
            if (!data)
                res.status(404).json({ message: "Not found Service with id " + id });
            else res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving Service with id=" + id });
        });
}



module.exports = { services, addService, updateService, deleteService, selectService };