const Subject = require("../models/SubjectModal");

// Creating new subject
const addSubject = async (req, res) => {
  const subjectData = req.body;

  // Validate input
  if (!subjectData.subname || !subjectData.subbranch || !subjectData.subsemester) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newSubject = new Subject(subjectData);

  try {
    await newSubject.save();
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(500).json({ message: "Error creating subject", error: err.message });
  }
};

// Getting all subjects
const getSubject = async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving subjects", error: err.message });
  }
};

// Updating a subject
const updateSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updateFields = {};

    const subject = await Subject.findById(id);
    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }

    if (data.subname) {
      updateFields.subname = data.subname;
    }
    if (data.subbranch) {
      updateFields.subbranch = data.subbranch;
    }
    if (data.subsemester) {
      updateFields.subsemester = data.subsemester;
    }

    const updatedSubject = await Subject.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
    return res.status(200).json({ data: updatedSubject });
  } catch (error) {
    return res.status(500).json({ msg: "Error updating subject", error: error.message });
  }
};


// Deleting a subject
const deleteSubject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSubject = await Subject.findByIdAndDelete(id);
    
    if (!deletedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    
    return res.status(200).json({ message: "Subject deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error deleting subject", error: err.message });
  }
};

module.exports = {
  addSubject,
  getSubject,
  updateSubject,
  deleteSubject
};
