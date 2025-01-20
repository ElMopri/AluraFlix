import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 25%;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  color: #fff;
  padding: 1%;
  border-radius: 8px;
  font-family: "Just Another Hand", serif;
  font-size: 2.5rem;
  text-align:center;
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
