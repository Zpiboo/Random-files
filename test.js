class TestExtension {
  getInfo() {
    return {
      id: 'test',
      name: 'This test hohaheee'
    };
  }
}
Scratch.extensions.register(new TestExtension);
