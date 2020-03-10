import * as passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import ServiceUser from './modules/User/serviceUser';
const config = require('./config/env/config')();

export default function AuthConfig() {
    let opts = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
    };

    passport.use(new Strategy(opts, (jwtPayload, done) =>{
        ServiceUser
            .getUserById(jwtPayload.id_user)
            .then(user =>{
                if(user){
                    console.log('USER AUTH - TS = ' + JSON.stringify(user));
                    console.log('USER ID e email = ' + user['id_user'] + ' === ' + user['email']);
                    return done(null, {
                        id_user: user['id_user'],
                        email: user['email']
                    });
                }
                return done(null, false)
            })
            .catch(error => {
                done(error, null)
              });
    }));
    return {
        initialize: () => {
            return passport.initialize()
        },
        authenticate: () => {
           return passport.authenticate('jwt', {session: false})
        }
      }
}