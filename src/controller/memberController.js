const memberModel = require ("../models/memberModel");

const findAllMembers = async (req, res) => {
    try{
        const allMembers = await memberModel.find();
        res.status(200).json(allMembers);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
};

const findMemberById = async (req, res) => {
    try {
        const findMember = await memberModel.findById(req.params.id);
        res.status(200).json(findMember);
    } catch (error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
};

const addNewMember = async (req, res) => {
    try{
        const {
            name,
            contact,
            realiseDate,
            avaliable,
            description
        } = req.body;
    const newMember = new memberModel({
        name,
        contact,
        realiseDate,
        avaliable,
        description
    });
    const savedMember = await newMember.save();
    res.status(200).json({message: "New member successflully added", savedMember});
} catch (error) {
    console.log(error);
    res.status(500).json(error.message);
}
};

const updateMember = async (req, res) => {
    try {
        const {
            name,
            contact,
            realiseDate,
            avaliable,
            description
        } = req.body;
     const updateMember = await memberModel.findByIdAndUpdate(req.params.id,{
        name,
        contact,
        realiseDate,
        avaliable,
        description
     });
     res.status(200).json({message: "Membro alterado"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:error.message});
        
    }
};

const deleteMember = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteMember = await memberModel.findByIdAndDelete(id);
        const message = `Member with name ${deleteMember.name} was successfully deleted`;
        res.status(200).json({message: "Membro apagado"});
        } catch (error) {
            console.error(error);
            res.status(500).json({message: error.message});
        
    }};

    module.exports = {
        findAllMembers,
        findMemberById,
        addNewMember,
        updateMember,
        deleteMember
    };

