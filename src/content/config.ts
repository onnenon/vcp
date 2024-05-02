import { z, defineCollection } from "astro:content";

const questionsCollection = defineCollection({
  type: "data",
  schema: z.object({
    question: z.string(),
    choice_a: z.string(),
    choice_b: z.string(),
    choice_c: z.string(),
    choice_d: z.string(),
  }),
});

export const collections = { questions: questionsCollection };
