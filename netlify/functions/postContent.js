let {conn} = require('./db')

// Reference: https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
exports.handler = async function (event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log(event, 11111111111111111111111)
  const connection = await conn();
  try {
    if (event.httpMethod === "POST") {

      const {title,description,contents,createTime} = JSON.parse(event.body);
      const obj = {
        title,
        description,
        contents,
        createTime
      }
      let r1 = await connection.model('posts').create(obj);
      return {
        statusCode: 200,
        body: JSON.stringify({ data: r1._id }),
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
