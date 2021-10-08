const { Promise } = require('mongoose')
var db = require('./connection')

function userModel()
{
    
    this.cpuser=(collection_name,cpdata)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find({"username":cpdata.username,"password":cpdata.opass}).toArray((err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }


    this.upuser=(collection_name,cpdata)=>{

        return new Promise((resolve,reject)=>{
            db.collection(collection_name).updateOne({"username":cpdata.username},{$set:{"password":cpdata.npass}},(err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }

    this.epuser=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find(userDetails).toArray((err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }


    this.upruser=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).updateOne({'username':userDetails.username},{$set:{'name':userDetails.name,'phone':userDetails.phone,'address':userDetails.address,'city':userDetails.city,'gender':userDetails.gender}},(err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }
    
    this.fetchproduct=(collection_name)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err) : resolve(result)  
           
            })
            
        });        
    }

    this.addtocart=(collection_name,data)=>{
        return new Promise((resolve,reject)=>{
            console.log('from userModel '+data.ProductImage,data.ProductTitle,data.ProductPrice,data._id)
                db.collection(collection_name).updateOne({'_id':data._id},{$set:{'ProductTitle':data.ProductTitle,'ProductPrice':data.ProductPrice}},(err,result)=>{
                    err ? reject(err) : resolve(result);                    
                })        
        })
    }

    this.payment=(collection_name,pDetails)=>{
        return new Promise((resolve,reject)=>{
                db.collection(collection_name).find().toArray((err,result)=>{
                    if(err)
                        reject(err);
                    else
                    {
                        var _id
                        if(result.length==0)
                            _id=0
                        else
                        {
                           var max_id=result[0]._id
                           for(let row of result)
                           {
                                if(max_id<row._id)
                                    max_id=row._id               
                           }
                           _id=max_id
                        }            
                        
                        pDetails._id=_id+1
                        
                        db.collection(collection_name).insertOne(pDetails,(err,result)=>{
                            err ? reject(err) : resolve(result);        
                        })
                    }            
                })
                
        });
    }
}

module.exports=new userModel()







