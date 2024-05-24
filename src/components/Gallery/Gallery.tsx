import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LargeCard from "../LargeCard/LargeCard";
import TitledBlock from "../TitledBlock/TitledBlock";
import IArtwork from "../../types/IArtwork";
import Loader from "../Loader";
import Search from "../Search/Search";
import useDebounce from "../../hooks/useDebounce";
import useWindowWidth from "../../hooks/useWindowWidth";
import { buildArtworksQuery, buildSearchQuery } from "../../contsants/api";

const Cards = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
`;

const Page = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: #393939;
  &.selected {
    background-color: #f17900;
    color: #fff;
  }
`;
const PageArrow = styled(Page)`
  margin: 0 0.5rem;

  &.hidden {
    visibility: hidden;
  }
`;

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [artworks, setArtworks] = useState<IArtwork[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const windowWidth = useWindowWidth();
  const [limit, setLimit] = useState(
    windowWidth < 1280 ? (windowWidth < 768 ? 1 : 2) : 3
  );
  const search = useDebounce(searchText, 300);
  const [maxPages, setMaxPages] = useState(100);

  const genPages = () => {
    let start = Math.max(1, page - 1);
    let end = start + 3;
    if (start + 3 > maxPages) {
      end = Math.min(maxPages, start + 3);
      start = end - 3;
    }
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = genPages();

  const fetchArtworks = (): (() => void) => {
    let controller = new AbortController();
    fetch(
      search
        ? buildSearchQuery(search, page, limit)
        : buildArtworksQuery({ page, limit }),
      { signal: controller.signal }
    )
      .then((response) => response.json())
      .then((data) => {
        setMaxPages(data.pagination.total_pages);
        setArtworks(data.data);
      })
      .finally(() => setIsLoading(false))
      .catch((e) => console.log(e));
    return () => controller.abort();
  };

  useEffect(() => {
    const newLimit = windowWidth < 1280 ? (windowWidth < 768 ? 1 : 2) : 3;
    if (newLimit != limit) {
      const newPage = Math.ceil(((page - 1) * limit + 1) / newLimit);
      if (newPage != page) {
        setPage(newPage);
      }
      setLimit(newLimit);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (page != 1) {
      setPage(1);
    } else {
      return fetchArtworks();
    }
  }, [search]);

  useEffect(() => {
    return fetchArtworks();
  }, [page, limit]);

  return (
    <>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <TitledBlock title="Our special gallery" subtitle="Topics for you">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Cards>
              {artworks.map((artwork) => (
                <LargeCard key={artwork.id} artwork={artwork} />
              ))}
            </Cards>
            <Pagination>
              <PageArrow
                className={page == 1 ? "hidden" : ""}
                onClick={() => setPage((p) => p - 1)}
              >
                {"<"}
              </PageArrow>
              {pages.map((p) => (
                <Page
                  className={p == page ? "selected" : ""}
                  onClick={() => setPage(p)}
                >
                  {p}
                </Page>
              ))}
              <PageArrow
                className={page == maxPages ? "hidden" : ""}
                onClick={() => setPage((p) => p + 1)}
              >
                {">"}
              </PageArrow>
            </Pagination>
          </>
        )}
      </TitledBlock>
    </>
  );
};

export default Gallery;
