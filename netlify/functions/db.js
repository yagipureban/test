const mongoose = require('mongoose');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://s1155171310:1qaz2wsx@cluster0.hxaov.mongodb.net/my_asg3_db";

exports.conn = async function () {
  let connection = await mongoose.createConnection(uri);
  const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    contents: String,
    createTime: String,
    // The schema is incomplete...
  });

  connection.model('posts', postSchema); // 设置固定的名字， 否则会首字母小写，后尾加s
  connection.on('error', function () { //监听是否有异常
    console.log("Connection error");
  });
  connection.once('open', function () { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connected!');
  });
  connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
  });
  return connection;

}