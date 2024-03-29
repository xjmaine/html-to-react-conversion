import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function Contact() {
  return (
    <>
    <div>
    {/* <!-- about breadcrumb --> */}
      <BreadCrumps  page="Contact Us" title="Get in touch"/>
      {/* <!-- //about breadcrumb --> */}
    {/* <!-- contact block --> */}
    {/* <!-- contact1 --> */}
    <section class="w3l-contact-1 pb-5" id="contact">
        <div class="contacts-9 py-lg-5 py-md-4">
            <div class="container">
                <div class="d-grid contact-view">
                    <div class="cont-details">
                        <h4 class="title-small">Get in touch</h4>
                        <h3 class="title-big mb-4">Feel free to contact us</h3>
                        <p class="mb-sm-5 mb-4">Start working with Us, We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>

                        <div class="cont-top">
                            <div class="cont-left text-center">
                                <span class="fa fa-map-marker text-primary"></span>
                            </div>
                            <div class="cont-right">
                                <h6>Our head office address</h6>
                                <p class="pr-lg-5">Address here, 208 Trainer Avenue street, Illinois, UK - 62617.</p>
                            </div>
                        </div>
                        <div class="cont-top margin-up">
                            <div class="cont-left text-center">
                                <span class="fa fa-phone text-primary"></span>
                            </div>
                            <div class="cont-right">
                                <h6>Call for help </h6>
                                <p><a href="tel:+(21) 255 999 8888">+(21) 255 999 8888</a></p>
                            </div>
                        </div>
                        <div class="cont-top margin-up">
                            <div class="cont-left text-center">
                                <span class="fa fa-envelope-o text-primary"></span>
                            </div>
                            <div class="cont-right">
                                <h6>Contact with our support</h6>
                                <p><a href="mailto:coursing@mail.com" class="mail">coursing@mail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="map-content-9">
                        <h5 class="mb-sm-4 mb-3">Write to us</h5>
                        <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                            <div class="twice-two">
                                <input type="text" class="form-control" name="w3lName" id="w3lName" placeholder="Name"
                                    required=""/>
                                <input type="email" class="form-control" name="w3lSender" id="w3lSender" placeholder="Email"
                                    required=""/>
                              </div>
                            <div class="twice">
                                <input type="text" class="form-control" name="w3lSubject" id="w3lSubject"
                                    placeholder="Subject" required=""/>
                            </div>
                            <textarea name="w3lMessage" class="form-control" id="w3lMessage" placeholder="Message"
                                required=""></textarea>
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary btn-style mt-4">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
    {/* <!-- /contact1 --> */}
    </>
  )
}

export default Contact
