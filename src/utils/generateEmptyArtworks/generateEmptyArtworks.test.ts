import generateEmptyArtworks from "./generateEmptyArtworks";

test("generateWithoutIds", () => {
  const arr = generateEmptyArtworks(2);
  expect(arr).toEqual([
    {
      id: 0,
      title: "",
      artist_title: "",
      thumbnnail: { alt_text: "" },
      image_id: undefined,
    },
    {
      id: 1,
      title: "",
      artist_title: "",
      thumbnnail: { alt_text: "" },
      image_id: undefined,
    },
  ]);
});

test("generateWithIds", () => {
  const arr = generateEmptyArtworks(2, [5, 6]);
  expect(arr).toEqual([
    {
      id: 5,
      title: "",
      artist_title: "",
      thumbnnail: { alt_text: "" },
      image_id: undefined,
    },
    {
      id: 6,
      title: "",
      artist_title: "",
      thumbnnail: { alt_text: "" },
      image_id: undefined,
    },
  ]);
});
