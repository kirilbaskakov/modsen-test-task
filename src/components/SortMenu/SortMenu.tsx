import { Dispatch, SetStateAction, useState } from "react";
import SortIcon from "#assets/sort.svg";
import ISortType from "#types/ISortType";
import * as S from "./styled";

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
      <S.SortIconStyled src={SortIcon} onClick={() => setIsOpen(true)} />
      {isOpen && <S.Overlay onClick={() => setIsOpen(false)} />}
      <S.Dropdown isOpen={isOpen}>
        {sortTypes.map(({ text, sortType: sType }) => (
          <S.DropdownItem onClick={() => setSortType(sType)}>
            {text +
              (sType.field == sortType.field && sType.order == sortType.order
                ? " ✓"
                : "")}
          </S.DropdownItem>
        ))}
      </S.Dropdown>
    </>
  );
};

export default SortMenu;
