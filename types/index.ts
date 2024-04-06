export type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

export type uploadPaperParams = {
  userId: string;
  paper: {
    title: string;
    program: string;
    paperUrl: string;
  };
  path: string;
};
