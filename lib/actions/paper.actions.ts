'use server';

import { uploadPaperParams } from '@/types';
import { handleError } from '../utils';
import ResearchPaper from '../database/models/researchPaper.model';
import { connectToDB } from '../database';
import User from '../database/models/user.model';
import { revalidatePath } from 'next/cache';

export const uploadPaper = async ({
  userId,
  paper,
  path,
}: uploadPaperParams) => {
  try {
    await connectToDB();

    const writer = await User.findById(userId);
    if (!writer) throw new Error('Writer not found');

    const newPaper = await ResearchPaper.create({
      ...paper,
      writer: userId,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newPaper));
  } catch (error) {
    handleError(error);
  }
};
