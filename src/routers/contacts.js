import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import { getAllContacts, getContactById } from '../services/contacts.js';
import {
  getContactsControler,
  getContactByIdController,
  createContactsController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsControler));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactsController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

export default router;