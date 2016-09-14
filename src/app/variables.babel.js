const colors = {
  green: '#4DF3B1',
  green1: '#39D8C7',
  green3: '#2FC9D4',
  blue: '#24A6F2',
  darkBlue: '#0D3B56',
  white: '#FFFFFF',
}

const fonts = {
  EausansBook: 'eausans_book',
  EausansBold: 'eausans_bold',
  EausansBlack: 'eausans_black',
}

const sizes = {
  footerHeight: '50px',
}

const gradient = `linear-gradient(to right, ${colors.green} 0%, ${colors.blue} 100%)`

const config = {
  ...colors,
  ...sizes,
  ...fonts,
  gradient,
}

export default config
