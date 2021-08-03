//media query

import {
  IconBack,
  IconBlog,
  IconClients,
  IconContacts,
  IconFacebook,
  IconHamburger,
  IconHomeSwipe,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconService1,
  IconService1Act,
  IconServices,
  IconValues1,
  IconValues2,
  IconValues3,
  IconValues4,
  IconValues5,
  IconValues6,
  IconValues7,
  IconWork,
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

    case "io-values-1": {
      icon = <IconValues1 {...props} />;
      break;
    }
    case "io-values-2": {
      icon = <IconValues2 {...props} />;
      break;
    }
    case "io-values-3": {
      icon = <IconValues3 {...props} />;
      break;
    }
    case "io-values-4": {
      icon = <IconValues4 {...props} />;
      break;
    }
    case "io-values-5": {
      icon = <IconValues5 {...props} />;
      break;
    }
    case "io-values-6": {
      icon = <IconValues6 {...props} />;
      break;
    }
    case "io-values-7": {
      icon = <IconValues7 {...props} />;
      break;
    }
    case "io-facebook": {
      icon = <IconFacebook {...props} />;
      break;
    }
    case "io-instagram": {
      icon = <IconInstagram {...props} />;
      break;
    }
    case "io-linkedin": {
      icon = <IconLinkedin {...props} />;
      break;
    }
    case "io-mail": {
      icon = <IconMail {...props} />;
      break;
    }
    case "io-services": {
      icon = <IconServices {...props} />;
      break;
    }
    case "io-clients": {
      icon = <IconClients {...props} />;
      break;
    }
    case "io-contacts": {
      icon = <IconContacts {...props} />;
      break;
    }
    case "io-work": {
      icon = <IconWork {...props} />;
      break;
    }
    case "io-blog": {
      icon = <IconBlog {...props} />;
      break;
    }

    case "io-hamburger": {
      icon = <IconHamburger {...props} />;
      break;
    }
    case "io-back": {
      icon = <IconBack {...props} />;
      break;
    }

    //End icons local

    default: {
      icon = <IconServices {...props} />;
      break;
    }
  }
  return icon;
};
