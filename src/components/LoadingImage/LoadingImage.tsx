import { useState } from 'react';
import Loader from '#components/Loader/Loader';
import * as S from './styled';
import IImageSizes from '#types/IImageSizes';
import { IMAGE_SIZES } from '#constants/imageSizes';

const LoadingImage = ({
  image_id,
  size,
  alt,
}: {
  image_id: string | undefined;
  size: keyof IImageSizes;
  alt?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <S.Wrapper loading={isLoading}>
      {isLoading && <Loader />}
      {image_id && (
        <S.Image
          src={`https://www.artic.edu/iiif/2/${image_id}/full/${IMAGE_SIZES[size]},/0/default.jpg`}
          alt={alt ?? ''}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          loading={isLoading}
        />
      )}
    </S.Wrapper>
  );
};

export default LoadingImage;
