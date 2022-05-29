import { createGlobalStyle } from "styled-components";
import TodoLayout from "./components/TodoLayout";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import TodoContext from "./TodoContext";

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
      <TodoContext>
        <GlobalStyle />
        <TodoLayout>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </TodoLayout>
      </TodoContext>
    </div>
  );
}

export default App;
