import { Dispatch, SetStateAction, useState } from "react";
import SortIcon from "#assets/sort.svg";
import styled from "styled-components";
import ISortType from "#types/ISortType";

const SortIconStyled = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  width: 280px;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? "200px" : "0px")};
  background-color: rgb(220, 220, 220);
  border-radius: 8px;
  z-index: 2;
  transition: 0.2s ease-in;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  padding: 1rem 0;
  color: #393939;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  text-decoration: none;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const SortMenu = ({
  sortType,
  setSortType,
}: {
  sortType: ISortType;
  setSortType: Dispatch<SetStateAction<ISortType>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortTypes: { text: string; sortType: ISortType }[] = [
    { text: "No sorting", sortType: { field: undefined, order: "asc" } },
    {
      text: "Sort by pageviews descending",
      sortType: { field: "pageviews", order: "desc" },
    },
    {
      text: "Sort by date descending",
      sortType: { field: "date_end", order: "desc" },
    },
    {
      text: "Sort by date ascending",
      sortType: { field: "date_end", order: "asc" },
    },
  ];
  return (
    <>
      <SortIconStyled src={SortIcon} onClick={() => setIsOpen(true)} />
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
      <Dropdown isOpen={isOpen}>
        {sortTypes.map(({ text, sortType: sType }) => (
          <DropdownItem onClick={() => setSortType(sType)}>
            {text +
              (sType.field == sortType.field && sType.order == sortType.order
                ? " ✓"
                : "")}
          </DropdownItem>
        ))}
      </Dropdown>
    </>
  );
};

export default SortMenu;
