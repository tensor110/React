import { Name } from "./08Prop.types";
type GreetProps = {
  name: {
    first: string;
    last: string;
  };
  messageCount?: number;   //optional prop
  shortName: string;
  isLoggedIn: boolean,
  nameList: Name[]
};

export const TypingProps = (props: GreetProps) => {
    const {messageCount = 0} = props   //If messageCount is not declared default value is 0
  return (
    <div>
      <h2>
        Welcome {props.name.first} {props.name.last}! You have{" "}
        {messageCount} unread messages
      </h2>
      <h4>{props.isLoggedIn ? `Hello ${props.shortName}` : ""}</h4>
      {props.nameList.map((name, index) => {
        return(<h2 key={index}>{name.first} {name.last}</h2>)
      })}
    </div>
  );
};
