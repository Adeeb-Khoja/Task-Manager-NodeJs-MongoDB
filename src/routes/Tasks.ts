import { Router } from "express";
import {createTask, deleteTask, getAll,getByID, updateTask} from '../controllers/Tasks'

const router = Router()

router.route('/').get(getAll).post(createTask)
router.route('/:id').get(getByID).patch(updateTask).delete(deleteTask)



export default router 