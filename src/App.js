import React, { Component } from "react";

// Data
import authors from "./data";
import AuthorDetail from "./AuthorDetail";
// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {}
    };
    this.selectAuthor = this.selectAuthor.bind(this);
  }

  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }
  render() {
    const decide = () => {
      if (this.state.currentAuthor)
        return <AuthorDetail author={this.state.currentAuthor} />;
      else
        return (
          <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />
        );
    };

    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">decide();</div>
        </div>
      </div>
    );
  }
}

export default App;
