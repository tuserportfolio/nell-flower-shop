import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about.jpg';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Come On In</span>
                <span className="section-heading-lower">We're Open</span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sunday
                  <span className="ml-auto">Closed</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Monday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Tuesday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Wednesday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Thursday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Friday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Saturday
                  <span className="ml-auto">9:00 AM to 5:00 PM</span>
                </li>
              </ul>
              <p className="address mb-5">
                <em>
                  <strong>1115 Orchard Street</strong>
                  <br />
                  Golden Valley, Minnesota
                </em>
              </p>
              <p className="mb-0">
                <small>
                  <em>Call Anytime</em>
                </small>
                <br />
                (317) 585-8468
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Floral design, Flower delivery
                  </span>
                  <span className="section-heading-lower">About Our Shop</span>
                </h2>
                <p>
                  We work flower care and handling, floral design, or flower arranging,
                  merchandising, display and flower delivery.
                </p>
                <p className="mb-0">
                  We sell bulk flowers and related supplies to professionals in the trade.
                  We offer fresh flowers and related products and services to consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
