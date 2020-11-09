import React from "react";
import { Content } from "./components/Content.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { v4 as uuidv4 } from "uuid";
import cloneDeep from "lodash.clonedeep";
import { Link as RouterLink } from "react-router-dom";
import { Route, MemoryRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const dummyData = {
  id: "home",
  file: "root",
  type: "dir",
  contents: [
    {
      id: "739002d6-8c44-4894-867c-0474685bf07c",
      file: "tech profile",
      type: "dir",
      contents: [
        {
          id: "d9e2364d-0538-43da-ab74-aae427e00e50",
          file: "backend",
          type: "dir",
          contents: ["file.java"],
        },
        {
          id: "a5add3be-903e-4244-b31f-25b6db38a603",
          file: "web/frontend",
          type: "dir",
          contents: ["app.jsx"],
        },
      ],
    },
    {
      id: "81ac6911-2cec-4f5c-89de-730f33d0e4c2",
      file: "a.png",
      type: "file",
      contents: "a.png",
    },
    {
      id: "6e7d3366-489a-451b-8391-153828273792",
      file: "banner.png",
      type: "file",
      contents: "banner.png",
    },
  ],
};

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
    });
  }
  handleTileClick = (id) => {
    for (const obj of this.state.data.contents) {
      if (id === obj.id) {
        this.setState({
          data: obj,
        });
        break;
      }
    }
  };

  handleAddFile = (filename) => {
    const obj = {
      id: uuidv4(),
      file: filename,
      type: "file",
      contents: filename,
    };
    const resState = cloneDeep(this.state.data);
    resState.contents.push(obj);
    this.setState({
      data: resState,
    });
  };

  handleAddFolder = (foldername) => {
    const obj = {
      id: uuidv4(),
      file: foldername,
      type: "dir",
      contents: [],
    };
    const resState = cloneDeep(this.state.data);
    resState.contents.push(obj);
    this.setState({
      data: resState,
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
        <Navigation />
        {/* <Route path="/" exact component={Home} /> */}
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
