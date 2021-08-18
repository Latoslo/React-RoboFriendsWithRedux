import { useState, useEffect } from "react";

import { connect } from "react-redux";

// import { robots } from "../assets/robots";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./styles.css";

import { setSearchField, requestRobots } from "./action";

const mapStateToProps = (state) => {
  const {
    searchRobots: { searchField },
    requestRobots: { robots, isPending, error }
  } = state;
  return {
    searchField: searchField,
    robots: robots,
    isPending: isPending,
    error: error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

const App = (props) => {
  const {
    searchField,
    onSearchChange,
    onRequestRobots,
    robots,
    isPending,
    error
  } = props;
  //  const [robots, setRobots] = useState([]);
  // const [searchField, setSearchField] = useState("");

  useEffect(() => {
    onRequestRobots();
  }, []);

  // const onSearchChange = (e) => {
  //   setSearchField(e.target.value);
  // };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const output = isPending ? (
    <h1>Loading....</h1>
  ) : error ? (
    <h1>Ooooop, something went wrong</h1>
  ) : (
    <div className="App">
      <h1>RoboFriends</h1>
      <SearchBox SearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );

  return output;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
