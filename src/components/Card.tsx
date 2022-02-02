import React, { useState } from "react";
import "./Card.css";

import { Cards } from "../redux/reducer";

interface Props {
  card: Cards;
  changeText: Function;
  deleteCard: Function;
  moveDown: Function;
  moveUp: Function;
  addChildren: Function;
}

const Card: React.FC<Props> = ({
  card,
  changeText,
  deleteCard,
  moveDown,
  moveUp,
  addChildren,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [cardWidth, setCardWidth] = useState(2);
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="card_container">
      <div className="card" style={{ flexBasis: `${(cardWidth / 12) * 100}%` }}>
        {showInput ? (
          <input
            className="input"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                changeText(card.id, (e.target as HTMLInputElement).value);
                setShowInput(false);
              }
            }}
          ></input>
        ) : (
          <p onClick={() => setShowMenu(!showMenu)}>{card.text}</p>
        )}
        {card.children && (
          <div className="children_container">
            <div
              className="children"
              style={{ flexBasis: `${(cardWidth / 12) * 100}%` }}
            >
              <p>{card.text}</p>
            </div>
          </div>
        )}

        {showMenu && (
          <div className="menu">
            <div
              className="menu_item"
              onClick={() => {
                setShowInput(!showInput);
                setShowMenu(false);
              }}
            >
              Change name
            </div>
            <div
              className="menu_item"
              onClick={() => {
                setCardWidth(cardWidth + 1);
                setShowMenu(false);
              }}
            >
              Increase width
            </div>
            <div
              className="menu_item"
              onClick={() => {
                setCardWidth(cardWidth - 1);
                setShowMenu(false);
              }}
            >
              Decrease width
            </div>
            <div
              className="menu_item"
              onClick={() => {
                addChildren(card.id);
                setShowMenu(false);
              }}
            >
              Add Children
            </div>
            <div
              className="menu_item"
              onClick={() => {
                deleteCard(card.id);
                setShowMenu(false);
              }}
            >
              Delete
            </div>
            <div
              className="menu_item"
              onClick={() => {
                moveUp(card.id);
                setShowMenu(false);
              }}
            >
              Up
            </div>
            <div
              className="menu_item"
              onClick={() => {
                moveDown(card.id);
                setShowMenu(false);
              }}
            >
              Down
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
