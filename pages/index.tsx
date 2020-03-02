import React from 'react';
import Head from 'next/head';
import { FiSearch, FiMap, FiChevronRight } from 'react-icons/fi';
import { FaPlaneDeparture, FaStar } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import {
  IoIosChatboxes,
  IoIosBookmark,
  IoIosHome,
  IoIosKey
} from 'react-icons/io';


import '../style/base/base.scss';
import '../style/layout/layout.scss';
import '../style/components/components.scss';
import Link from 'next/link';

const Home = () => (
  <div>
    <Head>
      <title>Trillo &mdash; Your all in one booking app</title>
      <link rel="icon" href="/static/images/favicon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className={'container'}>
      <header className={'header'}>
        <img
          className={'logo'}
          src={'static/images/logo.png'}
          alt={'trillo logo'}
        />
        <form className={'search'}>
          <input
            className={'search__input'}
            type={'text'}
            placeholder={'Search hotels'}
          />
          <button className={'search__button'}>
            <FiSearch className={'search__icon'} />
          </button>
        </form>
        <nav className={'user-nav'}>
          <div className={'user-nav__icon-box'}>
            <IoIosBookmark className={'user-nav__icon'} />
            <span className={'user-nav__notification'}>7</span>
          </div>
          <div className={'user-nav__icon-box'}>
            <IoIosChatboxes className={'user-nav__icon'} />
            <span className={'user-nav__notification'}>13</span>
          </div>
          <div className={'user-nav__user'}>
            <img
              className={'user-nav__user-photo'}
              src={'static/images/user.jpg'}
              alt={'user photo'}
            />
            <span className={'user-nav__user-name'}>Jonas</span>
          </div>
        </nav>
      </header>

      <div className={'content'}>
        <nav className={'sidebar'}>
          <ul className={'side-nav'}>
            <li className={'side-nav__item side-nav__item--active'}>
              <Link href={'#'}>
                <a className={'side-nav__link'}>
                  <IoIosHome className={'side-nav__icon'} />
                  <span>Hotel</span>
                </a>
              </Link>
            </li>
            <li className={'side-nav__item'}>
              <Link href={'#'}>
                <a className={'side-nav__link'}>
                  <FaPlaneDeparture className={'side-nav__icon'} />
                  <span>Flight</span>
                </a>
              </Link>
            </li>
            <li className={'side-nav__item'}>
              <Link href={'#'}>
                <a className={'side-nav__link'}>
                  <IoIosKey className={'side-nav__icon'} />
                  <span>Car rental</span>
                </a>
              </Link>
            </li>
            <li className={'side-nav__item'}>
              <Link href={'#'}>
                <a className={'side-nav__link'}>
                  <FiMap className={'side-nav__icon'} />
                  <span>Tours</span>
                </a>
              </Link>
            </li>
          </ul>

          <div className={'legal'}>
            &copy; 2020 by Trillo. All right reserved.
          </div>
        </nav>
        <main className={'hotel-view'}>
          <div className={'gallery'}>
            <figure className={'gallery__item'}>
              <img
                className={'gallery__photo'}
                src={'static/images/hotel-1.jpg'}
                alt={'photo of hotel 1'}
              />
            </figure>
            <figure className={'gallery__item'}>
              <img
                className={'gallery__photo'}
                src={'static/images/hotel-2.jpg'}
                alt={'photo of hotel 2'}
              />
            </figure>
            <figure className={'gallery__item'}>
              <img
                className={'gallery__photo'}
                src={'static/images/hotel-3.jpg'}
                alt={'photo of hotel 3'}
              />
            </figure>
          </div>

          <div className={'overview'}>
            <h1 className={'overview__heading'}>Hotel Las Palmas</h1>
            <div className={'overview__stars'}>
              <FaStar className={'overview__icon-star'} />
              <FaStar className={'overview__icon-star'} />
              <FaStar className={'overview__icon-star'} />
              <FaStar className={'overview__icon-star'} />
              <FaStar className={'overview__icon-star'} />
            </div>

            <div className={'overview__location'}>
              <TiLocation className={'overview__icon-location'} />
              <button className={'btn-inline'}>Lusaka, Zambia</button>
            </div>
            <div className={'overview__rating'}>
              <div className={'overview__rating-average'}>8.3</div>
              <div className={'overview__rating-count'}>429 votes</div>
            </div>
          </div>

          <div className={'detail'}>
            <div className={'description'}>
              <p className={'paragraph'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className={'paragraph'}>
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>

              <ul className={'list'}>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  Close to the beach
                </li>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  Breakfast included
                </li>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  Free Airport shuttle
                </li>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  Free wifi in all rooms
                </li>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  Air conditioning and heating
                </li>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  Pets allowed
                </li>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  We speak all languages
                </li>
                <li className={'list__item'}>
                  <FiChevronRight className={'list__item-icon'} />
                  Perfect for families
                </li>
              </ul>

              <div className={'recommend'}>
                <p className={'recommend__count'}>
                  Lucy and 3 other friends recommended this hotel.
                </p>
                <div className={'recommend__friends'}>
                  <img
                    className={'recommend__photo'}
                    src={'static/images/user-3.jpg'}
                    alt={'friend 1'}
                  />
                  <img
                    className={'recommend__photo'}
                    src={'static/images/user-4.jpg'}
                    alt={'friend 2'}
                  />
                  <img
                    className={'recommend__photo'}
                    src={'static/images/user-5.jpg'}
                    alt={'friend 3'}
                  />
                  <img
                    className={'recommend__photo'}
                    src={'static/images/user-6.jpg'}
                    alt={'friend 4'}
                  />
                </div>
              </div>
            </div>
            <figure className={'user-reviews'}>
              <figure className={'review'}>
                <blockquote className={'review__text'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className={'review__user'}>
                  <img
                    className={'review__photo'}
                    src={'static/images/user-1.jpg'}
                    alt={'user 1'}
                  />
                  <div className={'review__user-box'}>
                    <p className={'review__user-name'}>Mark Johnson</p>
                    <p className={'review__user-date'}>Feb 23th, 2020</p>
                  </div>

                  <div className={'review__rating'}>7.8</div>
                </figcaption>
              </figure>
              <figure className={'review'}>
                <blockquote className={'review__text'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi.
                </blockquote>
                <figcaption className={'review__user'}>
                  <img
                    className={'review__photo'}
                    src={'static/images/user-2.jpg'}
                    alt={'user 2'}
                  />
                  <div className={'review__user-box'}>
                    <p className={'review__user-name'}>Sally Williams</p>
                    <p className={'review__user-date'}>Sep 13th, 2020</p>
                  </div>

                  <div className={'review__rating'}>9.5</div>
                </figcaption>
              </figure>
              <button className={'btn-inline'}>
                Show all<span>&rarr;</span>
              </button>
            </figure>
          </div>
          <div className="cta">
            <h2 className="cta__book-now">
              Good news! we have 4 free rooms for your selected dates!
            </h2>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
);

export default Home;
