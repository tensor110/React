// type HeadingProps = {
//   children: string;
// };
import { HeadingProps } from "./08Prop.types";

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};
