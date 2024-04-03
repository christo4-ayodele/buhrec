import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const ResearchSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  paperUrl: z.string(),
  program: z.string(),
});
