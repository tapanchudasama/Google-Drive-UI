import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Menu,
  Fab,
  Typography,
  MenuItem,
  Divider,
  ClickAwayListener,
} from "@material-ui/core";
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
  menuitem: {
    paddingLeft: theme.spacing(3),
    textAlign: "center",
    marginTop: "auto",
    textTransform: "none",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    elevation: "5",
    width: "15%",
  },
})((props) => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export const Temp = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openFolder, setOpenFolder] = useState(false);
  const [openFile, setOpenFile] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAway = () => {
    setAnchorEl(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenFolder(false);
    setOpenFile(false);
  };

  const handleClickOpenFolder = () => {
    setOpenFolder(true);
  };

  const handleClickOpenFile = () => {
    setOpenFile(true);
    console.log(openFile);
  };
  const handleCloseFolder = () => {
    setOpenFolder(false);
  };
  const handleCloseFile = () => {
    console.log("CAlled");
    setOpenFile(false);
    console.log(openFile);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Fab variant="extended" className={classes.fab} onClick={handleClick}>
          <AddIcon className={classes.extendedIcon} />
          New
        </Fab>
        <StyledMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClickOpenFolder}>
            <FolderOutlinedIcon />
            <Typography variant="subtitle2" className={classes.menuitem}>
              Folder
            </Typography>
            <UploadDialog
              open={openFolder}
              onClose={handleCloseFolder}
              title="New Folder"
            />
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClickOpenFolder}>
            <FolderOutlinedIcon />
            <Typography variant="subtitle2" className={classes.menuitem}>
              New Folder
            </Typography>
            <UploadDialog
              open={openFolder}
              onClose={handleCloseFolder}
              title="New Folder"
            />
          </MenuItem>
          <MenuItem onClick={handleClickOpenFile}>
            <InsertDriveFileOutlinedIcon />
            <Typography variant="subtitle2" className={classes.menuitem}>
              New File
            </Typography>
            <UploadDialog
              open={openFile}
              onClose={handleCloseFile}
              title="New File"
            />
          </MenuItem>
        </StyledMenu>
      </div>
    </ClickAwayListener>
  );
};
