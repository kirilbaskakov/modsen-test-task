import { useState } from "react";
import Loader from "#components/Loader/Loader";
import * as S from "./styled";

const LoadingImage = ({
  image_id,
  alt,
}: {
  image_id: string | undefined;
  alt?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <S.Wrapper loading={isLoading}>
      {isLoading && <Loader />}
      {image_id && (
        <S.Image
          src={`https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg`}
          alt={alt ?? ""}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          loading={isLoading}
        />
      )}
    </S.Wrapper>
  );
};

export default LoadingImage;
