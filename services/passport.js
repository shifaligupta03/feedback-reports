const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: 'http://localhost:5000/auth/google/callback'
}, (accessToken, refreshToken, profile, done)=>{
    console.log(profile.id);
   User.findOne({googleId: profile.id})
    .then((existingUser)=>{
        if(existingUser){
            done(null, user);
        } else {
            new User({ googleId: profile.id }).save()
            .then(user=>done(null, user));
        }
    });
    
}));