import { GoogleGenAI } from "@google/genai";
import { Recipe } from "../types";

// Note: In a real production app, you would proxy this through a backend.
// For this demo, we assume the key is available or will handle the error gracefully.
const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const askChef = async (recipe: Recipe, question: string): Promise<string> => {
  if (!ai) {
    return "Chef AI is currently offline. Please configure the API Key.";
  }

  const prompt = `
    You are an expert culinary assistant specializing in the Ninja Creami appliance.
    
    Context Recipe:
    Title: ${recipe.title}
    Ingredients: ${recipe.ingredients.join(', ')}
    Instructions: ${recipe.instructions.join(', ')}
    
    User Question: ${question}
    
    Please provide a helpful, concise, and friendly answer. Keep it under 100 words.
    If the user asks about substitutions, suggest healthy options.
    If the user asks about texture, remind them about the "re-spin" feature.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-latest',
      contents: prompt,
    });
    return response.text || "Sorry, I couldn't think of an answer right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the kitchen server right now. Try again later.";
  }
};
