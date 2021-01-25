import { StyledLink as BaseLink } from "baseui/link";
import { startsWith } from "lodash";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

type Props = {
  href: string;
  target?: "_blank";
};

type ReactRouterLinkProps = {
  href: string;
  navigate: () => void;
};

// React Router recommends you use their Link component: https://reactrouter.com/web/api/Link
// and pass a className if you need to override the styling
// we can't do that because we want to use the BaseUI Link component
// therefore we need to implement our own click handler and navigate manually
// see https://github.com/ReactTraining/react-router/issues/7598
// see https://github.com/ReactTraining/react-router/pull/7409
const BaseLinkForReactRouter: React.FC<ReactRouterLinkProps> = ({
  children,
  href,
  navigate,
}) => (
  <BaseLink
    href={href}
    // copies the implementation of onClick from https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js#L21
    onClick={(event: React.MouseEvent) => {
      const isModifiedEvent = !!(
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      );
      if (event.button === 0 && !isModifiedEvent) {
        event.preventDefault();
        navigate();
      }
    }}
  >
    {children}
  </BaseLink>
);

// Note: this is a react-router aware component.
// It assumes you are using react-router for all relative links.
export const Link: React.FC<Props> = ({ children, href, target }) => {
  // assume all hrefs with leading slash are internal
  if (startsWith(href, "/")) {
    return (
      <ReactRouterLink component={BaseLinkForReactRouter} to={href}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <BaseLink
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
    >
      {children}
    </BaseLink>
  );
};
