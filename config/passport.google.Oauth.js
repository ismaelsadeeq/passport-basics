const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config()

const models = require('../models');
const user = models.User;

module.exports = passport => {
  passport.use(
    new GoogleStrategy({
      callbackURL:'/auth/google/redirect',
      clientID:process.env.CLIENT_ID,
      clientSecret:process.env.SECRET_KEY
    }, (accessToken,refreshToken,profile, done)=>{
        console.log(profile); 
        user.findOne({where:{googleId:profile.id}}).then((currentUser)=>{
          if (currentUser){
          
          } else{
            user.create(
              {
                firstName:profile.name.givenName,
                lastName:profile.name.familyName,
                googleId:profile.id
              }
            ).then((newUser)=>{
              console.log('new user created'+newUser)
            })
          }
        })
    })
  )
};