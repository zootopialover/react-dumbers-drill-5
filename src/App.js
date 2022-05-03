import React from "react";
import "./styles.css";
import ScheduleSelector from "react-schedule-selector";

class App extends React.Component {
  state = { schedule: [] };

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  };

  render() {
    return (
      <div className="App">
        <ScheduleSelector
          selection={this.state.schedule}
          numDays={16}
          minTime={8}
          maxTime={22}
          hourlyChunks={2}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
