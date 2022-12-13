const ancestorModel = require("../models/ancestorModel");
const memberModel = require("../models/memberModel");

const findAllAncestor = async (req, res) => {
    try{
        const AllAncestors = await ancestorModel.find();
        res.status(200).json(AllAncestors);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
};
const findAncestorById = async (req, res) => {
    try {
        const findAncestor = await ancestorModel.findById(req.params.id);
        res.status(200).json(findAncestor);
    } catch (error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
};

const findAncestorByLastName = async (req, res) => {
    try {
      const nameLocal = await ancestorModel.findOne({ lastName: req.params.lastName });
      if (!nameLocal) {
        return res
          .status(400)
          .json({
            mensagem: `Ancestor not found '${req.query.lastName}`,
          });
      }
      res.status(200).json(nameLocal);
    } catch (error) {
      console.log(error);
      res.status(500).json({ messagem: error.message });
    }
  };


const addNewAncestor = async (req, res) => {
    try {
        const {
            member,
            name,
            lastName,
            dateOfBirth,
            paternity,
            spouse,
            marriageDate,
            arrivalDate,
            description,
        } =req.body;

    if (!member) {
        return res
            .status(400)
            .json({messge: "Required: Enter the Member id."});
    };
        const findMember = await memberModel.findById(member);

    if (!findMember){
        return res.status(404).json({message: "Member not found"});
    }
const newAncestor = new ancestorModel({
        member,
        name,
        lastName,
        dateOfBirth,
        paternity,
        spouse,
        marriageDate,
        arrivalDate,
        description,
    });
    const savedAncestor = await newAncestor.save();
    res
        .status(200)
        .json({message: "New ancestor added sucessfully!", savedAncestor});
} catch (error) {
    res.status(500).json({message: error.message});
};
};

const updateAncestor = async(req,res)=> {
    try {
        const {id} = req.params;
        const {
            memberId,
            name,
            lastName,
            dateOfBirth,
            paternity,
            spouse,
            marriageDate,
            arrivalDate,
            description,
        } = req.body;
        const findAncestor = await ancestorModel.findById(id);
        if (findAncestor == null) {
            res.status(404).json({message: "Ancestor not found"});
        };
        if (memberId) {
            const findMember = await memberModel.findById(memberId);
            if (findMember == null) {
                return res.status(404).json({message: "Member not found"});
            };
            res.status(200).json({message: "Ancestral alterado"});

        };
        findAncestor.name = name || findAncestor.name;
        findAncestor.lastName = lastName || findAncestor.lastName;
        findAncestor.dateOfBirth = dateOfBirth || findAncestor.dateOfBirth;
        findAncestor.paternity = paternity || findAncestor.paternity;
        findAncestor.spouse = spouse || findAncestor.spouse;
        findAncestor.marriageDate = marriageDate || findAncestor.marriageDate;
        findAncestor.arrivalDate = arrivalDate || findAncestor.arrivalDate;
        findAncestor.description = description || findAncestor.description;

        const savedAncestor = await findAncestor.save();
        res.status(200).json({ message: "Ancestor successfully update", savedAncestor});
    } catch (error) {
        res.status(500).json({message: error.message});
    };
}

const deleteAncestor = async (req, res) => {
    try {
        const {id} = req.params;
        const findAncestor = await ancestorModel.findById(id);

        if (findAncestor == null) {
            return res.status(404).json({message: `Ancestor with id ${id} not fount`})
        };
        await findAncestor.remove();
        res.status(200).json({message:`Ancestor with id ${id} was successfully deleted`})
    } catch (error) {
        res.status(500).json({message:error.message});
    };
};

module.exports = {
    findAllAncestor,
    findAncestorByLastName,
    findAncestorById,
    addNewAncestor,
    updateAncestor,
    deleteAncestor
}
