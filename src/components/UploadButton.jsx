import React, { useState } from "react";
import {
  Fab,
  Card,
  CardContent,
  ClickAwayListener,
  Grow,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { UploadDialog } from "./UploadDialog.jsx";
import { useStyles } from "./UploadButtonStyles";

export const UploadButton = (props) => {
  const classes = useStyles();
  const { handleAddFile, handleAddFolder } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [openFolder, setOpenFolder] = useState(false);
  const [openFile, setOpenFile] = useState(false);

  const handleClickMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpenMenu(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Fab
          variant="extended"
          aria-label="add"
          className={classes.fab}
          onClick={handleClickMenu}
        >
          <AddIcon className={classes.extendedIcon} />
          New
        </Fab>
        <Grow in={openMenu}>
          <Card className={classes.dropdown} elevation={5}>
            <CardContent>
              <Button onClick={() => setOpenFolder(true)}>
                <FolderOutlinedIcon />
                <Typography variant="button" className={classes.carditem}>
                  Folder
                </Typography>
              </Button>
              <UploadDialog
                open={openFolder}
                onClose={() => setOpenFolder(false)}
                handleAddFile={handleAddFile}
                title="New Folder"
              />
            </CardContent>

            <Divider />

            <CardContent>
              <Button onClick={() => setOpenFolder(true)}>
                <FolderOutlinedIcon />
                <Typography variant="button" className={classes.carditem}>
                  Folder Upload
                </Typography>
              </Button>
              <UploadDialog
                open={openFolder}
                onClose={() => setOpenFolder(false)}
                handleAddFolder={handleAddFolder}
                title="New Folder"
              />

              <Button onClick={() => setOpenFile(true)}>
                <InsertDriveFileOutlinedIcon />
                <Typography variant="button" className={classes.carditem}>
                  File Upload
                </Typography>
              </Button>
              <UploadDialog
                open={openFile}
                onClose={() => setOpenFile(false)}
                handleAddFile={handleAddFile}
                title="New File"
              />
            </CardContent>
          </Card>
        </Grow>
      </div>
    </ClickAwayListener>
  );
};
