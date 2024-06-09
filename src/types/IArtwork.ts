export default interface IArtwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string | undefined;
  thumbnnail: {
    alt_text: string;
  };
  date_display?: string;
  credit_line?: string;
  dimensions?: string;
  place_of_origin?: string;
}
