import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { State } from "./redux/reducer";
import * as actions from "./redux/actions";

import "./App.css";

import Card from "./components/Card";
interface Props {
  cards: State;
  deleteCard: Function;
  changeText: Function;
  moveDown: Function;
  moveUp: Function;
  addChildren: Function;
}

const App: React.FC<Props> = ({
  cards,
  deleteCard,
  changeText,
  moveDown,
  moveUp,
  addChildren,
}): ReactElement => {
  useEffect(() => {
    console.log(cards);
  }, []);
  return (
    <div className="container">
      {cards.map((item) => (
        <Card
          card={item}
          key={item.id}
          changeText={changeText}
          deleteCard={deleteCard}
          moveDown={moveDown}
          moveUp={moveUp}
          addChildren={addChildren}
        />
      ))}
    </div>
  );
};

const mapState = (state: State) => {
  return {
    cards: state,
  };
};

const mapDispatch = {
  deleteCard: actions.deleteCard,
  changeText: actions.changeText,
  moveDown: actions.moveDown,
  moveUp: actions.moveUp,
  addChildren: actions.addChildren,
};

export default connect(mapState, mapDispatch)(App);
