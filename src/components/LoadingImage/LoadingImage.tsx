import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
`;

const Image = styled.img<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
  aspect-ratio: 1;
  width: 100%;
`;
const LoadingImage = ({ image_id }: { image_id: string | undefined }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Image
        src={`https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        loading={isLoading}
      />
    </Wrapper>
  );
};

export default LoadingImage;