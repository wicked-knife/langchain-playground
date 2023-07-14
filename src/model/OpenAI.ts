import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY, 
}, {
  basePath: 'https://ai.fakeopen.com/v1'
});


export default model;