import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLoveMessage = async (name: string, tone: 'romantic' | 'funny' | 'poetic'): Promise<string> => {
  try {
    const prompt = `
      Buatkan ucapan selamat Hari Valentine yang ${tone} dalam bahasa Indonesia untuk seseorang bernama "${name}".
      Ucapan ini harus tulus, menyentuh hati (atau lucu jika nadanya lucu), dan tidak terlalu panjang (maksimal 3-4 kalimat).
      Jangan gunakan markdown formatting yang berlebihan, cukup teks plain yang rapi.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Speed over complex reasoning for simple text
      }
    });

    return response.text || "Selamat Hari Valentine! Aku mencintaimu.";
  } catch (error) {
    console.error("Error generating message:", error);
    return "Selamat Hari Valentine untuk orang terspesial dalam hidupku. Terima kasih telah menjadi alasan bahagiaku setiap hari.";
  }
};