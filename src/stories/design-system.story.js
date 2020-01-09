import React from 'react';
import scss from '../scss/bridge';
import PropTypes from 'prop-types';
import styled from 'styled-components';
export default {
  title: 'Design System'
};

const ColorRow = ({ name, fontColor }) => {
  return (
    <tr>
      <td style={{ backgroundColor: scss.colors[name] }}>
        <ul style={{ listStyle: 'none', color: fontColor }}>
          <LI>
            <strong>Name:</strong> {name}
          </LI>
          <LI>
            <strong>HEX:</strong> {scss.colors[name]}
          </LI>
        </ul>
      </td>
    </tr>
  );
};

const LI = styled.li`
  float: left;
  margin-left: 5px;
`;

export const Colors = () => {
  return (
    <div className="container">
      <h1>Colors</h1>
      <p>
        Here are the colors available on the UI system separated by groups of UX
      </p>
      <p>
        You can reference this colors in React by importing the scss object from
        this library <br />
        <code>color=scss.colors.NAME</code>
      </p>
      <h2>Design System:</h2>
      <p>
        Here are the allowed color scheme that reporesents the company. Always
        adhere to these guidelines to keep our brand identity.
      </p>

      <table>
        <tbody>
          <ColorRow name="lngrey" fontColor="black" />
          <ColorRow name="lngreengrey" fontColor="black" />
          <ColorRow name="lndarkgrey" fontColor="white" />
          <ColorRow name="lnred" fontColor="white" />
          <ColorRow name="lnlightgrey" fontColor="black" />
          <ColorRow name="lnwhite" fontColor="black" />
          <ColorRow name="lnlblack" fontColor="white" />
        </tbody>
      </table>
      <h2>UX System</h2>
      <p>This colors uses User Experience semantics.</p>
      <table>
        <tbody>
          <ColorRow name="primary" fontColor="white" />
          <ColorRow name="secondary" fontColor="white" />
          <ColorRow name="tertiary" fontColor="black" />
          <ColorRow name="quaternary" fontColor="black" />
          <ColorRow name="quinary" fontColor="black" />
        </tbody>
      </table>
      <h2>UI System</h2>
      <p>This system is based on APP UI system</p>
      <table>
        <tbody>
          <ColorRow name="default" fontColor="white" />
          <ColorRow name="success" fontColor="white" />
          <ColorRow name="info" fontColor="white" />
          <ColorRow name="warning" fontColor="white" />
          <ColorRow name="error" fontColor="white" />
        </tbody>
      </table>
    </div>
  );
};
const Characters = styled.p`
  font-size: 4rem;
  letter-spacing: 5rem;
  word-break: break-all;
`;
export const Typography = () => {
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
