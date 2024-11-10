const User = require("../models/UserModel");
const Subject = require("../models/SubjectModal");
const asyncWrapper =require("../middlewares/asyncWrapper.js")
const File = require("../models/ResourseFileModel");
const path = require("path");

// function for resourse upload
const uploadResourse = async (req, res) => {
  console.log("inside uploadresourses");
  try {
    const { filename, path } = req.file;
    const formData = JSON.parse(req.body.data);
    console.log(formData)
    const newFile = new File({
      uploadedfilename:formData.uploadedfilename,
      description: formData.description,
      authorName: formData.authorName,
      branch: formData.branch,
      semester: formData.semester,
      subject: formData.subject,
      resourceType :formData.resourceType,
      status:formData.status,
      filename,
      path,
    });

    await newFile.save();
    res.status(201).json({
      success: true,
      data: newFile,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error uploading file" });
  }
};
const wlcom = async (req, res, next) => {
  try {
    const data = await User.findById(req.user.user_id);
    res.json(data);
    // console.log(res.json(product))
  } catch (error) {
    res.json({ message: error });
  }
  // res.send(req.user);
  return;
};
const getImage = async (request, response) => {
  try {   
      const file = await File.findById(request.params.fileId);
      
      // file.downloadCount++;

      // await file.save();

      response.download(file.path, file.name);
  } catch (error) {
      return
  }
}
// function for delete resourse
const deleteResourse = async(req, res) => {
  
  try {
    const data = await File.findByIdAndDelete(req.params.id)
    res.status(200).json({
      success: true,
      message: "documents delete successfull",
    });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "documents delete failed",
    })
  }
};

const getInfo = async (req, res) => {
  const { semester, branch, resourceType ,subject} = req.query;
  console.log(semester)
  try {
    const files = await File.find({
      semester: semester,
      branch: branch,
      resourceType: resourceType,
      subject :subject,
    }); 
console.log(files)
    res.status(200).json(files);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getLatestfiles = async (req, res) => {
  try {
    const files = await File.find({ branch: "computer" }).limit(5);
    console.log(files);
    res.status(200).json(files);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getUserInfo = async(req,res)=>{
  try {
    const user = await User.findById(req.params.id);
    // console.log(object)
    res.json(user);
    // console.log(res.json(product))
  } catch (error) {
    res.json({ message: error });
  }
}

const downloadFile = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await File.findById(id);
  if (!item) {
    return next(new Error("No item found"));
  }
  const file = item.filename;
  const filePath = path.join(__dirname, `../uploads/${file}`);
  res.download(filePath);
});

const getStudentResorce = async(req,res) =>{
  try {
    const files = await File.find({
      status:'pending'
    }); 
    return res.status(200).json({
      success:true,
      data:files
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      err:`Error occur while fetching student resource ${error}`
    })
  }
}

const getAccpetedResource = async(req,res) =>{
  try {
    console.log(req.query)
    const files = await File.find({
      status:'accept'
    }); 
    return res.status(200).json({
      success:true,
      data:files
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      err:`Error occur while fetching student resource ${error}`
    })
  }
}

const updatedStatus = async(req,res) =>{
  try {
    const id =req.params.id;
    const isexist = await File.findById(id);
    if(!isexist){
      return res.status(200).json({
        success:true,
        msg:'NOt Exist'
      })
    }
    const files = await File.findByIdAndUpdate(id,{status:'accept'})
    return res.status(200).json({
      success:true,
      data:files
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      err:`Error occur while updating status ${error}`
    })
  }
}
module.exports = {  uploadResourse, getAccpetedResource, deleteResourse, getInfo ,wlcom, downloadFile,  getUserInfo, getLatestfiles, getStudentResorce, updatedStatus};
