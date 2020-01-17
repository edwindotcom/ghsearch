import React from "react";
import { BaseStyles, Box, Heading } from "@primer/components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BaseStyles>
          <Box m={4}>
            <Heading mb={2}>Foo</Heading>
            <p>This will get Primer text styles.</p>
          </Box>
        </BaseStyles>
      </div>
    );
  }
}

export default App;
