import  express  from "express";
import { signupUser,loginUser,logoutUser,followUser,updateUser,getUserProfile, getSuggestedUsers } from "../Controllers/userController.js";
import protectRoute from "../Middlewares/protectRoute.js";
const router= express.Router();





router.get("/profile/:query",getUserProfile)

router.post('/signup',signupUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)

router.get("/suggested",protectRoute,getSuggestedUsers)

router.post("/follow/:id",protectRoute,followUser);
router.put("/update/:id", protectRoute, updateUser);

export default router;