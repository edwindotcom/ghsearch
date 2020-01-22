import React from "react";
// import { BaseStyles, Box, Heading } from "@primer/components";
import {BaseStyles, TabNav, TextInput, Button, Box} from "@primer/components";
// import flexbox from '@styled-system/flexbox'
// import styled from 'styled-components'
// import { space, layout, typography, color } from 'styled-system'

// // Add styled-system functions to your component
// const Flex = styled.div`
//   ${space}
//   ${layout}
//   ${typography}
//   ${color}
// `

const ghAllUrl = "https://github.com/search?q=";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BaseStyles>
          <TabNav aria-label="Main">
            <TabNav.Link href="#home">Home</TabNav.Link>

            <TabNav.Link href="#documentation">Documentation</TabNav.Link>
            <TabNav.Link href="#support">Support</TabNav.Link>
          </TabNav>
          <Box >
            <form onSubmit={this.handleSubmit}>
              <TextInput width="100%" placeholder="Search All Github" />
              <Button>Foo</Button>
            </form>
          </Box>
        </BaseStyles>
      </div>
    );
  }
}

export default App;
