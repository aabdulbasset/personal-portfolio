type Project = {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  liveURL: string;
  githubURL: string;
  technologies: Technology[];
};

type Technology = {
  name: string;
  color: string;
};
