const {Schema, model} = require('mongoose')
const TaskSchema = new Schema({
    title: {
        type:String, 
        trim: true, 
        require: true
    }, 
    priority:{
        type:String, 
        require:true,
        enum:['low', 'medium', 'heigh']
    }, 
    isCompleted:{
        type:Boolean, 
        default:false
    }
}, {timestamps: true})

module.exports = model('Task', TaskSchema)