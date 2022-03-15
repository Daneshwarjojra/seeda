import React, { createContext, useReducer, useContext } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "SUBMIT":
      return { ...state, isSubmitLoading: true };
    case "SUBMISSION_RECEIVED":
      return { ...state, isSubmitLoading: false, isSubmissionReceived: true };
    default:
      throw new Error();
  }
}

const MultiStepFormContext = createContext();

const initialState = {};

export const MultiStepFormProvider = function({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <MultiStepFormContext.Provider value={{ state, dispatch }}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

export function useMultiStepFormState() {
  const context = useContext(MultiStepFormContext);

  if (context === undefined) {
    throw new Error(
      "useMultiStepFormState must be used within a MultiStepFormProvider"
    );
  }

  return context;
}
