const colors = {
  green: '#4DF3B1',
  green1: '#39D8C7',
  green3: '#2FC9D4',
  blue: '#24A6F2',
  white: '#FFFFFF'
}

const sizes = {
  footerHeight: '50px'
}

const gradient = `linear-gradient(to right, ${colors.green} 0%, ${colors.blue} 100%)`

const config = {
  ...colors,
  ...sizes,
  gradient
}

export default config;