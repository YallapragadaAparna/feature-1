const { getCustomerById } = require('../models/customerModel');

exports.getCustomer = (req, res) => {
  const id = req.params.id;
  getCustomerById(id, (err, row) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(row);
  });
};
