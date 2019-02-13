const mongoose=require("mongoose");
const slug=require("slugs");
const storeSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:"Please provide name"
    },
    slug:String,
    description:{
        type:String,
        trim:true
    },
    tags:[String],
    created:{
     type:Number,
     default:Date.now
    },
    location:{
        type:{
            type:String,
            default:"Point"
        },
        coordinates:[{
            type:Number,
            required:"please provide coordinates"
        }],
        address:{
            type:String,
            required:"please provide address"
        }
    }
})
storeSchema.pre('save',function(next){
    if(!this.isModified('name'))
    {
    next();
    return;
}
    this.slug=slug(this.name);
    next();
})
module.exports=mongoose.model("Store",storeSchema);