const buttonColor = '#01AAED';

const colors = {
   buttonColor,

    // alternative uppercase syntax
    BUTTON_COLOR: buttonColor,
};

export type Colors = $Keys<typeof colors>;

export default colors;

