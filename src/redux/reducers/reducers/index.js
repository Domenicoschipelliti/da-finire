const primoState = {
  aziende: {
    job: [],
  },
};

const primoReducers = (state = primoState, action) => {
  switch (action.type) {
    case "ADD_STAR":
      return {
        ...state,
        aziende: {
          ...state.aziende,
          job: [...state.aziende.job, action.payload],
        },
      };

    default:
      return state;
  }
};

export default primoReducers;
