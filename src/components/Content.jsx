import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import {
  Link as RouterLink,
  useHistory,
  MemoryRouter as Router,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "80%",
    marginLeft: "18%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  griditem: {
    width: "227px",
    height: "48px",
    fontSize: "18px",
  },
  text: {
    padding: theme.spacing(0, 3),
    display: "inline",
    lineHeight: "48px",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  icon: {
    marginRight: "25px",
    verticalAlign: "middle",
    color: "#5F6368",
  },
}));

const initialState = {
  mouseX: null,
  mouseY: null,
};

export const Content = (props) => {
  const {
    contents,
    handleTileClick,
    handleDeleteItem,
    handleRenameItem,
  } = props;
  const [state, setState] = useState(initialState);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState(null);

  let history = useHistory();
  const classes = useStyles();

  const handleClick = (event) => {
    handleTileClick(event.target.id);
    setSelectedItemId(event.target.id);
    setSelectedItemName(event.target.innerText);
    history.push({ pathname: `/${event.target.innerText}` });
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    setSelectedItemId(event.target.id);
    setSelectedItemName(event.target.innerText);
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  const handleDelete = (event) => {
    handleDeleteItem(selectedItemId);
  };

  const handleRename = (event) => {
    handleRenameItem(selectedItemId, selectedItemName);
  };

  return (
    <Router>
      <div onContextMenu={handleRightClick} style={{ cursor: "context-menu" }}>
        <main className={classes.content}>
          <Grid container spacing={1}>
            {contents.map((curr) => {
              return (
                <>
                  <Grid
                    item
                    xs={3}
                    key={curr.id}
                    onClick={handleClick}
                    id={curr.id}
                  >
                    <Paper
                      variant="outlined"
                      className={classes.griditem}
                      id={curr.id}
                    >
                      <Typography className={classes.text} id={curr.id}>
                        <FolderIcon className={classes.icon} />
                        {curr.file}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Menu
                    keepMounted
                    open={state.mouseY !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                      state.mouseY !== null && state.mouseX !== null
                        ? { top: state.mouseY, left: state.mouseX }
                        : undefined
                    }
                  >
                    <MenuItem onClick={handleClose}>
                      <Button onClick={handleRename}>Rename</Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button onClick={handleDelete}>Delete</Button>
                    </MenuItem>
                  </Menu>
                </>
              );
            })}
          </Grid>
        </main>
      </div>
    </Router>
  );
};
