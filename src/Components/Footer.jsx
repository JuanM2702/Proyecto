import React from "react";

const Footer = () => {
    return(
        
            <footer style={styles.footer}>
                <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
            </footer>
        
    );
}

const styles = {
    footer: {
        width: '100%',
        position: 'fixed',
        left:'0',
        bottom: '0',
        backgroundColor:'#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
    },
}

export default Footer;