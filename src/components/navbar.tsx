import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="ILKKA Logo" width={100} height={40} />
          </Link>
          <div className="flex items-center justify-center flex-grow">
            <Link href="/" className="w-1/5 text-center text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/#about" className="w-1/5 text-center text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="/#products" className="w-1/5 text-center text-muted-foreground hover:text-primary">
              Products
            </Link>
            <Link href="/#contact" className="w-1/5 text-center text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
