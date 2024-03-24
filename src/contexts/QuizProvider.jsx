import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  // Loading, Error, Ready, Active, Finish
  status: "ready",
  error: "",
  answer: null,
  index: 0,
  score: 0,
  secRemain: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "quiz/received":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
        error: "",
      };
    


    case "quiz/failed":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    

    case "loading":
      return {
        ...state,
        status: "loading",
      };
    

    case "active":
      return {
        ...state,
        status: "active",
        secRemain: state.questions.length * SECS_PER_QUESTION,
      };
    

    case "answer":
      const option = state.questions[state.index].correctOption;
      const point = state.questions[state.index].points;
      return {
        ...state,
        answer: action.payload,
        score: action.payload === option ? state.score + point : state.score,
      };
    
    case "nextQuestion":
      const questionLength = state.questions.length;

      return {
        ...state,
        index:
          state.index + 1 !== questionLength ? state.index + 1 : state.index,
        answer: null,
      };
    

    case "finish":
      return {
        ...state,
        status: "finish",
        answer: null,
      };
    

    case "tick":
      return {
        ...state,
        secRemain: state.secRemain - 1,
        status: state.secRemain === 0 ? "finish" : state.status,
      };
    

    case "reset":
      return {
        ...initialState,
        questions: state.questions,
      };
    

    default:
      throw new Error("Action Unknown!");
  }
};

export function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, score, secRemain, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxQuestions = questions.length;
  const totalPoint = questions.reduce((prev, cur) => {
    return prev + cur.points;
  }, 0);

  useEffect(() => {
    const fetchQuiz = async () => {
      dispatch({ type: "loading" });

      const res = await fetch("http://localhost:8000/questions");
      const data = await res.json();
      // console.log(data)
      dispatch({ type: "quiz/received", payload: data });
    };

    fetchQuiz();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        score,
        secRemain,
        maxQuestions,
        totalPoint,
        error,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const state = useContext(QuizContext);
  return state;
};
