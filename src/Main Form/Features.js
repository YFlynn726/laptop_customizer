import React, { Component } from "react";
import Options from "./Options";

class Features extends Component {
  //how to set up map correctly
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      console.log(feature);
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Options
            //what do i call here?
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            features={this.props.features}
            feature={feature}
          />
        </fieldset>
      );
    });
    return <div>{features}</div>;
  }
}

export default Features;
