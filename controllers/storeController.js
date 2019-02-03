const mongoose=require("mongoose");
const Store=mongoose.model("Store");
exports.homePage=function(req,res){
    res.render("sample",{
        dog:"sandwich"
      });
}
exports.createStore=async function(req,res){
    const store=await (new Store(req.body)).save();
    req.flash("success","Successfully created Store"); 
    res.redirect(`/store/${store.slug}`);
}
exports.addStore=function(req,res){
    res.render("editStore",{
        title:"Add Store"
    })
}

exports.getStores=async function(req,res){
    const stores=await Store.find({});
    res.render("stores",{title:"Store",stores})
}

exports.editStore=async function(req,res){
    
}