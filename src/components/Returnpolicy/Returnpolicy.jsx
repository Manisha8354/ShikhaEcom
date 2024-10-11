import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Returnpolicy() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <>
        <Navbar />
        <div className="bg-gray-50 text-gray-800 p-6 lg:p-12 transition-colors duration-500 hover:bg-gray-100">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h1
              className="text-3xl lg:text-5xl font-bold mb-6 text-center transition-transform transform hover:scale-105 hover:text-pink-500"
              data-aos="zoom-in"
            >
              RETURN & CANCELLATION POLICY
            </h1>
            <p
              className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              At Alankaar The Art of Beads (alankaararts.com), we want you to be
              completely satisfied with your purchase. We understand that
              sometimes items may need to be returned or exchanged, and we're
              here to help make that process as easy as possible.
            </p>
            <p
              className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              We assure our customers that we thoroughly check the quality of
              our products at the time of shipping and also confirm safe packing
              for and damage-free shipping, yet if you receive any damaged
              goods, or if you receive an incorrect product, or if you're simply
              not satisfied with what you've received, we would be happy to give
              you the following alternatives:
            </p>
            <ul
              className="list-disc list-inside mb-4 text-lg lg:text-xl transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              <li>Exchange the goods for an alternative of your choice of equal value.</li>
              <li>Give you a full refund for the price you paid for the goods.</li>
            </ul>

            <h2
              className="text-2xl lg:text-4xl font-bold mb-4 mt-6 transition-transform transform hover:scale-105 hover:text-pink-500"
              data-aos="zoom-in"
            >
              Refund/Replacement Guarantee
            </h2>
            <p
              className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              All products sold at alankaararts.com are covered under our 7 Day
              Refund/Replacement Guarantee. To be eligible for a return, your
              item must be unused and in the same condition that you received it
              with price tags. It must also be in the original packaging. Please
              note that Gift cards and Jewelry items purchased during sale or
              under any other offer are totally Non-returnable items.
            </p>

            <h3
              className="text-lg lg:text-xl font-bold mb-2 transition-transform transform hover:scale-105 hover:text-pink-500"
              data-aos="fade-up"
            >
              For replacing a defective/unused item:
            </h3>
            <p
              className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              Send us a mail at{' '}
              <a
                href="mailto:shikha.b79@gmail.com"
                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
              >
                shikha.b79@gmail.com
              </a>
              , within 7 days from the date of delivery. Do attach the original
              receipt as proof of purchase. We believe in you; however, it is
              mandatory to make a video of unboxing your order and send us along
              with your return/replacement request.
            </p>

            {/* Similar hover and animation effects for the remaining sections */}
            <p
              className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              For faster replacement, we recommend you to send us a return
              request with the reason for return instead of a replacement
              request. We will process your return request, and in the meantime,
              you can place a new order for the item you want.
            </p>

            <p
              className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              The defective/unused product will be recalled, and a replacement
              will be shipped immediately if available. Return charges are
              payable by us for domestic (India) shipments and by the customer
              for international shipments.
            </p>

            {/* Add similar effects for each section below */}
            <h3
              className="text-lg lg:text-xl font-bold mb-2 transition-transform transform hover:scale-105 hover:text-pink-500"
              data-aos="fade-up"
            >
              Return Delivery Address:
            </h3>
            <p
              className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
              data-aos="fade-up"
            >
              Flat No. 401, 4th Floor, JC Heights 7,
              <br />
              Plot No. 16-17, Hanuman Vatika 1,
              <br />
              Heerapura, Nr KD Tower, 200Ft Bypass, Ajmer Road,
              <br />
              Jaipur, 302021, Rajasthan
              <br />
              Contact: 9712982168.
            </p>

            {/* Continue applying hover and animation styles to all sections */}
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
}
