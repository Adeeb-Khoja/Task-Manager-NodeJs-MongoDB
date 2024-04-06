import mongoose from 'mongoose'


interface ITask  {
    name: string,
    isComplete: boolean
}


const TaskSchema = new mongoose.Schema<ITask>({
    name : {
        type: String,
        required : true,
        maxLength: [20,'Name must be 20 characters'],
        trim: true
    },
    isComplete : {
        type: Boolean,
        default : false
    }
})

export default mongoose.model('Task',TaskSchema)