import React from 'react';
import scss from '../scss';
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

export const HTMLElement = () => {
  return (
    <div className="container">
      <h1>Typgraphy By Element</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Element</th>
              <th>
                font-family (var <b>:</b> val)
              </th>
              <th>
                font-weight (var <b>:</b> val)
              </th>
              <th>
                font-size (var <b>:</b> val)
              </th>
              <th>
                line-height (var <b>:</b> val)
              </th>
            </tr>
          </thead>
          <tbody>
            <FontRow
              tag="<h1>H1</h1>"
              fontFamily={`$main-font: ${scss.mainFont}`}
              fontWeight={`$font-weight-light: ${scss['fwBold']}`}
              fontSize={`$font-size-xl: ${scss['ffBase']}`}
              lineHeight={`$lh-huge: ${scss['lhHuge']}`}
            />
            <FontRow
              tag="<h2>H2</h2>"
              fontFamily={`$main-font: ${scss.mainFont}`}
              fontWeight={`$font-weiht-bold: ${scss['fwLight']}`}
              fontSize={`$fz-huge: ${scss['fzHuge']}`}
              lineHeight={`$lh-huge: ${scss['lhHuge']}`}
            />
            <FontRow
              tag="<h3>H3</h3>"
              fontFamily={`$main-font: ${scss.mainFont}`}
              fontWeight={`$font-weight-normal: ${scss['fwBold']}`}
              fontSize={`$fz-big: ${scss['fzBig']}`}
              lineHeight={`$lh-big: ${scss['lhBig']}`}
            />
            <FontRow
              tag="<h4>H4</h4>"
              fontFamily={`$main-font: ${scss.mainFont}`}
              fontWeight={`$font-weight-light: ${scss['fwLight']}`}
              fontSize={`$fz-big: ${scss['fzBig']}`}
              lineHeight={`$lh-big: ${scss['lhBig']}`}
            />
            <FontRow
              tag="<h5>H5</h5>"
              fontFamily={`$main-font: ${scss.mainFont}`}
              fontWeight={`$font-weight-normal: ${scss['fwBold']}`}
              fontSize={`$fz-medium: ${scss['fzMedium']}`}
              lineHeight={`$lh-medium: ${scss['lhMedium']}`}
            />
            <FontRow
              tag="<h6>H6</h6>"
              fontFamily={`$main-font: ${scss.mainFont}`}
              fontWeight={`$font-weight-bold: ${scss['fwBold']}`}
              fontSize={`$fz-small: ${scss['fzSmall']}`}
              lineHeight={`$lh-small: ${scss['lhSmall']}`}
            />
            <FontRow
              tag="<p>p</p>"
              fontFamily={`$main-font: ${scss.mainFont}`}
              fontWeight={`$font-weight-normal: ${scss['fwBase']}`}
              fontSize={`$fz-base: ${scss['fzBase']}`}
              lineHeight={`$lh-base: ${scss['lhBase']}`}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CSSSizeClass = () => {
  return (
    <div className="container">
      <h1>Typgraphy by CSS Class</h1>
      <div>
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
              fontSize={`$fz-huge: ${scss['fzHuge']}`}
              lineHeight={`$lh-huge: ${scss['lhHuge']}`}
            />
            <FontRow
              tag="<p class='text-big'>.text-big</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-big: ${scss['fzBig']}`}
              lineHeight={`$lh-big: ${scss['lhBig']}`}
            />
            <FontRow
              tag="<p class='text-medium'>.text-medium</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-medium: ${scss['fzMedium']}`}
              lineHeight={`$lh-medium: ${scss['lhMedium']}`}
            />
            <FontRow
              tag="<p class='text-small'>.text-small</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-small: ${scss['fzSmall']}`}
              lineHeight={`$lh-small: ${scss['lhSmall']}`}
            />
            <FontRow
              tag="<p class='text-body'>.text-body</p>"
              fontFamily={`inherit`}
              fontWeight={`inherit`}
              fontSize={`$fz-body: ${scss['fzBody']}`}
              lineHeight={`$lh-body: ${scss['lhBody']}`}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CSSVariantClass = () => {
  return <div></div>;
};

export const CSSHelperClass = () => {
  return <div></div>;
};
