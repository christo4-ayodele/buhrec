'use server';
import * as z from 'zod';
import bcrypt from 'bcryptjs';

//to use bcrypt in typeScript you have to install the types by typing 'npm i -D @types/bcrypt

import { RegisterSchema } from '@/lib/zodschemas';
import client from '../prismadb';
import { getUserByEmail } from './user.actions';
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  //we have to validate our values because client-side validation can always be bypassed
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password, name, program } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await client.student.create({
    data: {
      name,
      email,
      hashedPassword: hashedPassword,
      program,
    },
  });

  //TODO: Send verification token email
  return { success: 'Student Created' };
};
