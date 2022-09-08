const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Wallet = require("../models/wallet");
require("dotenv").config();


exports.createWallet = (req, res) => {
    const wallet = new Wallet({
        wallet_address: req.body.wallet_address,
        balance: req.body.balance,
        user: req.body.user
    });


    wallet.save((err, wallet) => {
        if (err) {
            res.status(500)
                .send({
                    message: err
                });
            return;
        } else {
            res.status(200)
                .send({
                    message: "wallet created successfully"
                })
        }
    });
};
