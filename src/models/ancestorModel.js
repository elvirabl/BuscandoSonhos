const mongoose = require("mongoose");

const ancestorSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    paternity: {
      type: [String],
      required: true
    },
    spouse: {
      type: [String],
      required: true
    },
    marriageDate: {
      type: [String],
      required: true
    },
    arrivalDate: {
      type: [String],
      required: true
    },
    description: {
      type: String,
      minLenght:0,
      maxLenght:1000,
      defaut:"No description"
    },
    member: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Member"
    },
},
{
    timestamp: true
}
);

const Model = mongoose.model("Ancestor", ancestorSchema);

module.exports = Model;