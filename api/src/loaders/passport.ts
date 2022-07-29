import express from "express";
import session from 'express-session';
import env from "../constants/config/env";
import passport from "passport";
import passportLocal from "passport-local";
import UserModel from '../db/models/user';
import jwt from 'jsonwebtoken';

import comparePassword from "../helpers/comparePassword";

const LocalStrategy = passportLocal.Strategy;

export default ({ app }: { app: express.Application }) => {

  app.use(
    session({
      secret: env.secret,
      resave: true,
      saveUninitialized: true
    })
  )
  app.use(passport.initialize());
  app.use(passport.session());
  

  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser(async (email: string, done) => {
    try {
      const user = await UserModel.findOne({ email: email });
      if(user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    } catch (err) {
      console.log(err)
      done(null, err)
    }
  });

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
=======

>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
  /**
   * Access Token Generator
   */
  const generateAccessToken = (id) => {
<<<<<<< HEAD
<<<<<<< HEAD
    return jwt.sign({id: id } , env?.jwtSecret, { expiresIn: '24h' });
  }    
=======
    return jwt.sign({id: id } , env?.jwtSecret, { expiresIn: '3m' });
  }
    
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
=======
    return jwt.sign({id: id } , env?.jwtSecret, { expiresIn: '3m' });
  }
    
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
/*
 * Strategy
 */
  passport.use('user-local',
    new LocalStrategy({
      usernameField: 'email'
    }, async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email: email });
        const matchPassword = user && await comparePassword(password, user.password)
        if(!user && !matchPassword) return done(null, "User not found");
        if(user && matchPassword) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
          console.log('***  user mathed **** ')
          console.log('jwt secret:', env?.jwtSecret)
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
=======
          console.log('***  user mathed **** ')
          console.log('jwt secret:', env?.jwtSecret)
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
          const accessToken = generateAccessToken(user?.id);
          return done (null, accessToken);
        }
        if(user && !matchPassword) return done(null, "Incorrect password")
      } catch (err) {
        console.log(err);
        return done(err);
      }
    })
  )
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
=======
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
  

}
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
