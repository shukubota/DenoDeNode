import { User } from '../../../DomainModels/Entity/user.ts';

import {
  ServerRequest,
} from "https://servestjs.org/@v1.1.9/mod.ts";
// import { ChangeRegisterInfo } from "../../../UseCases/users/changeRegisterInfo/index.ts";

export class ChangeUserInfo {
  async handler(req: ServerRequest) {
    const bodyJson = await req.json();
    // const changeRegisterInfo = new ChangeRegisterInfo();
    // const responseData = await changeRegisterInfo.execute(bodyJson);

    const responseData = {};

    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify(responseData),
    });
  }
}
