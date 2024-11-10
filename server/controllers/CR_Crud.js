const User = require("../models/UserModel");

const fetchUsers = async (req, res) => {
    try {
        const users = await User.find({role:'cr'});
        return res.status(200).json({ data: users });
    } catch (error) {
        return res.status(500).json({ err: error });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateFields = {};
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        if (data.full_name) {
            updateFields.full_name = data.full_name;
        }
        if (data.email) {
            updateFields.email = data.email;
        }
        if (data.sem) {
            updateFields.sem = data.sem;
        }
        if (data.branch) {
            updateFields.branch = data.branch;
        }
        const Updateduser = await User.findByIdAndUpdate(id,{ $set: updateFields },
            { new: true })
        return res.status(200).json({ data: Updateduser });
    } catch (error) {
        return res.status(500).json({ err: error });
    }
};

const deleteUser = async (req,res) => {
    try {
        const id =req.params.id
        const user = await User.findById(id);
        if (!user) {
            return { status: 404, error: "User not found" };
        }
        await User.findByIdAndDelete(id);
        return res.status(200).json({ data: "User deleted successfully"});
    } catch (error) {
        return req.status(500).json({
            error: error.message
        }) };
    }


module.exports = {
    fetchUsers,
    updateUser,
    deleteUser,
};
