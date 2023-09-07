require('dotenv').config();

const bannedWords = ["blowjob", "blow job", "handjob", "hand job", "bugger", "porn"]

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateStationNames(req, res) {
  try {
    console.log('req.body is', req.body)
    const { userTheme } = req.body;
    const { quantity } = req.body;

    if (!userTheme) {
      return res
        .status(400)
        .json({ error: 'User subject is missing in the request body.' });
    }

    // check if userTheme includes any words in the bannedWords array
    if (userTheme.inclu)

    if (!quantity) {
      return res
        .status(400)
        .json({ error: 'User quantity is missing in the request body.' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Generate an array of ${quantity} strings that are fictional London Underground station names based on the user theme of ${userTheme}. The output MUST be only an array of strings with NO additional conversational text. Station names should never include the word "station". Station names should not reference existing underground station names. If the user theme contains any adult or inappropriate content, e.g. sexual, pornagraphic, racist, homophobic, etc. then the output should be "NA" as a string and NOT in an array.`,
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
