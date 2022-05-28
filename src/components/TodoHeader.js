import styled from "styled-components";

const TodoHeaderStyle = styled.div`
  .header-container {
    display: flex;
    padding: 30px 40px;
    margin: 0;
    font-family: "Poppins", sans-serif;
    border-bottom: 1px solid;
  }

  .date {
    margin-right: 10px;
    font-size: 45px;
    font-weight: bold;
  }

  .month-year {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .day {
    font-size: 15px;
    letter-spacing: 0.1em;
    position: absolute;
    top: 9%;
    left: 80%;
  }
`;

const TodoHeader = () => {
  return (
    <TodoHeaderStyle>
      <div className="header-container">
        <span className="date">7</span>
        <div className="month-year">
          <div>MAY</div>
          <div>2022</div>
        </div>
        <span className="day">FRIDAY</span>
      </div>
    </TodoHeaderStyle>
  );
};

export default TodoHeader;
