import React, { Component } from "react";
import Summary from "./Main Summary/Summary";
import Total from "./Main Summary/Total";
import "./App.css";
import MainForm from "./Main Form/MainForm";
import MainSummary from "./Main Summary/MainSummary";
import Header from "./Header";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <MainForm features={this.props.features} />
          <MainSummary
            USCurrencyFormat={USCurrencyFormat.format}
            Summary={Summary}
            Total={Total}
          />
        </main>
      </div>
    );
  }
}

export default App;
