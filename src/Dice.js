import "./Dice.css";

function Dice(props) {
  return (
    <div className="Dice">
      <h2>{props.value}</h2>
    </div>
  );
}

export default Dice;
