import React from 'react';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

import withPrism from '../../utils/withPrism';

const installCode = `
  /* If you are using NPM */
  npm install --save react-bnb-gallery

  /* If you are using Yarn */
  yarn add react-bnb-gallery
`;

const importStyles = `
  import 'react-bnb-gallery/dist/style.css'
`;

const usageCode = `
  import React, { useState } from 'react';
  import ReactBnbGallery from 'react-bnb-gallery';

  const PHOTOS = [...];

  class GalleryExample = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>
          Open gallery
        </button>
        <ReactBnbGallery
          show={isOpen}
          photos={PHOTOS}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  };
`;

const GettingStarted = () => (
  <Container className="container">
    <Heading>Getting Started</Heading>
    <Text>You can install <a href="https://www.npmjs.com/package/react-bnb-gallery" target="_blank" rel="noopener noreferrer">react-bnb-gallery</a> from <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm</a>.</Text>
    <pre className="language-javascript">
      <code className="language-javascript">
        {installCode}
      </code>
    </pre>
    <Heading>Importing compiled CSS</Heading>
    <Text>Alternatively, you may use the library CSS by simply adding this line to your project’s entry point:</Text>
    <pre className="language-javascript">
      <code className="language-javascript">
        {importStyles}
      </code>
    </pre>
    <Text>Following code is simplest usage:</Text>
    <pre className="language-javascript">
      <code className="language-javascript">
        {usageCode}
      </code>
    </pre>
  </Container>
);

export default withPrism(GettingStarted);
