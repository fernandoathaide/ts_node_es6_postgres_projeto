import { Request, Response } from 'express';
import * as _ from 'lodash';
import ServiceUser from '../User/serviceUser';
import authSuccess from '../../api/responses/authSuccess';
import authFail from '../../api/responses/authFail';    

class TokenRoutes {

  auth(req: Request, res: Response) {
    const credentials = {
      email: req.body.email,
      password: req.body.password
    };

    if(credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
        ServiceUser
        .getUserByEmail(credentials.email)
        .then(_.partial(authSuccess, res, credentials))
        .catch(_.partial(authFail, req, res));
    }
  }
}

export default new TokenRoutes();