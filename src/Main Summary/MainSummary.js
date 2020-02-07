import React, { Component } from "react";
import Summary from "./Summary";
import Total from "./Total";

class mainSummary extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary
          featureHash={this.props.featureHash}
          selected={this.props.selected}
          feature={this.props.feature}
          updateFeature={this.props.updateFeature}
          USCurrency={this.props.USCurrencyFormat}
          selectedOptionName={this.props.selectedOption.name}
          selectedOptionCost={this.props.selectedOption.cost}
        />
        <Total />
      </section>
    );
  }
}

export default mainSummary;
