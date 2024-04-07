const Library = require('./Lib/shapes');

describe('Circle', () => {
    it('should render properly', () => {
      const shape = new Circle();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}"/>`);
    });
  });

  describe('Square', () => {
    it('should render properly', () => {
      const shape = new Square();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
  });

  describe('Triangle', () => {
    it('should render properly', () => {
      const shape = new Triangle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`);
    });
  });
  