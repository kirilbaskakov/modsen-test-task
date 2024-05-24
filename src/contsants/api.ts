export const API_BASE = "https://api.artic.edu/api/v1";

export const FIELDS_SHORT = "id,image_id,title,artist_title,thumbnail";
export const FIELDS_EXTENDED =
  "id,image_id,title,artist_title,date_display,credit_line,dimensions,thumbnail,artist_display";

export const buildSearchQuery = (
  search: string,
  page: number,
  limit: number
): string => {
  return `${API_BASE}/artworks/search?q=${search}&page=${page}&limit=${limit}&fields=${FIELDS_SHORT}&query[term][is_public_domain]=true`;
};

export const buildDetailsQuery = (id: number): string => {
  return `${API_BASE}/artworks/${id}?fields=${FIELDS_EXTENDED}`;
};

export const buildArtworksQuery = (params: {
  page?: number;
  limit?: number;
  ids?: string;
}) => {
  const query = Object.entries({
    ...params,
    fields: FIELDS_SHORT,
  })
    .map((entry) => entry[0] + "=" + entry[1])
    .join("&");
  return `${API_BASE}/artworks?${query}&query[term][is_public_domain]=true`;
};
