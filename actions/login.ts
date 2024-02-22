'use server';
import * as z from 'zod';

import { LoginSchema } from '@/schemas';
export const login = async (values: z.infer<typeof LoginSchema>) => {
  //we have to validate our values because client-side validation can always be bypassed
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
};
