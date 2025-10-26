import { Injectable } from '@angular/core';
import { GoogleGenAI } from "@google/genai";

@Injectable({
  providedIn: 'root'
})

export class GoogleService {
  
  constructor() {}
  
  
  async analitic(question: string) {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyAL_61fvqxKmnyTkRMt2azTRByyyc7umQ8" });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
    });
    return response.text;
  }  
}
