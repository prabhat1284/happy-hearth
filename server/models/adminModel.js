var db=require('./connection')
const{Promise, isValidObjectId}=require('mongoose')
function adminModel()
{
    this.cpadmin=(collection_name,cpdata)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find({"username":cpdata.username,"password":cpdata.opass}).toArray((err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }


    this.upadmin=(collection_name,cpdata)=>{

        return new Promise((resolve,reject)=>{
            db.collection(collection_name).updateOne({"username":cpdata.username},{$set:{"password":cpdata.npass}},(err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }


    this.epadmin=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find(userDetails).toArray((err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }


    this.upradmin=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).updateOne({'username':userDetails.username},{$set:{'name':userDetails.name,'phone':userDetails.phone,'address':userDetails.address,'city':userDetails.city,'gender':userDetails.gender}},(err,result)=>{
                err ? reject(err) : resolve(result);        
            })                
        })    
    }


    this.addcategory=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                if(err){
                    reject(err)
                }   
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
                    userDetails._id=_id+1
                    //console.log(userDetails)
                    db.collection(collection_name).insertOne(userDetails,(err,result)=>{
                        err ? reject(err) : resolve(result);        
                    })
                }            
            })
            
        });        
    }
    
    this.loadcategory=(collection_name)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err) : resolve(result)  
           
            })
            
        });        
    }

    this.addproduct=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                if(err){
                    reject(err)
                }   
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
                    userDetails._id=_id+1
                    userDetails.prodimg="noimg.png"
                    //console.log(userDetails)
                    db.collection(collection_name).insertOne(userDetails,(err,result)=>{
                        err ? reject(err) : resolve(result);        
                    })
                }            
            })
            
        });        
    }

    this.loadproduct=(collection_name)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err) : resolve(result)  
           
            })
            
        });        
    }

    this.uploadImage=(collection_name,pid,filename)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).updateOne({'_id':parseInt(pid)},{$set:{'prodimg':filename}},(err,result)=>{
                err ? reject(err) : resolve(result)  
            })
       
        })
            
    }
                    
}

module.exports=new adminModel()







