import Link from 'next/link';
import React from 'react';

function HomePage() {
  return (
    <p>
      This is the Home page. <AboutLink/> to go to the About page.
    </p>
  );
}

export default HomePage;

function AboutLink() {
  return (
    <Link href={"/about"}>
      <a>Click here</a>
    </Link>
  );
}
