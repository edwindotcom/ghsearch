import * as React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    // initializeIcons();
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event) {
      this.setState({ value: event.target.value });
    } else {
      this.setState({ value: "" });
    }
  }

  handleSubmit(event) {
    window.open(
      this.props.baseUrl +
        this.state.value,
      "_blank"
    );
  }

  render() {
    return (
<div></div>
    );
  }
}

export default Search;
