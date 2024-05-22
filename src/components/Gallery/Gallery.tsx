import React, { useState } from "react";
import styled from "styled-components";
import LargeCard from "../LargeCard/LargeCard";
import TitledBlock from "../TitledBlock/TitledBlock";

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
  const maxPages = 10;

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

  return (
    <TitledBlock title="Our special gallery" subtitle="Topics for you">
      <Cards>
        <LargeCard
          title="Charles V"
          author="Giovanni"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYjgP0Uoes2hbUVqWFPK4LFASUBRyhCBqJw&s"
        />
        <LargeCard
          title="Charles V"
          author="Giovanni"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYjgP0Uoes2hbUVqWFPK4LFASUBRyhCBqJw&s"
        />
        <LargeCard
          title="Charles V"
          author="Giovanni"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYjgP0Uoes2hbUVqWFPK4LFASUBRyhCBqJw&s"
        />
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
    </TitledBlock>
  );
};

export default Gallery;
