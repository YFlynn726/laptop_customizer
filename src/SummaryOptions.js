import React, { Component } from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class SummaryOptions extends Component {
  render() {
      const summary = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.state.selected[feature];
    

    return (
      <div className="summary__option" key={this.props.featureHash}>
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">
          {this.props.selectedOption.name}
        </div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.selectedOption.cost)}
        </div>
      </div>
    );
}
}


export default SummaryOptions;
