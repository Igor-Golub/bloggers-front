import { LikeStatus } from 'shared/enums';

export interface Post {
  id: string;
  title: string;
  blogId: string;
  content: string;
  blogName: string;
  createdAt: string;
  shortDescription: string;
  extendedLikesInfo: {
    likesCount: number;
    dislikesCount: number;
    myStatus: LikeStatus;
    newestLikes: any[];
  };
}
