import React from "react";
import Badge from ".";
import { VariantList, SizeList } from "../../scss";

export default { title: "Badge" };

export const Variants = () => (
  <div className="container">
    <h1>Badge Variant:</h1>
    {VariantList.map(variant => {
      return (
        <p key={variant}>
          <Badge variant={variant} label={variant} />
        </p>
      );
    })}
  </div>
);

export const Sizes = () => (
  <div className="container">
    <h1>Badge Sizes:</h1>
    {SizeList.map(size => {
      return (
        <p key={size}>
          <Badge size={size} label={size} />
        </p>
      );
    })}
  </div>
);

export const Example = () => (
  <div className="container">
    <h1>Example:</h1>
    <p>
      If Size is not specified the Badges scale to match the size of the
      immediate parent element by using relative font sizing and em units.
    </p>
    <hr />
    <h1>
      Example heading <Badge variant="primary" label="Primary" />
    </h1>
    <h2>
      Example heading <Badge variant="secondary" label="Secondary" />
    </h2>
    <h3>
      Example heading <Badge variant="dark" label="Dark" />
    </h3>
    <h4>
      Example heading <Badge variant="warning" label="Warning" />
    </h4>
    <h5>
      Example heading <Badge variant="success" label="Success" />
    </h5>
    <h6>
      Example heading <Badge variant="error" label="Error" />
    </h6>
  </div>
);
