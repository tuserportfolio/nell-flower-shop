import React from 'react';

import Layout from '../components/Layout';

import product1 from '../assets/images/products-01.jpg';
import product2 from '../assets/images/products-02.jpg';
import product3 from '../assets/images/products-03.jpg';

const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  From Around the World
                </span>
                <span className="section-heading-lower">
                  Flower Bouquets
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product1}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Florists display floral gifts perfect for Birthdays,
                Anniversaries, Birth of a baby - just about any occasion you can think of!
                All the listed flowers and arrangements are available for next day flower delivery in USA.
                The florists also cater for same day flower delivery in USA if ordered by 2pm local time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  House Design
                </span>
                <span className="section-heading-lower">
                  House Plants
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product2}
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Studies have proven that house plants improve concentration and productivity (by up to 15%),
                reduce stress levels, and boost your mood. To create your perfect green haven, it's worthwhile
                spending a little bit of time researching the plants are best suited for each
                room and what kind of environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  From Around the World
                </span>
                <span className="section-heading-lower">
                  Floral designs
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product3}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Floral design or floral arts is the art of creating flower arrangements in vases,
                bowls, baskets, or other containers, or making bouquets and compositions from cut flowers,
                foliages, herbs, ornamental grasses, and other plant materials.
                We create a variety of floral designs such as wreaths, bouquets, corsages, boutonnières/'buttonholes',
                permanent arrangements, and other more complicated arrangements are also important.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
