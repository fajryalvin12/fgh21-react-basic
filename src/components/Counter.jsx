import React from "react";

function Counter() {
  let [num, setNum] = React.useState(0);
  function plusButton() {
    if (num >= 9) {
      window.alert("Tidak bisa lebih dari 10");
    } else {
      setNum(num + 1);
    }
  }
  function minButton() {
    if (num <= 0) {
      window.alert("Angka harus lebih dari 0");
    } else {
      setNum(num - 1);
    }
  }
  return (
    <div className="container-counter">
      <div>
        <button onClick={minButton} className="button-counter">
          -
        </button>
      </div>
      <div className="count-number">{num}</div>
      <div>
        <button onClick={plusButton} className="button-counter">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
