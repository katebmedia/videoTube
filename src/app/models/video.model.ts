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
export class comment {
    id?:string;
    id_post?:string;
    comment?:string;
    sender?:string;
    email?:string;
    avatar?:string;
}