export class video {
    id?: string;
    videoSrc?: string;
    poster?: string;
    name?: string;
    description?: string;
    duration?: number;
    dateAdd?: number;
    likes?: number;
    dislike?: number;
    hitCount?: number;
}
export class Comment {
    id?: string;
    id_post?: string;
    comment?: string;
    sender?: string;
    email?: string;
    avatar?: string;
    dateAdd?: number;
    likes?: number;
    dislike?: number;
}
export class User {
    username?: string;
    password?: string;
    email?: string;
    token?: string;
    avatar?: string;
}