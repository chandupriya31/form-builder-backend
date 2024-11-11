require('dotenv').config();
const express = require("express");

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const configDB = require('./config/db');
const { createForm, getForms, getIndividualForm, editForm, deleteForm } = require('./app/controllers/form_controller');

const port = process.env.port;

// create form
app.post('/api/form/create', createForm);

// view all forms
app.get('/api/forms', getForms);

// individual form
app.get('/api/form/:id', getIndividualForm)

// edit form
app.put('/api/form/:id/edit', editForm)

// delete form
app.delete('/api/form/:id', deleteForm)

configDB();

app.listen(port, () => {
    console.log('connected to port');
}) 
