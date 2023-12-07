export type userType = {
  id: number;
  image: string;
  name: string;
  typeAccont: string;
  posts?: PostType[];
};

type PostType = {
  id: number;
  image: string;
  content: string;
  coments: ComentsType[];
};

type ComentsType = {
  id: number;
  accont: string;
  content: string;
};
