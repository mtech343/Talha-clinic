import { GoogleGenAI } from "@google/genai";
import { CLINIC_NAME, ADDRESS, WHATSAPP_NUMBER } from "../constants";

export const getAiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the Virtual Assistant for ${CLINIC_NAME} in Jhelum, Pakistan.
        Address: ${ADDRESS}
        Contact: ${WHATSAPP_NUMBER}
        Help patients with basic dental advice, clinic hours, and pricing information.
        Always advise that a physical checkup is mandatory for a final diagnosis.
        Be professional, warm, and encourage booking through WhatsApp.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm currently undergoing maintenance. Please contact Dr. Talha directly on WhatsApp for assistance!";
  }
};