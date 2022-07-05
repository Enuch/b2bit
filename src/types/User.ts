export type User = {
    id: number;
    name: string;
    email: string;
    avatar?: {
        id:string
		image_high_url:string
		image_medium_url:string
		image_low_url: string
    };
}