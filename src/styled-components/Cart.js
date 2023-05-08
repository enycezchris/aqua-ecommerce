import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link as A } from "react-router-dom";

export const Container = styled.div`
  background-color: #577d86;
  color: #87cbb9;
`;

export const Wrapper = styled.div`
  padding: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.1rem;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const CartInfoContainer = styled.div``;

export const MyCartInfo = styled.span`
  font-weight: 600;
  margin: 0 10px;
  font-size: 1.2rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0 0;
`;

export const ProductContainer = styled.div`
  flex: 5;
  height: 20%;
`;

export const CartSummary = styled.div`
  flex: 1;
`;

export const Summary = styled.div`
  border: 1px solid #57cbb9;
  padding: 20px;
  border-radius: 12px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.2rem;
  white-space: nowrap;
  font-size: 1.5rem;
  border-bottom: 1px solid #87cbb9;
`;

export const SummaryInfo = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "order-subtotal" ? "900" : "700")};
  font-size: ${(props) =>
    props.type === "order-subtotal" ? "1.2rem" : "1rem"};
`;

export const SummaryTotal = styled.span``;

export const SummaryShipping = styled.span``;

export const ShippingAmount = styled.span``;

export const SummaryTax = styled.span``;

export const TaxAmount = styled.span``;

export const SummaryPrice = styled.span`
  font-weight: 900;
`;

export const SummaryButton = styled.button`
  padding: 10px;
  font-weight: 600;
  background-color: #577d86;
  color: #87cbb9;
  border: 1px solid #87cbb9;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.15),
    0 17px 50px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease;
  &:hover {
    background-color: #87cbb9;
    color: #577d86;
    cursor: pointer;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 0 0;
  padding: 20px;
  border-bottom: 1px dotted #87cbb9;
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 12px;
`;

export const ProductDetails = styled.div`
  flex: 5;
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
`;

export const ProductPriceQuantityContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const ProductQuantity = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  flex-direction: ${(props) => (props.type === "qty-div" ? "column" : "row")};
  align-items: center;
`;

export const Quantity = styled.span`
  text-decoration: ${(props) => props.type === "qty" && "underline"};
  margin-bottom: ${(props) => props.type === "qty" && "10px"};
  text-align: center;
  font-weight: ${(props) => (props.type === "qty" ? 600 : 700)};
`;

export const ProductName = styled.span`
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
export const Price = styled.span`
  text-decoration: ${(props) => props.type === "price" && "underline"};
  margin-bottom: ${(props) => props.type === "price" && "15px"};
  text-align: center;
`;

export const ProductId = styled.span``;

export const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  background-color: #577d86;
  color: #87cbb9;
  border: 1px solid #87cbb9;
  border-radius: 12px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.15),
    0 17px 50px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease;
  &:hover {
    background-color: #87cbb9;
    color: #577d86;
    cursor: pointer;
  }
`;

export const AddIcon = styled(AddCircleIcon)`
  margin: 5px;
  transition: all 0.5s ease;
  &: hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const RemoveIcon = styled(RemoveCircleIcon)`
  margin: 5px;
  transition: all 0.5s ease;
  &: hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const Delete = styled(DeleteIcon)`
  transition: all 1s ease;
  &: hover {
    transform: scale(1.8);
    cursor: pointer;
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const EmptyCart = styled.h1`
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.2rem;
  font-size: 2rem;
  margin-bottom: ${(props) => props.type === "title" && "50px"};
`;

export const Link = styled(A)`
  display: block;
  color: #87cbb9;
  text-decoration: none;
  padding: 20px;
  border: 2px solid #87cbb9;
  border-radius: 12px;
  transition: all 1s ease;
  &: hover {
    background-color: #87cbb9;
    color: #577d86;
    transform: scale(1.2);
  }
`;

export const ImageLink = styled(A)`
  transition: all 0.5s ease;
  &: hover {
    transform: scale(1.2);
  }
`;
