import { createCustomerController } from "../controllers/createCustomer";
import { getCustomersController } from "../controllers/getCustomers";
import { getCustomerController } from "../controllers/getCustomer";
import { deleteCustomerController } from "../controllers/deleteCustomer";
import { updateCustomerController } from "../controllers/updateCustomer";

const express = require('express');
const router = express.Router();

console.log('customer route');

router.get('/', getCustomersController);
router.get('/:id', getCustomerController);

router.post('/', createCustomerController );

router.delete('/:id', deleteCustomerController)
router.delete('/', deleteCustomerController)
router.put('/:id', updateCustomerController)
module.exports = router;