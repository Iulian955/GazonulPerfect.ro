import * as functions from "firebase-functions";
import { applyCORSpolicy } from "../../constants/corsFunc";
import { ResponseObject, transportOptions } from "../../constants/emailCons";
import { generateInvoiceID } from "../../constants/utils";
import { postOrderToDB } from "./dbEmail";
import { emailAuth } from "../../constants/credentials";
import { renderClientMail } from "./templates/clientOrderTemplate";
import { renderAdminTemplate } from "./templates/admOrderConf";
import { getDateAndHour } from "./../../constants/utils";

const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport(transportOptions);

export const sendEmail = functions.https.onRequest(async (request, response) => {
  applyCORSpolicy(response);
  const invoiceNumberID = generateInvoiceID();

  let ResponseData: ResponseObject = {
    EMAILTO_ADMIN: "EMPTY",
    EMAILTO_CLIENT: "EMPTY"
  };
  const data = JSON.parse(request.body);


  functions.logger.info("Response data:");

  response.send("Message !!!");

  await postOrderToDB(invoiceNumberID, data, getDateAndHour());

  transport
    .sendMail({
      from: emailAuth.email,
      to: data.emailAddress,
      subject: "Formular trimis ",
      html: renderClientMail(data)
    })
    .then((emailClientResponse: any) => {
      ResponseData.EMAILTO_CLIENT = emailClientResponse;
      transmitToAdmin();
    });

  const transmitToAdmin = () => {
    console.log("mail client :" , data.emailAddress);
    transport
      .sendMail({
        from: data.emailAddress,
        to: emailAuth.email,
        subject: "Formular completat de " + data.name,
        html: renderAdminTemplate(data)
      })
      .then((responseToAdmin: any) => {
        ResponseData.EMAILTO_ADMIN = responseToAdmin;
        response.send(ResponseData);
      });
  };
});
