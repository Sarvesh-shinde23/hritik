import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {
  return (<>

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <Image
            height={60}
            width={80}
            src="/vector.svg" 
            alt="Tech Company Logo"
            
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
            </>
  );
};

export default Navbar;