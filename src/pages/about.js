import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
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
                  Welcome to The Flower Shop, conveniently located on the Golden Valley, Minnesota.
                  Offering local and international flower delivery, we pride ourselves in quality and beautifully presented flowers.
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
