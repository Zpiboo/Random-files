class TestExtension {
  getInfo() {
    return {
      id: 'test',
      name: 'This test hohaheee',
      blocks: [
        {
          opcode: 'hi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'hello'
        }
      ]
    };
  }
  
  hi() { return 'hey guys' }
}
Scratch.extensions.register(new TestExtension());
