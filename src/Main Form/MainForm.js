import React, { Component } from "react";
import Features from "./Features";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class mainForm extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.updateFeaure}
          USCurrency={USCurrencyFormat}
          slugify={slugify}
        />
      </form>
    );
  }
}

export default mainForm;
