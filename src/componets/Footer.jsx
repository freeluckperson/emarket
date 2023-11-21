import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li>Web Design</li>
                            <li>Development</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li>support@example.com</li>
                            <li>1-800-123-4567</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className='fa fa-copyright'> {new Date().getFullYear()} <a href="https://freeluckperson.github.io/my-web-gh-pages">Mi Sitio Web.</a> Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;