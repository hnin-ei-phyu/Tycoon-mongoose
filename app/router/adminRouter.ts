import { admin } from "googleapis/build/src/apis/admin"
import AdminController from "../controllers/adminController"
import express from "express"
const router = express.Router()
const adminController = new AdminController()

router.get("/get-admin/:id",adminController.get)
router.post("/create-admin",adminController.create)
router.get("/get-all",adminController.getAll)
router.delete("/delete-admin/:id",adminController.delete)
router.put("/update-password/:id",adminController.updatePassword)
router.put("/update-info/:id",adminController.update)
router.get("/login-admin",adminController.login)
router.get("/get-paginate",adminController.paginate)

export default router