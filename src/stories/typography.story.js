import React from 'react';
import scssVariables from '../scss/base/_variables.scss';
export default {
  title: 'Typography'
};
const FontRow = ({ tag, fontFamily, fontWeight, fontSize, lineHeight }) => (
  <tr>
    <td dangerouslySetInnerHTML={{ __html: tag }}></td>
    <td>
      <pre>{fontFamily}</pre>
    </td>
    <td>
      <pre>{fontWeight}</pre>
    </td>
    <td>
      <pre>{fontSize}</pre>
    </td>
    <td>
      <pre>{lineHeight}</pre>
    </td>
  </tr>
);

export const ByHTMLElement = () => {
  return (
    <div>
      <h1>Typgraphy</h1>
      <hr />
      <div>
        <h3>By Element</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Element</th>
              <th>font-family</th>
              <th>font-weihgt</th>
              <th>font-size</th>
              <th>line-height</th>
            </tr>
          </thead>
          <tbody>
            <FontRow
              tag="<h1>H1</h1>"
              fontFamily={`$ff-base: ${scssVariables['ffBase']}`}
              fontWeight={`$fw-bold: ${scssVariables['fwBold']}`}
              fontSize={`$fz-huge: ${scssVariables['fzHuge']}`}
              lineHeight={`$lh-huge: ${scssVariables['lhHuge']}`}
            />
            <FontRow
              tag="<h2>H2</h2>"
              fontFamily={`$ff-base: ${scssVariables['ffBase']}`}
              fontWeight={`$fw-light: ${scssVariables['fwLight']}`}
              fontSize={`$fz-huge: ${scssVariables['fzHuge']}`}
              lineHeight={`$lh-huge: ${scssVariables['lhHuge']}`}
            />
            <FontRow
              tag="<h3>H3</h3>"
              fontFamily={`$ff-base: ${scssVariables['ffBase']}`}
              fontWeight={`$fw-bold: ${scssVariables['fwBold']}`}
              fontSize={`$fz-big: ${scssVariables['fzBig']}`}
              lineHeight={`$lh-big: ${scssVariables['lhBig']}`}
            />
            <FontRow
              tag="<h4>H4</h4>"
              fontFamily={`$ff-base: ${scssVariables['ffBase']}`}
              fontWeight={`$fw-lihgt: ${scssVariables['fwLight']}`}
              fontSize={`$fz-big: ${scssVariables['fzBig']}`}
              lineHeight={`$lh-big: ${scssVariables['lhBig']}`}
            />
            <FontRow
              tag="<h5>H5</h5>"
              fontFamily={`$ff-base: ${scssVariables['ffBase']}`}
              fontWeight={`$fw-bold: ${scssVariables['fwBold']}`}
              fontSize={`$fz-medium: ${scssVariables['fzMedium']}`}
              lineHeight={`$lh-medium: ${scssVariables['lhMedium']}`}
            />
            <FontRow
              tag="<h6>H6</h6>"
              fontFamily={`$ff-base: ${scssVariables['ffBase']}`}
              fontWeight={`$fw-bold: ${scssVariables['fwBold']}`}
              fontSize={`$fz-small: ${scssVariables['fzSmall']}`}
              lineHeight={`$lh-small: ${scssVariables['lhSmall']}`}
            />
            <FontRow
              tag="<p>p</p>"
              fontFamily={`$ff-base: ${scssVariables['ffBase']}`}
              fontWeight={`$fw-base: ${scssVariables['fwBase']}`}
              fontSize={`$fz-base: ${scssVariables['fzBase']}`}
              lineHeight={`$lh-base: ${scssVariables['lhBase']}`}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ByCSSClass = () => {
  return (
    <div className="container">
      <h1>Typgraphy</h1>
      <hr />
      <div>
        <h3>By CSS Class</h3>
        <table className="table">
          <thead>
            <tr className="text-left">
              <th>Class</th>
              <th>font-family</th>
              <th>font-weihgt</th>
              <th>font-size</th>
              <th>line-height</th>
            </tr>
          </thead>
          <tbody>
            <FontRow
              tag="<p class='text-huge'>.text-huge</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-huge: ${scssVariables['fzHuge']}`}
              lineHeight={`$lh-huge: ${scssVariables['lhHuge']}`}
            />
            <FontRow
              tag="<p class='text-big'>.text-big</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-big: ${scssVariables['fzBig']}`}
              lineHeight={`$lh-big: ${scssVariables['lhBig']}`}
            />
            <FontRow
              tag="<p class='text-medium'>.text-medium</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-medium: ${scssVariables['fzMedium']}`}
              lineHeight={`$lh-medium: ${scssVariables['lhMedium']}`}
            />
            <FontRow
              tag="<p class='text-small'>.text-small</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-small: ${scssVariables['fzSmall']}`}
              lineHeight={`$lh-small: ${scssVariables['lhSmall']}`}
            />
            <FontRow
              tag="<p class='text-body'>.text-body</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-body: ${scssVariables['fzBody']}`}
              lineHeight={`$lh-body: ${scssVariables['lhBody']}`}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
