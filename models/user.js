const getDb = require('../util/database').getDb;
const mongodb=require('mongodb');

class User{
  constructor(username,email){
    this.name=username;
    this.email=email;
  }

  save(){
    const db=getDb();
    return db
    .collection('users')
    .insertOne(this)
    .then((result) => {
      console.log("User saves");
    }).catch((err) => {
      console.log(err);
    });
  }
  static findById(userId){
    const db=getDb();
    return db
    .collection('users')
    .findOne({_id: new mongodb.ObjectId(userId)})
    .then(user=>{
      console.log(user);
      return user;
    })
    .catch(err=>console.log(err))
  }
}

module.exports=User;