import {NextFunction, Request, Response} from 'express'
import Task from '../models/Task'
import { asyncWrapper } from '../middleware/asyncWrapper'
import { createAPIError } from '../utils/custom-api-error'


export const getAll = asyncWrapper( async (req: Request, res: Response) => {
    const tasks = await Task.find({})
    
    res.status(200).json({tasks})
})

export const getByID = asyncWrapper( async (req: Request, res: Response, next:NextFunction) => {
    const id = req.params.id
    const task = await Task.findOne({_id: id})
    if(!task) return next(createAPIError('Task not found', 404))

    res.status(200).json({task})
})


export const createTask = asyncWrapper(async (req: Request, res: Response) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})


export const updateTask = asyncWrapper(async (req: Request, res: Response,next:NextFunction) => {
    const taskID = req.params.id
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        runValidators : true,
        new : true
    })
    if(!task) return next(createAPIError('Task not found', 404))

    res.status(200).json({task})
})


export const deleteTask = asyncWrapper(async (req: Request, res: Response,next:NextFunction) => {
    const taskID = req.params.id
    const task = await Task.findOneAndDelete({_id: taskID})
    if(!task) return next(createAPIError('Task not found', 404))

    res.status(200).json({task})
})