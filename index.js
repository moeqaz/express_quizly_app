const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//Update the location of the folder for the res.render to use
app.set('views', path.join(__dirname, 'src/templates/views'))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.send('Hello World')
})

// Import function to initialize routes
const initRoutes = require('./src/routes');
console.log(initRoutes);

// Call the init routes function with the app
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
