import { API_BASE, FIELDS_EXTENDED, FIELDS_SHORT } from "#constants/api";
import ISortType from "#types/ISortType";

export const buildSearchQuery = (
  search: string,
  page: number,
  limit: number,
  sort: ISortType
): string => {
  return `${API_BASE}/artworks/search?q=${search}&page=${page}&limit=${limit}&fields=${FIELDS_SHORT}&${
    sort.field ? `sort[${sort.field}][order]=${sort.order}&` : ""
  }query[term][is_public_domain]=true`;
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
