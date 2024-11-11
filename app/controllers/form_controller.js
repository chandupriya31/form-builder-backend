const { FormModel } = require("../models/form_model")

const createForm = async (req, res) => {
    const { title, inputs } = req.body
    try {
        const form = await FormModel.create({ title, inputs })
        res.json(form)
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong please try again..." });
    }
}

const getForms = async (req, res) => {
    try {
        const forms = await FormModel.find({}).sort({ createdAt: -1 })
        res.json(forms)
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong please try again..." });
    }
}

const getIndividualForm = async (req, res) => {
    const id = req.params.id
    try {
        const form = await FormModel.find({ _id: id })
        res.json(form)
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong please try again..." });
    }
}

const editForm = async (req, res) => {
    const id = req.params.id;
    const { title, inputs } = req.body;
    try {
        const form = await FormModel.findOneAndUpdate({ _id: id }, { title, inputs }, { new: true });
        res.json(form)
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong please try again..." });
    }
}

const deleteForm = async (req, res) => {
    const id = req.params.id
    try {
        const form = await FormModel.findOneAndDelete({ _id: id })
        res.json(form)
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong please try again..." });
    }
}


module.exports = {
    createForm,
    getForms,
    getIndividualForm,
    editForm,
    deleteForm
}