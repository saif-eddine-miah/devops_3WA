const Message = require('./message');

describe('Message class', () => {
  it('return "Hello World" for en', () => {
    const message = new Message();
    expect(message.get()).toBe('Hello World');
  });

  it('return "Bonjour le monde" for fr', () => {
    const message = new Message('fr');
    expect(message.get()).toBe('Bonjour le monde');
  });
});
