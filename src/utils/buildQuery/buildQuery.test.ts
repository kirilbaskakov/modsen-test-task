import { API_BASE, FIELDS_EXTENDED, FIELDS_SHORT } from "#constants/api";
import {
  buildArtworksQuery,
  buildDetailsQuery,
  buildSearchQuery,
} from "./buildQuery";

test("buildSearchQueryWithoutSort", () => {
  const url = new URL(
    buildSearchQuery("search", 1, 10, { field: "undefined", order: "asc" })
  );
  expect(url.origin + url.pathname).toBe(`${API_BASE}/artworks/search`);
  expect(url.searchParams.get("q")).toBe("search");
  expect(url.searchParams.get("page")).toBe("1");
  expect(url.searchParams.get("limit")).toBe("10");
  expect(url.searchParams.get("sort")).toBeNull();
  expect(url.searchParams.get("fields")).toBe(FIELDS_SHORT);
});

test("buildSearchQueryWithSort", () => {
  const url = new URL(
    buildSearchQuery("search", 1, 10, { field: "date_end", order: "asc" })
  );
  expect(url.origin + url.pathname).toBe(`${API_BASE}/artworks/search`);
  expect(url.searchParams.get("q")).toBe("search");
  expect(url.searchParams.get("page")).toBe("1");
  expect(url.searchParams.get("limit")).toBe("10");
  expect(url.searchParams.get("sort[date_end][order]")).toBe("asc");
  expect(url.searchParams.get("fields")).toBe(FIELDS_SHORT);
});

test("buildDetailsQuery", () => {
  const url = new URL(buildDetailsQuery(123));
  expect(url.origin + url.pathname).toBe(`${API_BASE}/artworks/123`);
  expect(url.searchParams.get("fields")).toBe(FIELDS_EXTENDED);
});

test("buildArtworksQuery", () => {
  const url = new URL(buildArtworksQuery({ page: 1, limit: 10 }));
  expect(url.origin + url.pathname).toBe(`${API_BASE}/artworks`);
  expect(url.searchParams.get("page")).toBe("1");
  expect(url.searchParams.get("limit")).toBe("10");
  expect(url.searchParams.get("fields")).toBe(FIELDS_SHORT);
});

test("buildArtworksQueryWithIds", () => {
  const url = new URL(buildArtworksQuery({ ids: "1,2,3" }));
  expect(url.origin + url.pathname).toBe(`${API_BASE}/artworks`);
  expect(url.searchParams.get("ids")).toBe("1,2,3");
  expect(url.searchParams.get("fields")).toBe(FIELDS_SHORT);
});
