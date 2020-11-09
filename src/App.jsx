import React from "react";
import { Content } from "./components/Content.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { v4 as uuidv4 } from "uuid";
import cloneDeep from "lodash.clonedeep";
import { Link as RouterLink } from "react-router-dom";
import { Route, MemoryRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import data from "./data.json";

const customHistory = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: data,
      breadcrumbs: [],
    };
  }

  handleTileClick = (id) => {
    for (const obj of this.state.data.contents) {
      if (id === obj.id) {
        this.setState({
          data: obj,
          breadcrumbs: [...this.state.breadcrumbs, obj],
        });
        break;
      }
    }
  };

  handleState = (data) => {
    this.setState({
      data: data,
      breadcrumbs: [],
    });
  };

  handleAddFile = (filename) => {
    const obj = {
      id: uuidv4(),
      file: filename,
      type: "file",
      contents: filename,
    };
    const resState = [...this.state.data.contents, obj];
    this.setState({
      data: {
        id: "home",
        type: "dir",
        file: "root",
        contents: resState,
      },
    });
  };

  handleAddFolder = (foldername) => {
    const obj = {
      id: uuidv4(),
      file: foldername,
      type: "dir",
      contents: [],
    };
    const resState = [...this.state.data.contents, obj];
    this.setState({
      data: {
        id: "home",
        type: "dir",
        file: "root",
        contents: resState,
      },
    });
  };

  handleRenameItem = (id, name) => {
    // let resState = cloneDeep(this.state.data);
    // var item = resState.contents.find((x) => x.id === id);
    // item.file = name;
    // this.setState({
    //   data: {
    //     contents: resState,
    //   },
    // });
  };

  handleDeleteItem = (id) => {
    const resState = this.state.data.contents.filter((obj) => {
      if (obj.id === id) {
        return false;
      }
      return true;
    });

    this.setState({
      data: {
        id: "home",
        type: "dir",
        file: "root",
        contents: resState,
      },
    });
  };
  render() {
    return (
      <Router history={customHistory}>
        <Sidebar
          handleAddFile={this.handleAddFile}
          handleAddFolder={this.handleAddFolder}
        />
        <Navigation
          data={this.state.data}
          setState={this.handleState}
          breadcrumbs={this.state.breadcrumbs}
        />
        {this.state.data && this.state.data.contents && (
          <Content
            contents={this.state.data.contents}
            handleTileClick={this.handleTileClick}
            handleDeleteItem={this.handleDeleteItem}
            handleRenameItem={this.handleRenameItem}
          />
        )}
      </Router>
    );
  }
}
