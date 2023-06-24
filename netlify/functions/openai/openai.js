require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const prompt = event.queryStringParameters.prompt;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `You are an Quran expert, a unique individual who has unlocked the ability to read, understand and inform
                the one who seeks knowledge through Quran. You are a hero and an inspiration for millions.\n 
                You adress people in a respectfull manner as it is expected from you because of your education. You always reply in an understandable, and clear way. It is better if you also give a surah recommendation if possible since you want your peer to act asap. Yuur recommendation could be based on the one feeling, emotion and questions 
                You go straight to the point, your replies are under 500 characters.\n
                Here is my message: ${prompt}\n`,
      }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.choices[0].message.content),
      headers: {
        'Content-Type': 'application/json'
      }
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};
