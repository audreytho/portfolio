import portfolioData from '../data/portfolio.json'

function Contact() {
    return (
        <div className="contact-page">
            <section id="contact">
                <h2>GET IN TOUCH</h2>
                <p>Interested in collaborating or want to learn more about my work?</p>
                <div className="contact-links">
                    <a href={`mailto:${portfolioData.contact.email}`}>EMAIL ME</a>
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                </div>
            </section>
        </div>
    )
}

export default Contact
