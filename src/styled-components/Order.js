import styled from "@emotion/styled";
import { Link as A } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #57cbb9;
`;

export const Table = styled.table`
  border: 2px solid #57cbb9;
  border-radius: 8px;
  width: 90%;
  margin: 50px 50px;
  padding: 20px;
  border-spacing: 5px;
`;

export const TableBody = styled.tbody``;

export const Head = styled.div``;

export const TableTitle = styled.thead`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TableHeaders = styled.th`
  border: 2px solid #57cbb9;
  border-radius: 8px;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  text-align: center;
  border: 2px solid #57cbb9;
  border-radius: 4px;
  padding: 5px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 20px 0;
  transition: all 0.5 ease;
  border: 1px solid #57cbb9;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => (props.type === "title" ? "0.8rem" : "1rem")};
  font-weight: ${(props) => (props.type === "title" ? 600 : 900)};
  margin-left: ${(props) => (props.type === "title" ? "20px" : "10px")};
  text-decoration: ${(props) =>
    props.type === "title" ? "none" : "underline"};
  letter-spacing: 2px;
`;

export const OrderTitle = styled.h1`
  margin: 50px 0 0 0;
  text-align: center;
  border-bottom: 2px solid #57cbb9;
  padding: 5px;
`;

export const EmptyOrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const EmptyOrderTitle = styled.h1`
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.2rem;
  font-size: 2rem;
  margin-bottom: ${(props) => props.type === "title" && "50px"};
`;

export const EmptyOrderLink = styled(A)`
  display: block;
  color: #87cbb9;
  text-decoration: none;
  padding: 20px;
  border: 2px solid #87cbb9;
  border-radius: 12px;
  transition: all 1s ease;
  font-weight: 900;
  font-size: 1.5rem;
  &: hover {
    background-color: #87cbb9;
    color: #577d86;
    transform: scale(1.2);
  }
`;
