import React from "react";
import {
  HeaderNavigation as BaseHeaderNavigation,
  HeaderNavigationProps as BaseHeaderNavigationProps,
  StyledNavigationItem as BaseNavigationItem,
  StyledNavigationList as BaseNavigationList,
  ALIGN as BASE_ALIGN,
} from "baseui/header-navigation";

export const HeaderNavigation: React.FC<BaseHeaderNavigationProps> = (
  props
) => {
  return (
    <BaseHeaderNavigation
      {...props}
      overrides={{
        Root: {
          style: () => ({
            "border-bottom-style": "none",
          }),
        },
      }}
    />
  );
};

export const NavigationList = BaseNavigationList;

export const NavigationItem = BaseNavigationItem;

export const ALIGN = BASE_ALIGN;
