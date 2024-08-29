import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <Image
            height={80}
            width={160}
            src="/white.jpeg" 
            alt="Tech Company Logo"
            className="btn btn-ghost text-xl"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/services">Service</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
