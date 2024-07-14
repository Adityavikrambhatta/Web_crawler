var mongoose = require('mongoose')

var Schema = mongoose.Schema


var pageSchema = new Schema({
    url : {
        type: String,
        required : [true, "No url provided"]
    },
    title: {
        type:String,
        required : true
    },
    content : {
        type : JSON,
        required : true
    }

})

module.exports = mongoose.model("Page", pageSchema)