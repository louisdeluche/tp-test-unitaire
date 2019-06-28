module.exports = (app) => {
    const sessions = require('../controllers/session.controller.js');

    // Create a new Session
    app.post('/sessions', sessions.create);

    // Retrieve all Sessions
    app.get('/sessions', sessions.findAll);

    // Retrieve a single Session with sessionId
    app.get('/sessions/:sessionId', sessions.findOne);

    // Update a Session with sessionId
    app.put('/sessions/:sessionId', sessions.update);

    // Delete a Session with sessionId
    app.delete('/sessions/:sessionId', sessions.delete);
}