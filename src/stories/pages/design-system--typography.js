import React from 'react';

import styled from 'styled-components';

const Characters = styled.p`
  font-size: 4rem;
  letter-spacing: 5rem;
  word-break: break-all;
`;
const Story = () => {
  return (
    <div className="container">
      <h1>Typography</h1>
      <h2>Quicksand</h2>
      <p>
        Quicksand is a display sans serif with rounded terminals. The project
        was initiated by Andrew Paglinawan in 2008 using geometric shapes as a
        core foundation. It is designed for display purposes but kept legible
        enough to use in small sizes as well. In 2016, in collaboration with
        Andrew, it was thoroughly revised by Thomas Jockin to improve the
        quality. In 2019, Mirko Velimirovic converted the family into a variable
        font.
      </p>
      <p>
        by: Andrew Paglinawan{' '}
        <a href="https://fonts.google.com/specimen/Quicksand" target="_blank">
          Quicksand at Google fonts
        </a>
      </p>
      <h3>Characters</h3>
      <Characters>
        {
          'ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.'
        }
      </Characters>
      <h3>Styles</h3>
      <p>Available font weights</p>
      <ul style={{ fontSize: '2rem' }}>
        <li style={{ fontWeight: 300 }}>Light : 300</li>
        <li style={{ fontWeight: 400 }}>Regular : 400</li>
        <li style={{ fontWeight: 500 }}>Medium : 500</li>
        <li style={{ fontWeight: 600 }}>Semi-Bold : 600</li>
        <li style={{ fontWeight: 700 }}>Bold : 700</li>
      </ul>
    </div>
  );
};

Story.title = 'DesignSystem/Typography';
export default Story;
