const bcrypt = require('bcrypt');
const model = require('../models');
const JwtStartegy = require('passport-jwt').Strategy;
const jwt = require('jsonwebtoken');



async function register(req,res){
 
  const saltRounds = 10 // https://www.npmjs.com/package/bcrypt visit to know more about bcrypt

  const salt = bcrypt.genSaltSync(saltRounds);

  var data = req.body;

  const hash = bcrypt.hashSync(data.password, salt);
  
  data.password = hash
  var msg;
  const checkUser = await model.User.findOne(
    {
      where:{
      email:data.email
      }
    }
    );
  if (checkUser){
    msg = "Sorry you already have an account"
  } else {
    const user = await model.User.create(
      {
        firstName:data.firstname, 
        lastName:data.lastname,
        email:data.email,
        password:data.password
      }
    );
    msg = "Account successfully created"
  
  }
  res.json(msg);
}


async function login(req,res){ 
  const data = req.body;
  const email = data.email;
  const password = data.password;
  var date;
  const user = await models.user.findOne(
    {where:{email:email}}//attributes:['firstname','lastname']
    );
  if (user){
    const checkPassword =  bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      return res.json('Incorrect passsword')
    } else {
      if (data.remember){
        date = 31622400; 
      } else {
        date = 172800 ; //3600
      }
      const jwt_payload = {
        id:user.id,
      }
       await models.isLoggedOut.destroy({where:{userId:user.id}}) 
      const token = jwt.sign(jwt_payload,process.env.SECRET,{expiresIn:date});
      return res.json(
        { "token":token,
          "data":user,
          "statusCode":200
        }
        )
    }
  } else {
    return res.json('No account found ')
  }
};




module.exports = {
  register,
  login
}