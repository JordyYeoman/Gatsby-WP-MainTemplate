import styled, { css, createGlobalStyle } from 'styled-components';

// flex row component
const ExampleFlex = `
  display: flex;
  flex-direction: row;
`

// component one
const ComponentOne = styled(ExampleFlex)`
  justify-content: flex-start;
`
// component two
const ComponentTwo = styled(ExampleFlex)`
  justify-content: space-between;
`


// component three
const ComponentThree = styled(ExampleFlex)`
  justify-content: space-evenly;
`