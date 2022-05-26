import styled from "styled-components";

const TodoHeaderStyle = styled.div`
  .header-container {
    display: flex;
    padding: 30px 40px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    border-bottom: 1px solid;
  }

  span {
    margin-right: 10px;
    font-size: 45px;
    font-weight: bold;
  }

  .month-day {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const TodoHeader = () => {
  return (
    <TodoHeaderStyle>
      <div className="header-container">
        <span>7</span>
        <div className="month-day">
          <div>MAY</div>
          <div>FRIDAY</div>
        </div>
      </div>
    </TodoHeaderStyle>
  );
};

export default TodoHeader;
