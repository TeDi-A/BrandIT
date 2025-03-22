import "../styles/Section4.css";

const ContactSection = ({ contactHeader, contactSubText, buttonContent }) => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-section-container">
          <h2 className="contact-section-header">{contactHeader}</h2>
          <p>{contactSubText}</p>

          <form action="submit" className="contact-form">
            <div className="form-item">
              <label htmlFor="Name">Name</label>
              <input id="Name" type="text" placeholder="Enter your name" />
            </div>

            <div className="form-item">
              <label htmlFor="Email">Email</label>
              <input id="Email" type="email" placeholder="Enter your email" />
            </div>

            <div className="form-item">
              <label htmlFor="Message">Message</label>
              <input
                id="Message"
                type="text"
                placeholder="Enter your message"
              />
            </div>
            <input type="submit" className="submit-btn" value={buttonContent} />
          </form>
        </div>
      </div>
    </>
  );
};
const SubscribeSection = ({
  subscriptionHeader,
  subscriptionSubText,
  buttonContent,
}) => {
  return (
    <>
      <div className="subscription-section">
        <div className="subscription-section-container">
          <h2 className="subscription-section-header">{subscriptionHeader}</h2>
          <p>{subscriptionSubText}</p>

          <form action="submit" className="subscription-form">
            <div className="form-item">
              <label htmlFor="Name">Name</label>
              <input id="Name" type="text" placeholder="Enter your name" />
            </div>
            <div className="form-item">
              <label htmlFor="Email">Email</label>
              <input id="Email" type="email" placeholder="Enter your email" />
            </div>

            <input type="submit"  className="submit-btn"  value={buttonContent} />
          </form>
        </div>
      </div>
    </>
  );
};

const Section4 = () => {
  return (
    <>
      <section className="section-4 container">
        <ContactSection
          contactHeader="Ready to grow your brand?"
          contactSubText="Send us a message!"
          buttonContent="Send"
        />
        <SubscribeSection
         subscriptionHeader="Get future updates!"
         subscriptionSubText="Subscribe to receive scheduled updates to your mail"
          buttonContent="Subscribe"
        />
      </section>
    </>
  );
};

export default Section4;
