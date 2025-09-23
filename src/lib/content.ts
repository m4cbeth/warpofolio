// Placeholder for a pluggable content generation system.
// By default uses an OpenAI-compatible endpoint when OPENAI_API_KEY is set.

export type ContentRequest = { prompt: string };
export type ContentResponse = { text: string };

export async function generateContent(req: ContentRequest): Promise<ContentResponse> {
  if (!process.env.OPENAI_API_KEY) {
    return { text: 'Content generation is disabled. Set OPENAI_API_KEY to enable.' };
  }
  // Implement provider call here (OpenAI-compatible). Intentionally left as placeholder.
  return { text: `Echo: ${req.prompt}` };
}

