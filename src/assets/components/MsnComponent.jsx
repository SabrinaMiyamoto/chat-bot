import { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import Config from '../Chatbot/Config';
import MessageParser from '../Chatbot/MessageParser';
import ActionProvider from '../Chatbot/ActionProvider';
import userImage from '../img/user.jpg';
import './MsnComponent.css';
import { IoCloseSharp } from "react-icons/io5";
import { FaWindowMinimize } from "react-icons/fa";
import { VscWindow } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";

const MsnComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('')

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const [status, setStatus] = useState('Online');

    const getStatusColor = (status) => {
        switch (status) {
            case 'Online': return 'green';
            case 'Ausente': return 'yellow';
            case 'Ocupado': return 'red';
            case 'Invisivel': return 'lightgray'
            default: return 'green';
        }
    };
    const handleSendMessage = (e) => {
        e.preventDefault();
        if(currentMessage.trim() !== ''){
            const userMessage = {
                user: username, 
                text: currentMessage,
                type: 'user'
            }
            setMessages((prev) => [
                ...prev, 
                userMessage
            ])
            setCurrentMessage('')
            const chatbotResponse = { user: Config.botName, text: `Você disse: ${currentMessage}`, type: 'bot' };
            setMessages((prev) => [...prev, chatbotResponse])
        }
    }
    return (
        <div className="msn-component">
            {!isLoggedIn ? (
                <div className="login-container">
                    <div className="top-page">
                        <span>MSN Messeger</span>
                        <div className="top-icons">
                        <FaWindowMinimize /> <VscWindow style={{margin:'0.25rem'}}/> <IoCloseSharp />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={userImage} alt="Usuário" className="user-icon-login"/>
                    </div>
                    <form className='login-form' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <div className="label-user">
                        <label htmlFor="username">Usuário:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        </div>
                        <div className="label-password">
                        <label htmlFor="password">Senha:</label>
                        <input 
                            type="password"  
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        </div>
                        <button type="submit" className='button-submit'>Entrar</button>
                    </form>
                    <div className="status-display">
                                <span className="status-dot" style={{ backgroundColor: getStatusColor(status) }}></span>
                                <select className='status-select' value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="Online">Online</option>
                                    <option value="Ausente">Ausente</option>
                                    <option value="Ocupado">Ocupado</option>
                                    <option value="Invisivel">Invisivel</option>
                                </select>
                            </div>
                    <p className="warning">*Esses dados não serão salvos, somente para uma viagem no tempo.</p>
                </div>
            ) : (
                <div className='chat-bot'>
                    <div className="header-msn">
                        <div className="header-msn-user-info">
                            <img src={userImage} alt="Usuário" className="header-msn-user-image" />
                            <span className="header-msn-username" id='username-header'>{username}</span>
                            <div className="status-display">
                                <span className="status-dot" style={{ backgroundColor: getStatusColor(status) }}></span>
                                <select className='status-select' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Online">Online</option>
                                    <option value="Ausente">Ausente</option>
                                    <option value="Ocupado">Ocupado</option>
                                    <option value="Invisivel">Invisivel</option>
                                </select>
                            </div>
                        </div>                    
                        <div className="header-msn-music">
                            <span>🎶 Tocando agora: Nostalgia MSN - Artista Desconhecido</span>
                        </div>
                    </div>

                    <div className="chat-content">
                        <div className="chat-sidebar">
                           
                            <h3>Contatos</h3>
                            <ul style={{listStyleType:'none'}}>
                                <li><FaUserClock style={{color:'rgb(106, 206, 88)'}} /> Bete</li>
                                <li><FaUser style={{color:'rgb(106, 206, 88)'}} /> Carlos</li>
                                <li><FaUserClock style={{color:'rgb(106, 206, 88)'}} /> Giulia</li>
                                <li><FaUser style={{color:'rgb(106, 206, 88)'}} /> Thiago</li>
                                <li><FaUserClock style={{color:'rgb(106, 206, 88)'}} /> Mauro</li>
                                <li><FaUser style={{color:'rgb(106, 206, 88)'}} /> Lucas</li>
                            </ul>
                        </div>
                                                    <div className="user-photo">
                                <img src={userImage} alt="Usuário" className="user-image" />
                            </div>
                        <div className="chat-window">
                            <Chatbot
                                config={Config}
                                messageParser={MessageParser}
                                actionProvider={ActionProvider}
                            />
                        </div>
                    </div>
                    <div className="icons-msn" style={{position:'relative', bottom:'4rem'}}>
                                <span></span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MsnComponent;
// não está aparecendo na tela as mensagens que não enviadas pelo usuário
// tem que colocar os arquivos ainda e arrumar a tela de login novamente