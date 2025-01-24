import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap"; 
import { Alert } from "@mui/material"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './MsnComponent.css'; 
import Xadrez from '../img/xadrez.jpg';
import Icq from '../img/icq.jpg';
import Shared from '../img/4shared-.png';
import Explorer from '../img/explorer.png';
import User from '../img/user.jpg';
import MsnComponent from "./MsnComponent"; 

const Header = ({ onComponentChange }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true); 

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleMenuClick = (component) => {
        onComponentChange(component);
        handleClose();
    };

    return (
        <>
          
            {showAlert && (
                <Alert
                    severity="info"
                    variant="filled"
                    onClose={() => setShowAlert(false)} 
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 9999,
                        margin: 0
                    }}
                >
                    <strong>Mensagem Importante!</strong> Clique no MSN para conversar com o chatbot e ter acesso ao meu currículo.
                </Alert>
            )}

            <footer className="header d-flex justify-content-between align-items-center flex-wrap">
                <div className="start" style={{ maxWidth: '14rem' }}>
                    <button
                        className="start-button d-flex align-items-center justify-content-between"
                        style={{
                            width: '44%',
                            maxWidth: '200px',
                            borderRadius: '0 16px 16px 0',
                            color: '#fff',
                            padding: '1rem',
                        }}
                        onClick={handleShow}
                    >
                        <span className="ms-2">INICIAR</span>
                    </button>
                </div>
                <div className="time-display text-center mt-2 mt-md-0" style={{ padding: '0.5rem', color: '#fff' }}>
                    {formattedTime}
                </div>
            </footer>

           
            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                size="lg"
                style={{ height: '95vh' }}
            >
                <Modal.Header
                    closeButton
                    className="bg-primary text-white d-flex align-items-center"
                >
                    <div
                        className="rounded-circle border border-white me-2"
                        style={{
                            width: '40px',
                            height: '40px',
                            backgroundImage: `url(${Xadrez})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <Modal.Title className="fs-6">Usuário</Modal.Title>
                </Modal.Header>

                <Modal.Body className="p-3 bg-light">
                    <div className="list-group">
                        <button
                            type="button"
                            className="list-group-item list-group-item-action d-flex align-items-center"
                            onClick={() => handleMenuClick(<MsnComponent />)}
                        >
                            <img
                                src={User}
                                alt="MSN Icon"
                                className="me-3"
                                style={{ width: '20px', height: '20px' }}
                            />
                            <span>MSN o Messenger</span>
                        </button>
                        <button
                            type="button"
                            className="list-group-item list-group-item-action d-flex align-items-center"
                            onClick={() => alert('Abrindo o Explorer...')}
                        >
                            <img
                                src={Explorer}
                                alt="Explorer Icon"
                                className="me-3"
                                style={{ width: '32px', height: '32px' }}
                            />
                            <span>Windows Explorer</span>
                        </button>
                        <button
                            type="button"
                            className="list-group-item list-group-item-action d-flex align-items-center"
                            onClick={() => alert('Abrindo o ICQ')}
                        >
                            <img
                                src={Icq}
                                alt="Settings Icon"
                                className="me-3"
                                style={{ width: '32px', height: '32px' }}
                            />
                            <span>ICQ</span>
                        </button>
                        <button
                            type="button"
                            className="list-group-item list-group-item-action d-flex align-items-center"
                            onClick={() => alert('Abrindo o 4Shared')}
                        >
                            <img
                                src={Shared}
                                alt="Logout Icon"
                                className="me-3"
                                style={{ width: '32px', height: '32px' }}
                            />
                            <span>4Shared</span>
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;
