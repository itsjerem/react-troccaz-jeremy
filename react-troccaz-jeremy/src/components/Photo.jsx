import styled from '@emotion/styled'

const Photo = ({ src }) => {
  return <PhotoContainer src={src} />
}

const PhotoContainer = styled.img`
    border-radius: 0.5rem;
    width: 500px;
    height: 500px;
    `;

export default Photo;