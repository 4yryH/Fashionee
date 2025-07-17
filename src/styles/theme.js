export const theme = {
  colors: {
    text: '#444444', // --body-text-color
    titles: '#000000', // --titles-color
    red: '#ff8e8e', // --red
    green: '#95ccb5', // --green
    gray: '#999999', // --gray
    white: '#ffffff', // --white
    border: '#d9d9d9ff', // --border-color
    bgImages: '#f1f2f3', // --background-images-color
    bgQuantity: '#f8f8fb', // --background-quantity
  },
  fonts: {
    primary: "'Raleway', sans-serif", // --font-family
    secondary: "'Josefin Sans', sans-serif", // --second-family
  },
  helpers: {
    colorText: ({ theme }) => theme.colors.text,
    colorTitles: ({ theme }) => theme.colors.titles,
    colorRed: ({ theme }) => theme.colors.red,
    colorGreen: ({ theme }) => theme.colors.green,
    colorGray: ({ theme }) => theme.colors.gray,
    colorWhite: ({ theme }) => theme.colors.white,
    colorBorder: ({ theme }) => theme.colors.border,
    colorBgImages: ({ theme }) => theme.colors.bgImages,
    colorBgQuantity: ({ theme }) => theme.colors.bgQuantity,
    fontPrimary: ({ theme }) => theme.fonts.primary,
    fontSecondary: ({ theme }) => theme.fonts.secondary,
  },
};

// Деструкт для копи\паста
// const {
//   colorText,
//   colorTitles,
//   colorRed,
//   colorGreen,
//   colorGray,
//   colorWhite,
//   colorBorder,
//   colorBgImages,
//   colorBgQuantity,
//   fontPrimary,
//   fontSecondary,
// } = theme.helpers;
