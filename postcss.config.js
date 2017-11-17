module.exports = {
  sourceMap: true,
  plugins: {
    'autoprefixer': {
        browsers: '> 5%',
        grid: true
    }/* ,
    'postcss-px-to-viewport': {
        viewportWidth: 640,
        viewportHeight: 1136,
        unitPrecision: 5,
        viewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false
    } */
  }
}