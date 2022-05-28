import { createGlobalStyle } from "styled-components";
import TodoLayout from "./components/TodoLayout";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #ffcdb6;
  color: #6a86ff;
}`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoLayout>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoLayout>
    </div>
  );
}

export default App;
