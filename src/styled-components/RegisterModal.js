import styled from "styled-components";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#577d86",
  border: "2px solid #57cbb9",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

export const Button = styled.button`
  padding: 15px;
  background-color: #57cbb9;
  border: 1px solid #57cbb9;
  margin-bottom: 20px;
  color: #577d86;
  letter-spacing: 5px;
  font-weight: 900;
  width: 100%;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.5s ease;
  text-transform: uppercase;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2), 1px 1px 0 rgba(0, 0, 0, 0.2),
    1px 2px 0 rgba(0, 0, 0, 0.2), 1px 2px 0 rgba(0, 0, 0, 0.2),
    1px 2px 0 rgba(0, 0, 0, 0.2), 1px 4px 0 rgba(0, 0, 0, 0.2),
    1px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 0 rgba(0, 0, 0, 0.2),
    5px 13px 15px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 1);
  &: hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckBox = styled.p`
font-size: 1.2rem;`;

export const Text = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: 1rem;
  color: #57cbb9;
  letter-spacing: 5px;
  white-space: nowrap;
`;
