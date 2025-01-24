class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    /**
     * Recebe a mensagem do usuário e decide como processá-la.
     * @param {string} message - A mensagem digitada pelo usuário.
     */
    parse(message) {
      const input = message.trim().toLowerCase();
  
    
      switch (input) {
        case "1":
          this.actionProvider.handleOption1();
          break;
        case "2":
          this.actionProvider.handleOption2();
          break;
        case "3":
          this.actionProvider.handleOption3();
          break;
        case "4":
          this.actionProvider.handleOption4();
          break;
        case "5":
          this.actionProvider.handleOption5();
          break;
        default:
          this.actionProvider.handleInvalidOption();
      }
    }
  }
  
  export default MessageParser;
  