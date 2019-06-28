const Session = require('../models/session.model.js');

// Create and Save a new Session
exports.create = (req, res) => {
    // Validate request
    if(!req.body.formateur) {
        return res.status(400).send({
            message: "Session formateur can not be empty"
        });
    }

    if(!req.body.eleve) {
        return res.status(400).send({
            message: "Session eleve can not be empty"
        });
    }




    // Create a Session
    const session = new Session({
        title: req.body.title || "Untitled Session",
        eleve: req.body.eleve,
        formateur: req.body.formateur

    });

    // Save Session in the database
    session.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Session."
        });
    });
};

// Retrieve and return all sessions from the database.
exports.findAll = (req, res) => {
    Session.find()
    .then(sessions => {
        res.send(sessions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sessions."
        });
    });
};

// Find a single session with a sessionId
exports.findOne = (req, res) => {
    Session.findById(req.params.sessionId)
    .then(session => {
        if(!session) {
            return res.status(404).send({
                message: "Session not found with id " + req.params.sessionId
            });            
        }
        res.send(session);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Session not found with id " + req.params.sessionId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving session with id " + req.params.sessionId
        });
    });
};

// Update a session identified by the sessionId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.formateur) {
        return res.status(400).send({
            message: "Session formateur can not be empty"
        });
    }

    if(!req.body.eleve) {
        return res.status(400).send({
            message: "Session eleve can not be empty"
        });
    }



    // Find session and update it with the request body
    Session.findByIdAndUpdate(req.params.sessionId, {
        title: req.body.title || "Untitled Session",
        eleve: req.body.eleve,
        formateur: req.body.formateur

    }, {new: true})
    .then(session => {
        if(!session) {
            return res.status(404).send({
                message: "Session not found with id " + req.params.sessionId
            });
        }
        res.send(session);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Session not found with id " + req.params.sessionId
            });                
        }
        return res.status(500).send({
            message: "Error updating session with id " + req.params.sessionId
        });
    });
};

// Delete a session with the specified sessionId in the request
exports.delete = (req, res) => {
    Session.findByIdAndRemove(req.params.sessionId)
    .then(session => {
        if(!session) {
            return res.status(404).send({
                message: "Session not found with id " + req.params.sessionId
            });
        }
        res.send({message: "Session deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Session not found with id " + req.params.sessionId
            });                
        }
        return res.status(500).send({
            message: "Could not delete session with id " + req.params.sessionId
        });
    });
};
