const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Wallet Schema
 */
const walletSchema = new Schema({
    wallet_address: {
        type: Number,
        min: [10, 'wallet address number cannot be less than 10'],
        max: [10, 'wallet address number cannot be greater than 10'],
        required: [true, "address is required"],
    },
    balance: {
        type: Number,
        required: [true, "initial amount is required"],
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    },

    user: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Wallet', walletSchema);