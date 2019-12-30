const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

// Init middeleware
// app.use(logger);

// Handlebars Middleware
app.engine
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!!</h1>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Membes API Routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));