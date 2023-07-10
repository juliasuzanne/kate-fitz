import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { render } from "react-dom";

export function ScrollTest(props) {
  const [moreDrawings, setMoreDrawings] = useState(true);

  const style = {
    width: "auto",
    margin: 6,
    padding: 8,
    maxHeight: "30vh",
    justifyContent: "center",
    display: "inline-flex",
    flexWrap: "wrap",
  };

  class App extends React.Component {
    state = {
      items: props.drawings.slice(0, 10),
      currentI: 10,
    };

    fetchMoreData = () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      if (this.state.currentI < props.drawings.length - 5) {
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(props.drawings.slice(this.state.currentI, this.state.currentI + 4)),
            currentI: this.state.currentI + 4,
          });
        }, 1500);
      } else {
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(props.drawings[this.state.currentI]),
            currentI: this.state.currentI + 1,
          });
        }, 1500);
      }
    };

    render() {
      return (
        <div>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.currentI < props.drawings.length}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>No more to load</h4>}
          >
            {this.state.items.map((i, index) => (
              <div style={style} key={index}>
                <img height="200px" src={i.url} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      );
    }
  }

  render(<App />, document.getElementById("root"));
}
