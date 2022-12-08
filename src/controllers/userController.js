
const axios = require("axios");
const UserModel = require("../models/userModel.js");
const { errorMonitor } = require("events");


const getcoins = async function (req, res) {
    try {

      let option = {
        header: {
          Authorization: "Bearer  f47a3a03-3a53-4d03-bef8-163727b32617"

        },
        method: "get",
        url:  "http://api.coincap.io/v2/assets",
      }
      let result = await axios(option);
      const {data} = await result.data;
      data.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);
      await data.forEach((element) => {
        const result = new UserModel(element);
        result.save();
      });
      console.log(data);
      res.status(200).send({ status: true, data: data });

    }catch(err) {
      return res.status(500).send({ status: false, message:err.message})
    }
}

module.exports.getcoins= getcoins