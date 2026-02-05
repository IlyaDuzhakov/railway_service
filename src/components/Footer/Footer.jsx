import styles from "./Footer.module.css";
import phoneIcon from "../../assets/icons/phone.svg";
import postboxIcon from "../../assets/icons/postbox.svg";
// import skypeIcon from "../../assets/icons/skype.svg";
import locationIcon from "../../assets/icons/location.svg";
// import youtubeIcon from "../../assets/icons/youtube.svg";
// import linkedinIcon from "/img/icons/linkedin.svg";
import googleIcon from "../../assets/icons/google.svg";
// import facebookIcon from "/img/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import arrowIcon from "../../assets/icons/arrow.svg";
import trainIcon from "../../assets/icons/railway_service.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_top}>
          <div className={styles.footer_left}>
            <h3 className={styles.footer_title}>Свяжитесь с нами</h3>
            <div className={styles.footer_block}>
              <div className={styles.footer_box}>
                <img
                  className={styles.phone_icon}
                  src={phoneIcon}
                  alt="phone icon"
                />
                <a className={styles.information} href="tel:+78000000000">
                  8 (800) 000 00 00
                </a>
              </div>
              <div className={styles.footer_box}>
                <img
                  className={styles.postbox_icon}
                  src={postboxIcon}
                  alt="postbox"
                />
                <a className={styles.information} href="mailto:inbox@mail.ru">
                  inbox@mail.ru
                </a>
              </div>
              <div className={styles.footer_box}>
                <img
                  className={styles.skype_icon}
                  src='/img/icons/youtube.svg'
                  alt="skype"
                />
                <a
                  className={styles.information}
                  href="skype:tu.train.tickets?chat"
                >
                  tu.train.tickets
                </a>
              </div>
              <address className={styles.address}>
                <img
                  className={styles.location_icon}
                  src={locationIcon}
                  alt="location"
                />
                <a
                  className={styles.information}
                  href="https://www.google.com/maps/search/?api=1&query=г.+Москва+ул.+Московская+27-35"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  г. Москва
                  <br />
                  ул. Московская 27–35
                  <br />
                  555 555
                </a>
              </address>
            </div>
          </div>
          <div className={styles.footer_right}>
            <h3 className={styles.footer_title}>Подписка</h3>

            <div className={styles.footer_block}>
              <span className={styles.events}>Будьте в курсе событий</span>
              <div className={styles.footer_box}>
                <input
                  className={styles.email}
                  type="email"
                  placeholder="e-mail"
                />
                <button className={styles.btn_send}>отправить</button>
              </div>
              <div className={styles.footer_right_box}>
                <h3 className={styles.footer_title}>Подписывайтесь на нас</h3>
                <div className={styles.social_icon}>
                  <img
                    className={styles.youtube_icon}
                    src='/img/icons/youtube.svg'
                    alt="youtube"
                  />
                  <img
                    className={styles.linkedin_icon}
                    src='/img/icons/linkedin.svg'
                    alt="linkedin"
                  />
                  <img
                    className={styles.google_icon}
                    src={googleIcon}
                    alt="google"
                  />
                  <img
                    className={styles.facebook_icon}
                    src='/img/icons/facebook.svg'
                    alt="facebook"
                  />
                  <img
                    className={styles.twitter_icon}
                    src={twitterIcon}
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__line}></div>
      <div className="container">
        <div className={styles.footer_bottom}>
          <div className={styles.bottom_box}>
            <img className={styles.train_icon} src={trainIcon} alt="logo" />
            <img className={styles.arrow_icon} src={arrowIcon} alt="arrow" />
            <span className={styles.date}>2018 WEB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
