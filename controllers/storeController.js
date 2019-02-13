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
    const store=await Store.findOne({_id:req.params.id});
    res.render("editStore",{title:`Edit ${store.name}`,store});
}
exports.updateStore=async function(req,res){
   const store=await Store.findByIdAndUpdate(req.params.id,req.body,{
       new:true,
       runValidators:true
   });
   req.flash("success",`Successfully updated store <strong>${store.name}</strong>
   <a href="/stores/${store.name}">View-></a>`)
   res.redirect(`/stores/${store._id}/edit`); 
}