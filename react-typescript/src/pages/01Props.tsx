import { TypingProps } from "../components/props/01BasicProps";
import {Status} from '../components/props/02AdvanceProps'
import { Heading } from "../components/props/03ChildrenProps";
import { Oscar } from "../components/props/04ReactNodeProps";
import { Button } from "../components/props/05Button";
import { Input } from "../components/props/06Input";
import { StyleProps } from "../components/props/07StyleProps";

function Props() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {first: 'Bruce', last: 'Wayne'},
    {first: 'Clark', last: 'Kent'},
    {first: 'Princess', last: 'Diana'},
  ]
  return (
    <>
      <TypingProps
        name={personName}   // Props As an object
        messageCount={20}   // Props As a number
        shortName="Ram"     // Props As a string
        isLoggedIn={true}   // Props As a boolean
        nameList = {nameList}  // Props As an array
      />
      <Status 
        status = 'loading'    //Props as Unoin
      />  
      <Heading>Placeholder text</Heading>    {/* Props as string */}
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>  {/* Props as ReactNode */}
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value='' handleChange={event => console.log(event)} />
      <StyleProps styles={{border: '1px solid black', padding: '1rem'}} />
    </>
  );
}

export default Props;
