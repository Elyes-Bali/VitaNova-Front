export interface Posts {
  idPosts: number;
  idOwner: number;
  comments: Comments[];
  description: string;
  post: string;
  imageP: string;
}

export interface Comments {
  idComments: number;
  createdDate: Date;
  comment: string;
  idOwner: number;
}


