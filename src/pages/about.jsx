import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-container" style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>About Us</h1>
      </header>
      <section style={styles.content}>
        <h2 style={styles.subheading}>Welcome to APKStore</h2>
        <p style={styles.paragraph}>
          At APKStore, we are passionate about providing a reliable and secure
          platform for downloading Android apps. Our goal is to give users easy
          access to a wide range of APK files, from popular apps to new and
          emerging ones. Whether you're looking for productivity apps, games, or
          utility tools, APKStore has you covered.
        </p>
        <h3 style={styles.subheading}>Our Mission</h3>
        <p style={styles.paragraph}>
          We aim to make your experience smooth and hassle-free when it comes to
          downloading Android apps. We carefully curate the apps available on
          our platform, ensuring that they are safe to use and free from
          malware. Our mission is to be the go-to destination for users who
          want a trustworthy APK download experience.
        </p>
        <h3 style={styles.subheading}>Why Choose APKStore?</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Wide selection of APK files</li>
          <li style={styles.listItem}>Secure and malware-free downloads</li>
          <li style={styles.listItem}>Easy-to-use interface</li>
          <li style={styles.listItem}>Regular updates to keep you in the loop</li>
        </ul>
        <h3 style={styles.subheading}>Our Vision</h3>
        <p style={styles.paragraph}>
          We envision APKStore becoming the most trusted source for Android
          APKs. We are constantly working to improve our platform, offer better
          user experiences, and expand our collection of apps. We believe in
          delivering value and empowering users with more choices in the apps
          they use.
        </p>
      </section>
      <footer style={styles.footer}>
        <p>© 2024 APKStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "36px",
    color: "#333",
  },
  content: {
    marginTop: "20px",
  },
  subheading: {
    fontSize: "24px",
    color: "#444",
    marginTop: "20px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
  },
  listItem: {
    fontSize: "16px",
    color: "#555",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "14px",
    color: "#777",
  },
};

export default AboutUs;
