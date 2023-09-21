export interface ImageData {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
  likes: number;
  user: {
    username: string;
    name: string;
    location: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  tags: Array<{ title: string }>;
}
