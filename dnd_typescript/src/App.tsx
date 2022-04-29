import React from "react";
import Page from "./components/page/page";
import AppProvider from "./provider";

function App() {
  return (
    <AppProvider>
      <Page />
    </AppProvider>
  );
}

export default App;
