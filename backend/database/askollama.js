const axios = require('axios');

async function askOllama(prompt) {
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3',
      prompt: prompt,
      stream: false, // Set to true if you prefer a streaming response
    });

    // Access the 'response' field from the final response object
    return response.data.response;
  } catch (err) {
    console.error('Ollama API Error:', err.message);
    throw err;
  }
}

module.exports = askOllama;
