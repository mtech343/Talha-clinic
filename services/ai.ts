
import { GoogleGenAI } from "@google/genai";
import { CLINIC_NAME, ADDRESS, WHATSAPP_NUMBER, SERVICES } from "../constants";

export const getAiResponse = async (userMessage: string) => {
  try {
    // Initializing with the latest Gemini 3 Pro Preview model
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Create a detailed context string from existing services
    const servicesList = SERVICES.map(s => `${s.title}: ${s.description}`).join('\n');

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userMessage,
      config: {
        systemInstruction: `
          You are the "Smart Dental Concierge" for ${CLINIC_NAME}.
          
          CLINIC CONTEXT:
          - Location: ${ADDRESS} (Jada, Jhelum).
          - Primary Doctor: Dr. Talha Liaquat.
          - Contact for Booking: ${WHATSAPP_NUMBER} (WhatsApp).
          - Operating Hours: Mon-Sat, 11:00 AM to 9:00 PM. Sunday is Closed.
          
          SERVICES WE PROVIDE:
          ${servicesList}
          
          TONE & PERSONALITY:
          - Professional, empathetic, and reassuring. 
          - Use a mix of English and simple Urdu phrases if the user uses them (as we are in Jhelum).
          - Be concise but helpful.
          
          STRICT RULES:
          1. NEVER provide a final medical diagnosis. Always say "Based on your description, it could be X, but Dr. Talha needs to examine you physically to be sure."
          2. If the user asks about pain, suggest an urgent appointment.
          3. If the user asks for "prices", explain that costs vary based on the case, but we offer competitive and fair pricing in Jhelum.
          4. ALWAYS encourage the user to click the WhatsApp button or use the number ${WHATSAPP_NUMBER} to book an appointment.
          5. If asked about location, mention we are near Old G T Road in Mujahid Abad Jada.
        `,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini 3 Pro Error:", error);
    return "I'm experiencing a high volume of inquiries. Please click the WhatsApp button below to speak directly with our clinic staff!";
  }
};
