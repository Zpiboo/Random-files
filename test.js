class TestExtension {
  getInfo() {
    return {
      id: 'testazzzzkdjf',
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
  
  hi() { return 'hey guys'; }
}
Scratch.extensions.register(new TestExtension());
