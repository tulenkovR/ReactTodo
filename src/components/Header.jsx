import React from "react";
import ReactDOM from "react-dom";
import Stopwatch from './stopwatch';
import Stats from "./Stats";

function Header(props) {
  return (
    <header>
      <Stats todos={props.todos}/>
      <h1>{props.title}</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  todos: React.PropTypes.array.isRequired
};

export default Header;
