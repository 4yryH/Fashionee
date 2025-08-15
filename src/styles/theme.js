export const theme = {
  colors: {
    text: '#444444',       // --body-text-color
    titles: '#000000',     // --titles-color
    red: '#ff8e8e',        // --red
    green: '#95ccb5',      // --green
    gray: '#999999',       // --gray
    white: '#ffffff',      // --white
    border: '#d9d9d9ff',   // --border-color
    bgImages: '#f1f2f3',   // --background-images-color
    bgQuantity: '#f8f8fb', // --background-quantity
  },
  fonts: {
    primary: "'Raleway', sans-serif",       // --font-family
    secondary: "'Josefin Sans', sans-serif" // --second-family
  },
};

export const helpers = {
  // colors
  colorText: theme.colors.text,
  colorTitles: theme.colors.titles,
  colorRed: theme.colors.red,
  colorGreen: theme.colors.green,
  colorGray: theme.colors.gray,
  colorWhite: theme.colors.white,
  colorBorder: theme.colors.border,
  colorBgImages: theme.colors.bgImages,
  colorBgQuantity: theme.colors.bgQuantity,

  // fonts
  fontPrimary: theme.fonts.primary,
  fontSecondary: theme.fonts.secondary,
};

// Для обратной совместимости с существующими импортами вида `theme.helpers`
theme.helpers = helpers;
