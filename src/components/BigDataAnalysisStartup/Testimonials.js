import React from "react"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"
import shape9 from "../../images/shape/vector-shape9.png"
import shape10 from "../../images/shape/vector-shape10.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-area bg-23173a pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients are Saying?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-box">
                <img src={user1} className="shadow-sm" alt="testimonials" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>Alex Maxwell</h3>
                    <span>CEO at EnvyTheme</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <img src={user2} className="shadow-sm" alt="testimonials" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>David Warner</h3>
                    <span>CEO at Envato</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <img src={user3} className="shadow-sm" alt="testimonials" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>CEO at ThemeForest</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="vector-shape9">
          <img src={shape9} alt="testimonials" />
        </div>
        <div className="vector-shape10">
          <img src={shape10} alt="testimonials" />
        </div>
      </section>
    </>
  )
}

export default Testimonials
