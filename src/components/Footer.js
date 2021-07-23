import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Tim Beckett</p>
    </footer>
  );
};

export default Footer;