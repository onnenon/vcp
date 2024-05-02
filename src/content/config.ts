import { z, defineCollection } from "astro:content";

const questionsCollection = defineCollection({
  type: "data",
  schema: z.object({
    question: z.string(),
    choices: z.array(z.string()),
  }),
});

export const collections = { questions: questionsCollection };
