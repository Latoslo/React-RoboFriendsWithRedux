import "./CardList.css";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponents = robots.map((user, i) => {
    return (
      <Card
        key={i}
        email={robots[i].email}
        name={robots[i].name}
        id={robots[i].id}
      />
    );
  });
  return <div className="cardList">{cardComponents}</div>;
};

export default CardList;
