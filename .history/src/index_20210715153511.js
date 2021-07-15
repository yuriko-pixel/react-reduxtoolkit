import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./redux/reducer";

const store = configureStore({
  reducer: todoSlice.reducer
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
