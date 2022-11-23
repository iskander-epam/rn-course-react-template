import { Component } from "react";
import { TABS } from "./constants";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: TABS.map((tab, tabIndex) => ({
        ...tab,
        display: tabIndex === 0
      }))
    };
  }

  toggleTab = ({ target }) => {
    const { name } = target;
    this.setState((prevState) => {
      return {
        tabs: prevState.tabs.map((tab) => ({
          ...tab,
          display: name === tab.name
        }))
      };
    });
  };

  render() {
    const { tabs } = this.state;
    return (
      <div>
        <div>
          {tabs.map(({ name }) => (
            <button key={name} onClick={this.toggleTab} name={name}>
              {name}
            </button>
          ))}
        </div>

        <div>
          {tabs.map(({ display, contents, name }) =>
            display ? <div key={name}>{contents}</div> : null
          )}
        </div>
      </div>
    );
  }
}

export { Tabs };
