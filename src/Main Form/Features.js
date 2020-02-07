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
            feature={this.props.features[feature]}
            selected={this.props.selected[feature].name}
            updateFeature={this.props.updateFeature}
            USCurrency={this.props.USCurrencyFormat}
            slugify={this.props.slugify}
          />
        </fieldset>
      );
    });
    return { features };
  }
}

export default Features;
