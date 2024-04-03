interface HeaderLink {
  label: string;
  route: string;
}

interface NestedHeaderLink extends HeaderLink {
  routes: HeaderLink[];
}

export type CombinedHeaderLink = HeaderLink | NestedHeaderLink;

export const headerLinks: CombinedHeaderLink[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About Us',
    route: '/about',
  },
  {
    label: 'Help',
    route: '/help',
  },
  // {
  //   label: 'Login',
  //   route: '/login', // Add a default route for the Login item
  //   routes: [
  //     {
  //       label: 'Student/Researcher',
  //       route: '/student-researcher',
  //     },
  //     {
  //       label: 'Admin',
  //       route: '/admin',
  //     },
  //     {
  //       label: 'Reviewer',
  //       route: '/reviewer',
  //     },
  //   ],
  // },
];

export const welcomeText = 'Welcome to BUHREC';

export const aboutTextHead = 'What is BUHREC?';

export const aboutText1 = {
  headText:
    "Welcome to BUHREC - Babcock University's Research Paper Evaluation Center!",
  subText:
    "At BUHREC, we're dedicated to fostering academic excellence and integrity by providing a platform for the evaluation of research papers submitted by students, faculty, and researchers within Babcock University and beyond. Our mission is to uphold the highest standards of scholarly inquiry while nurturing a culture of integrity, rigor, and collaboration within the academic community.",
};

export const aboutText2 = {
  headText:
    "Welcome to BUHREC - Babcock University's Research Paper Evaluation Center!",
  subText:
    'Driven by a commitment to quality and fairness, BUHREC offers a transparent and objective evaluation process, ensuring that every research paper undergoes thorough scrutiny by experienced reviewers with expertise in diverse fields. We believe in the transformative power of research and the importance of ensuring that scholarly work meets rigorous standards of excellence',
};

export const aboutText3 = {
  headText:
    "Welcome to BUHREC - Babcock University's Research Paper Evaluation Center!",
  subText:
    'At BUHREC, we understand the importance of collaboration and knowledge sharing in advancing scholarly discourse. Through our platform, researchers have the opportunity to receive constructive feedback, engage in meaningful discussions, and refine their work to achieve the highest levels of excellence.',
};

export const researchDefaultValues = {
  title: '',
  program: '',
  paperUrl: '',
};
