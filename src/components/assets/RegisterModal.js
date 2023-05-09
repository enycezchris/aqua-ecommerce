import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import {
  style,
  Button,
  Text,
  TextContainer,
  CheckBox,
} from "../../styled-components/RegisterModal";

const RegisterModal = ({ email, password, username }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <Button
        disabled={!email || !password || !username}
        onClick={() => {
          handleOpen();
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }}
      >
        Register
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextContainer>
            <CheckBox>✅</CheckBox>
            <Text>Register Successful!</Text>
          </TextContainer>
        </Box>
      </Modal>
    </>
  );
};

export default RegisterModal;
