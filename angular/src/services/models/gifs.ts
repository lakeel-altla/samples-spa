export interface Gifs {
    data: [Gif];
}

export interface Gif {
    slug: string;
    images: Images;
}

export interface Images {
    fixed_height: FixedHeight;
}

export interface FixedHeight {
    url: string;
}