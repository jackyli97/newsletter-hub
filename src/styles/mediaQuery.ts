const breakpoints = {
    mobile: "@media screen and (max-width: 767px)",
    tablet: "@media (min-width: 768px) and (max-width: 1023px)",
    "tablet-landscape": "@media (min-width: 1024px) and (max-width: 1279px)",
    "desktop-small": "@media (min-width: 1024px)",
    "mobile-small": "@media (max-width: 376px)",
    desktop: "@media (min-width: 1280px)",
  
    "mobile-large": "@media (min-width: 480px)",
    "tablet-portrait-v2": "@media (min-width: 768px)",
    "tablet-landscape-v2": "@media (min-width: 1024px)",
    "desktop-v2": "@media (min-width: 1280px)",
    "desktop-large": "@media (min-width: 1920px)",
  };
  
  type Breakpoints = $Keys<typeof breakpoints>;
  
  const mediaQuery = (bp: Breakpoints): string => breakpoints[bp];
  
  export default mediaQuery;