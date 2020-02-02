import React, { Component } from "react";
import Features from "./Features";

const total = Object.keys(this.state.selected).reduce(
  (acc, curr) => acc + this.state.selected[curr].cost,
  0
);

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class Summary extends Component {
  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.state.selected[feature];
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    return (
      <div>
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <Features />
        </form>

        <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Summary;
