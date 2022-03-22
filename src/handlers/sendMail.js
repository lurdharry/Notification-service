import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-west-1" });

async function sendMail(event, context) {
  const params = {
    Source: "azeezhammed57@gmail.com",
    Destination: {
      ToAddresses: ["azeezhammed57@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello",
        },
      },
      Subject: {
        Data: "Test Mail",
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
