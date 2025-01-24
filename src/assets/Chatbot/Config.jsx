import { createChatBotMessage } from "react-chatbot-kit";
import Logo from "../img/SabrinaMiyamoto.png";
import CustomMessage from "./CustomMessage"; // Importando o CustomMessage

const processMessage = (messageText) => {
  // Processa o texto, dividindo-o por quebras de linha (\n) e retornando um formato renderizável
  return messageText.split("\n").map((line, index) => (
    <span key={index}>
      {line.trim()}
      <br />
    </span>
  ));
};

const config = {
  botName: "Sabrina Miyamoto",
  initialMessages: [
    createChatBotMessage("Oi, tudo bem? Aqui estão algumas opções para você explorar:"),
    createChatBotMessage(processMessage(
      `1. Sobre mim\n
      2. Formação acadêmica\n
      3. Cursos adicionais\n
      4. Contatos\n
      5. Currículo`
    )),
  ],
  customComponents: {
    header: () => (
      <div className="chatbot-header">
        <img
          src={Logo}
          alt="Usuário"
          className="logo"
          style={{
            width: "4rem",
            height: "4rem",
            border: "5px solid #a6a2a273",
            borderRadius: "6px",
          }}
        />
        <h3 style={{ paddingLeft: "0.5rem" }}>Sabrina Miyamoto</h3>
      </div>
    ),
    botMessageBox: (props) => <CustomMessage {...props} />, 
  },
};

export default config;
