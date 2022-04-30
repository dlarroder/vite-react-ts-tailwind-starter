import { createElement, forwardRef } from "react";
import styles from "./CallToAction.module.css";

export type CallToActionProps<Tag extends keyof JSX.IntrinsicElements> = {
  as: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[Tag];

const CardCallToAction = <Tag extends keyof JSX.IntrinsicElements = "div">() =>
  forwardRef<HTMLDivElement, CallToActionProps<Tag>>(
    ({ as, children, ...rest }, ref) => {
      return (
        <div className={styles.callToActionContainer}>
          {createElement(
            as,
            { ...rest, className: styles.callToActionElement, ref },
            children
          )}
        </div>
      );
    }
  );

export default CardCallToAction;
