import styles from "../styles/service.module.css";

const Service = () => {
  return (
    <div className={styles.servicecontainer}>
      <div className={styles.sertitle}>
        <h1>Our Services and Procedures.</h1>
      </div>
      <div className={styles.sercontent}>
        <div className={styles.sbox}>
          <h1>Teeth Whitening</h1>
          <p>
            Teeth whitening is the process of removing stains from your teeth
            and brightening your smile
          </p>
        </div>
        <div className={styles.sbox}>
          <h1>Orthodontics</h1>
          <p>To improve the appearance of the teeth and how they work</p>
        </div>
        <div className={styles.sbox}>
          <h1>Tooth Filling</h1>
          <p>
            Tooth fillings are beneficial because they restore the original
            function of the tooth.
          </p>
        </div>
        <div className={styles.sbox}>
          <h1>Dentures</h1>
          <p>
            Dentures are removable appliances that can replace missing teeth and
            help restore your smile.
          </p>
        </div>
        <div className={styles.sbox}>
          <h1>Tooth Cleaning & Polishing</h1>
          <p>
            is a cleaning method your dentist uses to keep your teeth healthy.
          </p>
        </div>
        <div className={styles.sbox}>
          <h1>Periodontics</h1>
          <p>
            Periodontal treatment is used to treat gum disease, a common concern
            to oral health.
          </p>
        </div>
        <div className={styles.sbox}>
          <h1>General Dentistry</h1>
          <p>Treats and manages Your overall oral health care needs</p>
        </div>
        <div className={styles.sbox}>
          <h1>Endodontics</h1>
          <p>
            Root canal treatment, aims to restore damaged or infected tooth pulp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
