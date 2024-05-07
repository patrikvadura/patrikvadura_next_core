import React from 'react';

function Contact() {
  return (
    <div
      className="contact section-padding bord-thin-top"
      data-scroll-index="6"
    >
      <div className="sec-head mb-50">
        <h3>
          Get <span className="fw-200">In Touch</span>
        </h3>
      </div>
      <div className="contact-form">
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
                  className="butn butn-md butn-bord full-width text-center radius-10"
                >
                  <span className="fz-18 text-u ls1">Let&apos;s Talk</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
