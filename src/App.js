
// import logo from './logo.svg';
import { Box, SymbolsProvider, useGlobalTheme, useGlobalState } from '@symbo.ls/react'

function App() {
  return (
    <SymbolsProvider>
      <Box theme="document">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Box padding="A B" round="A">
          Learn React
        </Box>
      </Box>
    </SymbolsProvider>
  );
}

export default App;
