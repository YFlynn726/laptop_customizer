import React, { Component } from "react";
import "./App.css";
import FeatureItem from "./FeatureItem";
import Summary from "./Summary";
import FeatureHash from "./FeatureHash";
import SummaryOptions from "./summaryOptions";

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

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
       return (
          <FeatureItem 
            itemHash={itemHash}
            item={item}
            feature={feature}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
          />
        );
      });

      return (
        <FeatureHash 
        featureHash={featureHash}
        options={options}
        feature={feature}
        />
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
       <SummaryOptions 
       feature={feature}
       featureHash={featureHash}
       selectedOption={selectedOption} />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Form 
          feature={features}
          />
          <Summary summary={summary} total={total}
           />
        </main>
      </div>
    );
  }
}

export default App;
