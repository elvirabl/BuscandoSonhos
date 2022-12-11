const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
{
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true,
    },
    realiseDate: {
        type: String,
        required: true
    },
    avaliable: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        minLenght:0,
        maxLenght:1000,
        defaut:"No description"
    },
},
{
    timestamp: true
}
);
const Model = mongoose.model("AuthorizedMember", memberSchema);

module.exports = Model;