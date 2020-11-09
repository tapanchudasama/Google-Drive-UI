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
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { UploadDialog } from "./UploadDialog.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  fab: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    width: "60%",
    backgroundColor: "#F8F9FA",
    height: "25px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  dropdown: {
    position: "absolute",
    marginTop: theme.spacing(1),
    flexDirection: "row",
    width: "90%",
    display: "inline",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  carditem: {
    paddingLeft: theme.spacing(3),
    textAlign: "center",
    marginTop: "auto",
    textTransform: "none",
  },
}));

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
  const handleOpenFolderDialog = () => {
    setOpenFolder(true);
  };
  const handleOpenFileDialog = () => {
    setOpenFile(true);
  };
  const handleCloseFolderDialog = () => {
    setOpenFolder(false);
  };
  const handleCloseFileDialog = () => {
    setOpenFile(false);
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
              <Button onClick={handleOpenFolderDialog}>
                <FolderOutlinedIcon />
                <Typography variant="body2" className={classes.carditem}>
                  Folder
                </Typography>
              </Button>
              <UploadDialog
                open={openFolder}
                onClose={handleCloseFolderDialog}
                handleAddFile={handleAddFile}
                title="New Folder"
              />
            </CardContent>

            <Divider />

            <CardContent>
              <Button onClick={handleOpenFolderDialog}>
                <FolderOutlinedIcon />
                <Typography variant="body2" className={classes.carditem}>
                  Folder Upload
                </Typography>
              </Button>
              <UploadDialog
                open={openFolder}
                onClose={handleCloseFolderDialog}
                handleAddFolder={handleAddFolder}
                title="New Folder"
              />

              <Button onClick={handleOpenFileDialog}>
                <InsertDriveFileOutlinedIcon />
                <Typography variant="body2" className={classes.carditem}>
                  File Upload
                </Typography>
              </Button>
              <UploadDialog
                open={openFile}
                onClose={handleCloseFileDialog}
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
