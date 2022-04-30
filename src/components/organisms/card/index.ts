import CallToAction, { CallToActionProps } from "./CallToAction";
import Card, { CardProps } from "./card";

export interface ICard {
  (props: CardProps): JSX.Element;
  CallToAction?: <Tag extends keyof JSX.IntrinsicElements>(
    props: CallToActionProps<Tag>
  ) => JSX.Element;
}

const C: ICard = Card;
C.CallToAction = CallToAction();

export default C;
