//media query

import {
  IconHomeSwipe,
  IconService1,
  IconService1Act,
  Logo
} from "./icons";

export const media = {
  mobile: "max-width: 320px",
  mobileM: "max-width: 375px",
  mobileL: "max-width: 425px",
  tablet: "max-width: 768px",
  laptop: "max-width: 1024px",
  laptopM: "max-width: 1320px",
  laptopL: "max-width: 1440px",
  desktop: "max-width: 2560px",
};

export const Icon = (props) => {
  let icon;
  switch (props.icon) {
    //Start icons local
    case "io-logo": {
      icon = <Logo {...props} />;
      break;
    }
    case "io-home-swipe": {
      icon = <IconHomeSwipe {...props} />;
      break;
    }
    case "io-service1": {
      icon = <IconService1 {...props} />;
      break;
    }
    case "io-service1-active": {
      icon = <IconService1Act {...props} />;
      break;
    }
    //End icons local

    default: {
      icon = <Logo {...props} />;
      break;
    }
  }
  return icon;
};
