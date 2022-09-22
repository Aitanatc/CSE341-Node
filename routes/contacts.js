const express = require('express');
const router = express.Router();

const contactsController = require('../controller/contacts');

//find and get all
router.get('/', contactsController.getAll);

//find with the id
router.get('/:id', contactsController.getSingle);

//create a new contact with POST
router.post('/', contactsController.createContact);

//create a PUT route to update a contact..
router.put('/:id', contactsController.updateContact);

//delete a contact
router.delete('/:id', contactsController.deleteContact);


module.exports = router;