import React, { Component } from "react";

class SummaryOptions extends Component {
  render() {
    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.state.selected[feature];
      console.log(summary);

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">
            {this.props.selectedOption.name}
          </div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
    return <>{SummaryOptions}</>;
  }
}

export default SummaryOptions;
