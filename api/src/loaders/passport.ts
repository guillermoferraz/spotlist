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

  /**
   * Access Token Generator
   */
  const generateAccessToken = (id) => {
    return jwt.sign({id: id } , env?.jwtSecret, { expiresIn: '24h' });
  }    
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
  

}