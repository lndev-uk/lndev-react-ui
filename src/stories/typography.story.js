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
    <div>
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

export const demoContent = () => (
  <div>
    <h1>
      <span className="text-error">{'<h1>'}</span>Lorem ipsum dolor sit amet
    </h1>
    <p>
      <span className="text-error">{'<p>'}</span>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
      ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
      Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
      porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Curabitur sodales ligula in libero.{' '}
    </p>
    <h2>
      <span className="text-error">{'<h2>'}</span>Lorem ipsum dolor sit amet
    </h2>
    <p>
      <span className="text-error">{'<b>'}</span>
      <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Sed
      dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.{' '}
      <span className="text-error">{'<b>'}</span>
      <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam. In
      scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
      Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
      vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia
      aliquet. Mauris ipsum.{' '}
    </p>
    <h3>
      <span className="text-error">{'<h3>'}</span>Lorem ipsum dolor sit amet
    </h3>
    <p>
      <span className="text-error">{'<p>'}</span>Nulla metus metus, ullamcorper
      vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis,
      tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
      facilisi. Ut fringilla. Suspendisse potenti.{' '}
      <span className="text-error">{'<b>'}</span>
      <b>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh</b>
      . Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.{' '}
      <span className="text-error">{'<i>'}</span>
      <i>In scelerisque sem at dolor</i>. Proin quam. Etiam ultrices.{' '}
    </p>
    <h4>
      <span className="text-error">{'<h4>'}</span>Lorem ipsum dolor sit amet
    </h4>
    <p>
      <span className="text-error">{'<p>'}</span>Suspendisse in justo eu magna
      luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque
      cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum
      magna augue eget diam. <span className="text-error">{'<i>'}</span>
      <i>Proin ut ligula vel nunc egestas porttitor</i>. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
      lacinia molestie dui. Praesent blandit dolor.{' '}
      <span className="text-error">{'<b>'}</span>
      <b>Etiam ultrices</b>. Sed non quam. In vel mi sit amet augue congue
      elementum. <span className="text-error">{'<b>'}</span>
      <b>Vestibulum sapien</b>. Morbi in ipsum sit amet pede facilisis laoreet.
      Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
      tincidunt malesuada tellus. Ut ultrices ultrices enim.{' '}
      <span className="text-error">{'<b>'}</span>
      <b>Suspendisse in justo eu magna luctus suscipit</b>. Curabitur sit amet
      mauris. Morbi in dui quis est pulvinar ullamcorper.{' '}
    </p>
    <h5>
      <span className="text-error">{'<h5>'}</span>Lorem ipsum dolor sit amet
    </h5>
    <p>
      <span className="text-error">{'<p>'}</span>Nulla facilisi. Integer lacinia
      sollicitudin massa. Cras metus. Sed aliquet risus a tortor.{' '}
      <span className="text-error">{'<i>'}</span>
      <i>Suspendisse in justo eu magna luctus suscipit</i>. Integer id quam.
      Morbi mi. <span className="text-error">{'<b>'}</span>
      <b>Morbi in dui quis est pulvinar ullamcorper</b>. Quisque nisl felis,
      venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales
      libero eget ante. Nulla quam. Aenean laoreet.{' '}
      <span className="text-error">{'<i>'}</span>
      <i>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue</i>.
      Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.{' '}
    </p>
    <h6>
      <span className="text-error">{'<h6>'}</span>Lorem ipsum dolor sit amet
    </h6>
    <p>
      <span className="text-error">{'<p>'}</span> Cras metus. Sed aliquet risus
      a tortor. <span className="text-error">{'<i>'}</span>
      <i>Suspendisse in justo eu magna luctus suscipit</i>. Integer id quam.
      Morbi mi. <span className="text-error">{'<b>'}</span>
      <b>Morbi in dui quis est pulvinar ullamcorper</b>. Quisque nisl felis,
      venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales
      libero eget ante. Nulla quam. Aenean laoreet.{' '}
      <i>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue</i>.
      Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.{' '}
    </p>
    <small>
      <span className="text-error">{'<small>'}</span>Nulla facilisi. Integer
      lacinia sollicitudin massa.
    </small>
    <br />
    <span className="text-error">{'<ul>'}</span>
    <ul>
      <li>
        <span className="text-error">{'<li>'}</span>Lorem ipsum dolor sit amet
      </li>
      <li>Lorem ipsum dolor sit </li>
      <li>Lorem ipsum dolor </li>
    </ul>
  </div>
);
