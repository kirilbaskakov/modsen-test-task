import React, { useEffect, useState } from "react";
import FavButton from "#components/FavButton/FavButton";
import IArtwork from "#types/IArtwork";
import LoadingImage from "#components/LoadingImage/LoadingImage";
import Loader from "#components/Loader/Loader";
import { buildDetailsQuery } from "#utils/buildQuery/buildQuery";
import ErrorBoundary from "#components/ErrorBoundary";
import Error from "#components/Error/Error";
import * as S from "./styled";

const Details = ({ id }: { id: number }) => {
  const [artwork, setArtwork] = useState<IArtwork | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetch(buildDetailsQuery(id))
      .then((response) => response.json())
      .then((data) => {
        setArtwork(data.data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <S.DetailsWrapper>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <ErrorBoundary>
          <S.ImageWrapper>
            <LoadingImage
              image_id={artwork?.image_id}
              size="large"
              alt={artwork?.thumbnnail?.alt_text ?? artwork?.title}
            />
            <S.FavButtonWrapper>
              <FavButton id={id} />
            </S.FavButtonWrapper>
          </S.ImageWrapper>
          <div>
            <S.Title>{artwork?.title}</S.Title>
            <S.Author>
              {artwork?.artist_title ? artwork?.artist_title : "Unknown"}
            </S.Author>
            <S.Year>{artwork?.date_display}</S.Year>
            <S.OverviewWrapper>
              <S.Title>Overview</S.Title>
              <S.OverviewList>
                <S.OverviewItem>
                  <S.Hightlighted>Artist's place of origin:</S.Hightlighted>{" "}
                  {artwork?.place_of_origin ?? "Unknown"}
                </S.OverviewItem>
                <S.OverviewItem>
                  <S.Hightlighted>Dimensions Sheet:</S.Hightlighted>{" "}
                  {artwork?.dimensions}
                </S.OverviewItem>
                <S.OverviewItem>
                  <S.Hightlighted>Credit Line:</S.Hightlighted>{" "}
                  {artwork?.credit_line}
                </S.OverviewItem>
              </S.OverviewList>
            </S.OverviewWrapper>
          </div>
        </ErrorBoundary>
      )}
    </S.DetailsWrapper>
  );
};

export default Details;
