import Link from 'next/link';
import React from 'react';

function AboutPage() {
  return (
    <p>
      This is the About page. <HomeLink/> to go to the Home page.
    </p>
  );
}

export default AboutPage;

function HomeLink() {
  return (
    <Link href={"/"}>
      <a>Click here</a>
    </Link>
  );
}
