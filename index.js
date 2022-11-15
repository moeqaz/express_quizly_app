const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs')
// Update the location of the folder for the res.render to use
app.set('views', path.join(__dirname, 'src/templates/views'))

// Set up middleware to parse form data and add to request body
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Import function to initialize routes
const initRoutes = require('./src/routes');
// Call the initRoutes function with the app
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
