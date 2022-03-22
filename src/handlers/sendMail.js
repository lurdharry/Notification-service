import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-west-1" });

async function sendMail(event, context) {
  const record = event.Records[0];
  console.log("recording processing", record);

  const email = JSON.parse(record.Body);
  const { subject, body, recipient } = email;

  const params = {
    Source: "azeezhammed57@gmail.com",
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: {
          Data: body,
        },
      },
      Subject: {
        Data: subject,
      },
    },
  };
  try {
    const result = ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const handler = sendMail;
