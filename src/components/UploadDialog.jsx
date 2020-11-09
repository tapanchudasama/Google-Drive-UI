import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";

export const UploadDialog = (props) => {
  const { open, onClose, title, handleAddFile, handleAddFolder } = props;
  const [inputVal, setInputVal] = useState("");

  const handleClose = () => {
    onClose();
  };
  const handleAddData = () => {
    onClose();
    handleAddFolder !== undefined
      ? handleAddFolder(inputVal)
      : handleAddFile(inputVal);
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={title + " name"}
          type="text"
          fullWidth
          onChange={(event) => setInputVal(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleAddData}
          color="primary"
          variant="contained"
          disableElevation
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
