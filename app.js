// app.js
const express = require('express');
const ExpressHandlebars = require("express-handlebars").engine;
const dbsetup=require("./Dbd/Migratoion/dbsetup")
const path = require('path');
const userRoutes = require('./Routes/Userroutes');
const taskRoutes = require('./Routes/Taskroutes');
const exportRoutes = require('./Routes/Exportroutes');

const app = express();
dbsetup()

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', ExpressHandlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users',userRoutes);
app.use('/tasks', taskRoutes);
app.use('/export', exportRoutes);

const PORT =  3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
