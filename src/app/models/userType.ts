export type userType = {
  id: number;
  image: string;
  name: string;
  typeAccont: string;
  posts: PostType[];
};

export type PostType = {
  id: number;
  idUser: number;
  image: string;
  content: string;
  coments: ComentsType[];
};

type ComentsType = {
  id: number;
  idUser: number;
  accont: string;
  content: string;
};
