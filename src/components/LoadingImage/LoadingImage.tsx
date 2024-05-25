import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  background-color: rgba(57, 57, 57, 0.05);
`;

const Image = styled.img<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
  aspect-ratio: 1;
  width: 100%;
`;

const LoadingImage = ({
  image_id,
  alt,
}: {
  image_id: string | undefined;
  alt?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {image_id && (
        <Image
          src={`https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg`}
          alt={alt ?? ""}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          loading={isLoading}
        />
      )}
    </Wrapper>
  );
};

export default LoadingImage;
