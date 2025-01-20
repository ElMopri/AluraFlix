import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; 
  
`;

export const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  position:center;
`;

export const BannerImg = styled.img`
  width: 30%;
  border-radius: 15px;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
  margin: 5%;
`;

export const BannerContent = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
   font-family: "Cookie", serif;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
  font-family: "Just Another Hand", serif;
  font-weight: 500;
  font-style: normal;
  margin-left:8%;

`;

export const BannerDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 0 8%;
  font-family: "Patua One";
  font-style:none;
`;
