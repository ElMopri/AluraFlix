import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 18.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  margin-bottom:15px;
  padding:5px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color: #39e80e;
  }
`;
