const mongoose = require('mongoose'),
    uri = 'disco-dogs';

mongoose.connect(`mongodb://localhost/${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You are now in the main frame!"))
    .catch(err => console.log("There was an error...", err))