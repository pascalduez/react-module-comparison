import * as React from 'react';


interface Props {
  title: string;
}


const Header = ({ title, ...extraProps }: Props) => (
  <header
    role="banner"
    {...extraProps}
  >
    <h1>
      {title}
    </h1>
  </header>
);


export default Header;
