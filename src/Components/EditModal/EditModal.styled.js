import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; 
  justify-content: center;
  align-items: center;
  z-index: 1000;

`;
export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 3px solid #6BD1FF;
  width: 80%;
  max-width: 500px; /* Ajusta este valor para el tamaño máximo que desees */
  position: relative;
  background-color:#03122F;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Just Another Hand", serif;
  font-size: 120%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  border: 3px solid #6BD1FF;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 100px;
    font-family: "Cambria";
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-family: "Just Another Hand", serif;
  font-size:100%;
  &:hover {
    background-color: #2980b9;
  }
`;
