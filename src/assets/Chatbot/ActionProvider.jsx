import { createChatBotMessage } from "react-chatbot-kit";
import Curriculo from "../img/curriculo.pdf";
import CustomMessage from "./CustomMessage"; 

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Função para processar o texto com quebras de linha
  processMessage = (messageText) => {
    return messageText.split("\n").map((line, index) => (
      <span key={index}>
        {line.trim()}
        <br />
      </span>
    ));
  };

  handleUserInput = (input) => {
    const choice = input.trim();

    switch (choice) {
      case "1":
        this.handleOption1();
        break;
      case "2":
        this.handleOption2();
        break;
      case "3":
        this.handleOption3();
        break;
      case "4":
        this.handleOption4();
        break;
      case "5":
        this.handleOption5();
        break;
      default:
        this.handleInvalidOption();
    }
  };

  handleOption1 = () => {
    const messageText = `Você escolheu: 1. Sobre mim. 
    Sou apaixonada por tecnologia e desenvolvimento de software, especialmente no desenvolvimento front-end, onde posso criar interfaces que proporcionam experiências agradáveis e intuitivas para os usuários. Estou sempre buscando evolução e, por isso, gosto de explorar novas ferramentas como ViteJS e TypeScript, além de aprimorar minhas habilidades em Node.js. Embora ainda não tenha experiência em UX/UI, estou determinada a aprender mais sobre essa área, com planos de fazer um curso para melhorar minha expertise.Além disso, tenho uma paixão por direito, especialmente no que se refere à proteção de dados e privacidade, e acredito que essa paixão pode agregar muito ao desenvolvimento de soluções tecnológicas seguras e conforme as regulamentações, como a LGPD. Tenho também conhecimento em MySQL e experiência com MongoDB e Firebase, o que me permite trabalhar com diferentes tipos de banco de dados.Meu objetivo é me especializar cada vez mais no front-end, criando soluções inovadoras e impactantes, e continuar aprendendo para me tornar uma profissional cada vez mais completa. Estou muito animada para aplicar minha paixão por tecnologia, direito e aprendizado contínuo, sempre buscando entregar produtos de qualidade.`;
    const formattedMessage = this.processMessage(messageText);
    const message = this.createChatBotMessage(formattedMessage);
    this.setChatbotMessage(message);
  };

  handleOption2 = () => {
    const messageText = ` Você escolheu: 2. Formação acadêmica. 
    Cursando Análise e Desenvolvimento de sistemas pela Unicesumar. `
    const formattedMessage = this.processMessage(messageText);
    const message = this.createChatBotMessage(formattedMessage);
    this.setChatbotMessage(message);
  };

  handleOption3 = () => {
    const messageText = `
    Você escolheu: 3. Cursos adicionais
      Digital House - Desenvolvimento Web FullStack;
      Udemy - Hora de Codar - React do Zero a Maestria (c/ hooks, router, API, Projetos);
      Udemy - Hora de Codar - JavaScript do básico ao avançado (c/ Node.js e projetos);
      Udemy - Hora de Codar - Desenvolvimento Web Node.Js Node.js do Zero a Maestria com diversos Projetos;
      ELS Language Center - Los Angeles - Intensive English Program
    `;
    const formattedMessage = this.processMessage(messageText);
    const message = this.createChatBotMessage(formattedMessage);
    this.setChatbotMessage(message);
  };

  handleOption4 = () => {
    const messageText = `Você escolheu: 4. Contatos. 
    Você pode me contatar pelo e-mail: sabrina.miyamoto@gmail.com ou pelo 
    WhatsApp: (48) 91448812.`;
    const formattedMessage = this.processMessage(messageText);
    const message = this.createChatBotMessage(formattedMessage);
    this.setChatbotMessage(message);
  };

  handleOption5 = () => {
    const messageText = `Você escolheu: 5. Currículo. Você será redirecionado para o pdf.`;
    const formattedMessage = this.processMessage(messageText);
    const message = this.createChatBotMessage(formattedMessage);
    this.setChatbotMessage(message);

    window.open(Curriculo, "_blank");
  };

  handleInvalidOption = () => {
    const messageText = "Desculpe, não entendi. Por favor, escolha uma opção válida (1 a 5).";
    const formattedMessage = this.processMessage(messageText);
    const message = this.createChatBotMessage(formattedMessage);
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
