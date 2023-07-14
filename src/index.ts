import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import model from './model/OpenAI.ts';

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    hl: "en",
    gl: "us",
  }),
  new Calculator(),
];

const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "zero-shot-react-description",
});
console.log("Loaded agent.");

const input =
  "Who is the current President of the United States?" +
  " What is the result when his age is divided by 3?";
console.log(`Executing with input "${input}"...`);

const result = await executor.call({ input });

console.log(`Got output ${result.output}`);