//anjelica I worked with teddy
const UserModel = require('../model/UserModel')

class Users{
  static getProfile(id,res){
    UserModel.getProfile(id).then(profile =>{
      console.log(profile)
    res.render('users/profile',{profile: profile})

  }).catch(err => console.log(err))
}
}
module.exports= Users
