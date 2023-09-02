require('dotenv').config();
// openaiController.js

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateStationNames(req, res) {
  try {
    const { userTheme } = req.body;

    if (!userTheme) {
      return res
        .status(400)
        .json({ error: 'User subject is missing in the request body.' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Give 10 simple London Underground station names based on the subject, ${userTheme} as an array of strings.`,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Handle the response here
    const generatedStationNames = response.choices[0].message.content;
    return res.status(200).json({ generatedStationNames });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'An error occurred while generating station names.' });
  }
}

module.exports = generateStationNames;
