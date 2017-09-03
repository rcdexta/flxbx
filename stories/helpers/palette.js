export default class Palette {

  static colors = ['#30E36F', '#ECCA00', '#D93935', '#379BD7']

  static color() {
    let c = this.colors.shift()
    this.colors.push(c)
    return c
  }

}