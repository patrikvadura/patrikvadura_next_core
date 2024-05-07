import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head md-mb80">
              <h2 className="text-u ls1 d-rotate wow">
                <span className="rotate-text">Let&apos;s Contact</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&apos;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row section-padding pb-0">
          <div className="col-lg-4">
            <div className="text-u md-mb50">
              <h6>
                REACH OUT TO US THROUGH THE CONTACT FORM BELOW, AND WE&apos;LL
                RESPOND PROMPTLY.
              </h6>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-2">
            <div className="md-mb50">
              <h6 className="mb-30 text-u ls1">Our Address</h6>
              <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <h6 className="mb-30 text-u ls1">BUSINESS INQUIRIES</h6>
              <p>Support@uithemez.com</p>
              <h6 className="phone mt-10 underline main-color">
                <a href="#0">+1 840 841 25 69</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
