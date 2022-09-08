const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Transaction Schema
 */
const transactionSchema = new Schema({

    sender: {
        wallet_address:[
            {type: Schema.Types.ObjectId, ref: 'Wallet'}
        ],
        required: [true, "sender wallet address is required"],
    },

    receiver: {
        wallet_address:[
            {type: Schema.Types.ObjectId, ref: 'Wallet'}
        ],
        required: [true, "receiver wallet address is required"],
    },

    amount: {
        type: Number,
        required: [true, "amount is required"],

    },

    status: {
        type: Boolean,
        enum: ["success", "failed"],
    },

    description: {
        type: String
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

module.exports = mongoose.model('Transaction', transactionSchema);