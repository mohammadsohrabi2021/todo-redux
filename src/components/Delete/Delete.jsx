import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { deleteCardItem } from "../redux/reducer/Reducer";
import { useDispatch } from "react-redux";
const Delete = ({ todo }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelet = (id) => {
    dispatch(deleteCardItem(id));
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="outline"
        onClick={handleClickOpen}
        sx={{ cursor: "pointer" }}
      >
        <DeleteIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
          {"آیا از حذف این آیتم مطمئن هستید ؟"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{"خیر"}</Button>
          <Button onClick={() => handleDelet(todo.id)} autoFocus>
          {"بله "}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Delete;
