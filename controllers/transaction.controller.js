require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Transaction = require("../models/transaction");


exports.transact = (req, res) => {
    const transaction = new Transaction({
        sender: req.body.sender,
        receiver: req.body.receiver,
        amount: req.body.amount,
        description: req.body.description,
        user: req.body.user
    });

    transaction.save((err, user) => {
        if (err) {
            res.status(500)
                .send({
                    message: err
                });
            return;
        } else {
            res.status(200)
                .send({

                    message: "User Registered successfully"
                });
        }
    });
};
