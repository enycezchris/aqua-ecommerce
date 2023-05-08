import styled from "styled-components";
import { Link as A } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-weight: 900;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  padding: 20px;
  border-bottom: 2px solid #57cbb9;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.2), 1px 2px 0 rgba(0, 0, 0, 0.2),
    1px 3px 0 rgba(0, 0, 0, 0.2), 1px 4px 0 rgba(0, 0, 0, 0.2),
    1px 5px 0 rgba(0, 0, 0, 0.2), 1px 6px 0 rgba(0, 0, 0, 0.2),
    1px 7px 0 rgba(0, 0, 0, 0.2), 1px 8px 0 rgba(0, 0, 0, 0.2),
    5px 13px 15px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 50%;
  border: 2px solid #57cbb9;
  border-radius: 12px;
  padding: 20px 50px 50px 50px;
  text-align: center;
  color: #57cbb9;
  box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.2), 1px 2px 0 rgba(0, 0, 0, 0.2),
    1px 3px 0 rgba(0, 0, 0, 0.2), 1px 4px 0 rgba(0, 0, 0, 0.2),
    1px 5px 0 rgba(0, 0, 0, 0.2), 1px 6px 0 rgba(0, 0, 0, 0.2),
    1px 7px 0 rgba(0, 0, 0, 0.2), 1px 8px 0 rgba(0, 0, 0, 0.2),
    5px 13px 15px black;
`;

export const Input = styled.input`
  margin: 20px 0 30px 0;
  width: 50%;
  padding: 15px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #57cbb9;
  color: #57cbb9;
  font-weight: 900;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2), 1px 1px 0 rgba(0, 0, 0, 0.2),
    1px 2px 0 rgba(0, 0, 0, 0.2), 1px 2px 0 rgba(0, 0, 0, 0.2),
    1px 2px 0 rgba(0, 0, 0, 0.2), 1px 4px 0 rgba(0, 0, 0, 0.2),
    1px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 0 rgba(0, 0, 0, 0.2),
    5px 13px 15px rgba(0, 0, 0, 0.2);
  ::placeholder {
    color: #57cbb9;
    font-weight: 900;
  }
`;

export const Button = styled.button`
  padding: 15px;
  background-color: #57cbb9;
  border: 1px solid #57cbb9;
  margin-bottom: 20px;
  color: #577d86;
  letter-spacing: 5px;
  font-weight: 900;
  width: 60%;
  white-space: nowrap;
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
