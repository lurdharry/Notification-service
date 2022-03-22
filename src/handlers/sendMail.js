async function sendMail(event, context) {
  console.log(event);
  return event;
  // {
  //   statusCode: 200,
  //   body: JSON.stringify({ message: "Hello from https://codingly.io" }),
  // };
}

export const handler = sendMail;
