import {
  ADD_CHILDREN,
  CHANGE_TEXT,
  DELETE_CARD,
  MOVE_DOWN,
  MOVE_UP,
} from "./actions";

interface ActionDelete {
  type: "DELETE_CARD";
  payload: { id: number };
}

interface ActionChangeName {
  type: "CHANGE_TEXT";
  payload: { id: number; text: string };
}

interface ActionMoveUp {
  type: "MOVE_UP";
  payload: { id: number };
}

interface ActionMoveDown {
  type: "MOVE_DOWN";
  payload: { id: number };
}

interface ActionAddChildren {
  type: "ADD_CHILDREN";
  payload: { id: number };
}

type Actions =
  | ActionDelete
  | ActionChangeName
  | ActionMoveDown
  | ActionMoveUp
  | ActionAddChildren;

export interface Cards {
  text: string;
  id: number;
  children?: boolean;
}
export type State = Cards[];

export const reducer = (
  state: State = [
    { id: 0, text: "1" },
    { id: 1, text: "2" },
    { id: 2, text: "3" },
    { id: 3, text: "4" },
    { id: 4, text: "5" },
    { id: 5, text: "6" },
    { id: 6, text: "7" },
    { id: 7, text: "8" },
    { id: 8, text: "9" },
    { id: 9, text: "10" },
    { id: 10, text: "11" },
    { id: 11, text: "12" },
    { id: 12, text: "13" },
    { id: 13, text: "14" },
    { id: 14, text: "15" },
    { id: 15, text: "16" },
    { id: 16, text: "17" },
    { id: 17, text: "18" },
    { id: 18, text: "19" },
    { id: 19, text: "20" },
    { id: 20, text: "21" },
    { id: 21, text: "22" },
    { id: 22, text: "23" },
    { id: 23, text: "24" },
  ],
  action: Actions
) => {
  console.log(state);
  switch (action.type) {
    case DELETE_CARD: {
      const { id } = action.payload;
      return [...state.filter((item) => item.id !== id)];
    }
    case CHANGE_TEXT: {
      const { id } = action.payload;
      const { text } = action.payload;
      return [...state.map((item) => (item.id === id ? { id, text } : item))];
    }
    case MOVE_UP: {
      const { id } = action.payload;
      if (id === 0) return [...state];
      const newState = state;
      newState[id].id = newState[id].id - 1;
      newState[id - 1].id = newState[id - 1].id + 1;
      [newState[id - 1], newState[id]] = [newState[id], newState[id - 1]];
      return [...newState];
    }
    case MOVE_DOWN: {
      const { id } = action.payload;
      if (id === state.length - 1) return [...state];
      const newState = state;
      newState[id].id = newState[id].id + 1;
      newState[id + 1].id = newState[id + 1].id - 1;
      [newState[id], newState[id + 1]] = [newState[id + 1], newState[id]];
      return [...newState];
    }
    case ADD_CHILDREN: {
      const { id } = action.payload;
      return [
        ...state.map((item) =>
          item.id === id ? { ...item, children: true } : item
        ),
      ];
      return state;
    }
    default:
      return state;
  }
};
