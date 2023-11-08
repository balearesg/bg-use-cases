import { Request, Response, Application, Router } from "express";
import { MailManager } from '@bg/mailer/manager';
import * as path from "path";
export /*bundle*/
  class Controller {
  #router: Router | undefined;

  constructor(router: Router, app: Application) {
    this.#router = router;
    this.#router.get("/send/mail", this.sendMail);
    app.use(this.#router);
  }


  sendMail = async (req, res: Response) => {
    const mailer = new MailManager();
    const result = await mailer.hasPermission('05p1f');

    const response = await mailer.send({
      to: "fsanvicente@balearesgroup.com",
      subject: 'Oeste vital | estado solicitud',
      module: 'request-contact',
      data: {
        patient: "sss",
        documentNumber: "sss",
        name: "sdsd",
        state: "sdsds",
      },
      attachments: [
        {
          filename: "image.jpg",
          path: path.join(__dirname, "static/image.jpg")
        }
      ]
    });
    console.log("response", response)
    return res.status(200).send({
      status: response.status,

    });
  }
}
