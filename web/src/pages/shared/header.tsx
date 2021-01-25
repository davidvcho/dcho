import { HeaderNavigation, NavigationItem, NavigationList } from "common/components/base/navigation/header-navigation/header-navigation";
import React from "react";

export const Header: React.FC = () => {
  return (
    <HeaderNavigation>
      <NavigationList>
        <NavigationItem>David</NavigationItem>
      </NavigationList>
      <NavigationList>
        <NavigationItem>About</NavigationItem>
        <NavigationItem>Blog</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
      </NavigationList>
      <NavigationList>
        <NavigationItem>Theme</NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
};
