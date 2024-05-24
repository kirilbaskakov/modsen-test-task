export default interface IArtwork {
  id: number;
  title: string;
  artist_title: string;
  date_display: string;
  credit_line: string;
  dimensions: string;
  image_id: string;
  thumbnnail: {
    alt_text: string;
  };
}
