import React, { Component } from "react";
import "./App.css";
import FeatureItem from "./FeatureItem";
import Summary from "./Summary";
import FeatureHash from "./FeatureHash";
import SummaryOptions from "./summaryOptions";
import Form from "./Form";

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
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Form feature={this.props.features} />
          <Summary summary={this.props.summary} total={this.props.total} />
          <FeatureItem
            itemHash={this.props.itemHash}
            item={this.props.item}
            feature={this.props.feature}
            selected={this.state.selected}
            updateFeature={this.props.updateFeature}
          />
          <FeatureHash
            featureHash={this.props.featureHash}
            options={this.props.options}
            feature={this.props.feature}
          />
          <SummaryOptions
            feature={this.props.feature}
            featureHash={this.props.featureHash}
            selectedOption={this.props.selectedOption}
          />
        </main>
      </div>
    );
  }
}

export default App;
