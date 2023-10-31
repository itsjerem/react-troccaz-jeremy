import styled from '@emotion/styled'

const Avatar = ({ src }) => {
  return <AvatarContainer src={src} />
}

const AvatarContainer = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    `;

    export default Avatar;