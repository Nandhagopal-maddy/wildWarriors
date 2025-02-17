"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <nav>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/contact"> Terms & Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
      </nav>
    <div className={styles.container1}>
      <p>Follow us on social media:</p>
      <div className={styles.socialMediaIcons}>
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={styles.icon} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
        </Link>
        <Link href="https://www.instagram.com/wildwarriorrace/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </Link>
      </div>
    </div>
    <div className={styles.container2}>
      <p>&copy; {new Date().getFullYear()} Wild Warriors. All rights reserved.</p>
      </div>
       </footer>
);
};

export default Footer;
