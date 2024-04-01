const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

/**
 * 基于给定的提示生成响应。
 * @param {Object} req - 请求对象.
 * @param {Object} res - 响应对象.
 * @returns {Promise}
 */
const textResponse = async (req, res) => {
    dotenv.config();
    // GoogleGenerativeAI 配置，默认调用环境变量，也可以将process.env.API_KEY直接换成api
    const configuration = new GoogleGenerativeAI(process.env.API_KEY,transport='rest');
    // 模型初始化
    const model = configuration.getGenerativeModel({ model: "gemini-pro" });
    try {
      const { prompt } = req.body;
      console.log(prompt)
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      res.send({ response: text });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };

exports.textResponse = textResponse;
