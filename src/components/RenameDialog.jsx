import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from "@material-ui/core";

export const RenameDialog = (props) => {
  const { setViewDialog, handleRenameItem, id } = props;
  const [renameName, setRenameName] = useState(null);
  return (
    <Dialog
      open={true}
      onClose={() => setViewDialog(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Rename</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter New Name</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          type="text"
          fullWidth
          onChange={(event) => setRenameName(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setViewDialog(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setViewDialog(false);
            handleRenameItem(id, renameName);
          }}
          color="primary"
        >
          Rename
        </Button>
      </DialogActions>
    </Dialog>
  );
};
