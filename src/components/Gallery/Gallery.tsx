import { useEffect, useState } from 'react';
import LargeCard from '#components/LargeCard/LargeCard';
import TitledBlock from '#components/TitledBlock/TitledBlock';
import IArtwork from '#types/IArtwork';
import Search from '#components/Search/Search';
import useDebounce from '#hooks/useDebounce';
import useWindowWidth from '#hooks/useWindowWidth';
import { buildSearchQuery } from '#utils/buildQuery/buildQuery';
import ErrorBoundary from '#components/ErrorBoundary';
import Error from '#components/Error/Error';
import ISortType from '#types/ISortType';
import * as S from './styled';
import Pagination from '#components/Pagination/Pagination';
import generateEmptyArtworks from '#utils/generateEmptyArtworks/generateEmptyArtworks';

const Gallery = () => {
  const windowWidth = useWindowWidth();
  const [limit, setLimit] = useState(
    windowWidth < 1280 ? (windowWidth < 768 ? 1 : 2) : 3
  );
  const skeletonArtworks: IArtwork[] = generateEmptyArtworks(limit);
  const [artworks, setArtworks] = useState<IArtwork[]>(skeletonArtworks);
  const [searchText, setSearchText] = useState('');
  const search = useDebounce(searchText, 300);
  const [sortType, setSortType] = useState<ISortType>({
    field: undefined,
    order: 'asc',
  });
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(100);
  const [isError, setIsError] = useState(false);

  const fetchArtworks = (): (() => void) => {
    setArtworks(generateEmptyArtworks(limit));
    const controller = new AbortController();
    fetch(buildSearchQuery(search, page, limit, sortType), {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setMaxPages(data.pagination.total_pages);
        setArtworks(data.data);
      })
      .catch((e) => {
        if (e.name !== 'AbortError') {
          setIsError(true);
        }
      });
    return () => controller.abort();
  };

  useEffect(() => {
    const newLimit = windowWidth < 1280 ? (windowWidth < 768 ? 1 : 2) : 3;
    if (newLimit !== limit) {
      const newPage = Math.ceil(((page - 1) * limit + 1) / newLimit);
      if (newPage !== page) {
        setPage(newPage);
      }
      setLimit(newLimit);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    } else {
      return fetchArtworks();
    }
  }, [search]);

  useEffect(() => {
    return fetchArtworks();
  }, [page, limit, sortType]);

  return (
    <ErrorBoundary>
      <Search
        setSearchText={setSearchText}
        sortType={sortType}
        setSortType={setSortType}
      />
      <TitledBlock title="Our special gallery" subtitle="Topics for you">
        {isError ? (
          <Error />
        ) : artworks.length ? (
          <>
            <S.Cards>
              {artworks.map((artwork) => (
                <LargeCard key={artwork.id} artwork={artwork} />
              ))}
            </S.Cards>
            <Pagination page={page} setPage={setPage} maxPages={maxPages} />
          </>
        ) : (
          <>
            <h1>No result were found</h1>
            <h2>We couldn't found what you're searching for</h2>
          </>
        )}
      </TitledBlock>
    </ErrorBoundary>
  );
};

export default Gallery;
