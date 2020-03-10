"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var passport_jwt_1 = require("passport-jwt");
var serviceUser_1 = require("./modules/User/serviceUser");
var config = require('./config/env/config')();
function AuthConfig() {
    var opts = {
        secretOrKey: config.secret,
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderWithScheme('jwt')
    };
    passport.use(new passport_jwt_1.Strategy(opts, function (jwtPayload, done) {
        serviceUser_1.default
            .getUserById(jwtPayload.id_user)
            .then(function (user) {
            if (user) {
                console.log('USER AUTH - TS = ' + JSON.stringify(user));
                console.log('USER ID e email = ' + user['id_user'] + ' === ' + user['email']);
                return done(null, {
                    id_user: user['id_user'],
                    email: user['email']
                });
            }
            return done(null, false);
        })
            .catch(function (error) {
            done(error, null);
        });
    }));
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate('jwt', { session: false });
        }
    };
}
exports.default = AuthConfig;
