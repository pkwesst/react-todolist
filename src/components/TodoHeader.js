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
    margin-right: 15px;
    font-size: 45px;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  .month-year {
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.05em;
  }

  .day {
    font-size: 15px;
    letter-spacing: 0.3em;
    position: absolute;
    top: 7%;
    left: 75%;
  }
`;

const TodoHeader = () => {
  const today = new Date();
  const year = today.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const month = today.toLocaleDateString("en-US", {
    month: "long",
  });

  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
  });

  const dayName = today
    .toLocaleDateString("en-US", {
      weekday: "long",
    })
    .toUpperCase();

  return (
    <TodoHeaderStyle>
      <div className="header-container">
        <span className="date">{date}</span>
        <div className="month-year">
          <div>{month}</div>
          <div>{year}</div>
        </div>
        <span className="day">{dayName}</span>
      </div>
    </TodoHeaderStyle>
  );
};

export default TodoHeader;
