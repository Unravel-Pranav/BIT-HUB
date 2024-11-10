const router = require('express').Router();
const { uploadResourse ,deleteResourse , getInfo, wlcom, downloadFile, getUserInfo, getLatestfiles, getStudentResorce, updatedStatus, getAccpetedResource} = require("../controllers/userController");
const { register, login} =require('../controllers/Auth')
const { addSubject, deleteSubject, getSubject, updateSubject} = require('../controllers/Subject_Crud')
const auth = require("../middlewares/Authentication");
const upload = require("../middlewares/FileUploads");
const { fetchUsers, updateUser, deleteUser } = require('../controllers/CR_Crud');

// Auth
router.post("/register",register)
router.post("/login",login);

// Resource
router.post("/uploadresourse",upload.single('file'),uploadResourse);
// router.get('/ResourseFileModel/:fileId', getImage); 
router.delete("/deleteresourse/:id",deleteResourse);
router.get("/getinfo",getInfo);  // this route for geeting information after clicking on filter bar find button
// and take input sem , branch , and year 
router.get("/resources/",getLatestfiles);
router.get("/resource/",getInfo);
router.get("/download/:id",downloadFile);
router.get("/",auth,wlcom);
router.get("/getData/:id",getUserInfo);
router.get("/studentresource",getStudentResorce)
router.patch("/updatestatus/:id",updatedStatus)
router.get('/accpetedresource',getAccpetedResource);

// crud CR
router.get("/cr",fetchUsers);
router.patch("/cr/:id",updateUser);
router.delete("/cr/:id",deleteUser);


// crud for Subject
router.get("/subjects",getSubject);
router.post("/subjects",addSubject);
router.put('/subjects/:id', updateSubject);
router.delete('/subjects/:id', deleteSubject);
module.exports=router;