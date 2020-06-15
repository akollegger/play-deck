import React from 'react';

import { ThemeProvider } from 'theme-ui'
import {Box, Flex} from 'rebass';

import { neo4jTheme } from './neo4j-theme';
import { PlayDeck } from './components/play-deck';

import { useFetch } from './hooks';

// const deckUrl = require('./content/pure-text.md');
const deckUrl = require('./content/layouts.md');
// const deckUrl = require('./content/remarkedup.md');

const components = {
  Box: Box, 
  Flex: Flex
}
const App = () => {
  const [deck, loading] = useFetch(deckUrl);
  return (
    <ThemeProvider theme={neo4jTheme} >
      <PlayDeck deck={deck} />
    </ThemeProvider>
  );
}

export default App;
