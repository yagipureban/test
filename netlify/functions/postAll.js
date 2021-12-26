let {conn} = require('./db')

// Reference: https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
exports.handler = async function (event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  const connection = await conn();
  try {
    if (event.httpMethod === "GET") {
      let r = await connection.model('posts').find({})
      return {
        statusCode: 200,
        body: JSON.stringify({ data: r }),
      };
    }
    else {
      return {
        statue: 405,
        body: "Method not supported"
      }
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }



};
