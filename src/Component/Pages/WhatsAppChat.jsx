import React from 'react';

const WhatsAppChat = () => {
    const phoneNumber = "9507254304"; 
    const message = "Hello! I need assistance."; 

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div style={styles.chatContainer}>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.chatButton}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp Chat"
                    style={styles.icon}
                />
            </a>
        </div>
    );
};

const styles = {
    chatContainer: {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
    },
    chatButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25D366', // WhatsApp green
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textDecoration: 'none',
    },
    icon: {
        width: '30px',
        height: '30px',
    },
};

export default WhatsAppChat;