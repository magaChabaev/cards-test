export const DELETE_CARD = "DELETE_CARD";
export const CHANGE_TEXT = "CHANGE_TEXT";
export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";
export const ADD_CHILDREN = "ADD_CHILDREN";

export const deleteCard = (id: number) => {
  return {
    type: DELETE_CARD,
    payload: { id },
  };
};

export const changeText = (id: number, text: string) => {
  return {
    type: CHANGE_TEXT,
    payload: { id, text },
  };
};

export const moveUp = (id: number) => {
  return {
    type: MOVE_UP,
    payload: { id },
  };
};

export const moveDown = (id: number) => {
  return {
    type: MOVE_DOWN,
    payload: { id },
  };
};

export const addChildren = (id: number) => {
  return {
    type: ADD_CHILDREN,
    payload: { id },
  };
};
