import { actionTypes } from "../Data/data";

export type State = {
  positions: string[][];
  turn: string;
  counter: number;
  candidates: [number, number][];
};

export type Action = {
  type: string;
  payload: {
    newPositions?: string[][];
    candidates?: [number, number][];
  };
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.NEW_MOVE:
      return {
        ...state,
        turn: state.turn === "w" ? "b" : "w",
        positions: action.payload.newPositions || state.positions,
        counter: state.turn === "w" ? state.counter : state.counter + 1,
      };

    case actionTypes.GET_CANDIDATES: {
      return {
        ...state,
        candidates: action.payload.candidates || [],
      };
    }

    default:
      return state;
  }
};
