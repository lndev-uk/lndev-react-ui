import React from 'react';
import scss from '../../scss/bridge';
import styled from 'styled-components';

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

export const Story = () => {
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

Story.title = 'Design System/Colors';
export default Story;
