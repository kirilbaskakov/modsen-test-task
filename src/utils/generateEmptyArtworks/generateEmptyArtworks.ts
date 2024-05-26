import IArtwork from "#types/IArtwork";

const generateEmptyArtworks = (amount: number, ids?: number[]): IArtwork[] => {
  const emptyArtwork = {
    title: "",
    artist_title: "",
    thumbnnail: { alt_text: "" },
    image_id: undefined,
  };
  if (ids) {
    return ids.map((id) => ({
      ...emptyArtwork,
      id,
    }));
  }
  return Array(amount)
    .fill(0)
    .map((_, id) => ({
      ...emptyArtwork,
      id,
    }));
};

export default generateEmptyArtworks;
