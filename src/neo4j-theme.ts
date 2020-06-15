import ms from 'modularscale-js';
import { rotate, darken } from '@theme-ui/color'
import nightOwl from '@theme-ui/prism/presets/night-owl.json'

const baseAspectRatio = 16/9;
const baseFontSize = 12 / baseAspectRatio;
const fontRatio = 1.5;
const lineHeight = 1.6;
const leading = baseFontSize * lineHeight;

const scaledFontSize = (i:number) => {
  return ms(i, {base: [baseFontSize], ratio:fontRatio})
}

const scaledFontSizes = () => {
  const sizes = [];
  for (let i=-8; i<=0; i++) {
    sizes.push(`${scaledFontSize(i)}em`)
  }
  return sizes;
}

export const neo4jTheme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: '"Fira Code", Menlo, monospace',
  },
  fontSizes: scaledFontSizes(),
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: lineHeight,
    heading: lineHeight,
  },
  colors: {
    text: '#fff',
    background: '#222',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  text: {
    heading: {
      textAlign: 'center',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 8,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 3,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 6,
      lineHeight: '1.2em',
      ...nightOwl
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    p: {
      fontSize: 6
    },
    ul: {
      textAlign: 'left',
      fontSize: 6
    },
    a: {
      color: '#fff'
    }
  },
  flex: {
    deck: {
      backgroundColor:'background', 
      height:'100vh',
      flex: 'center',
      alignItems: 'center',
      fontSize: `${1.8 / baseAspectRatio}vw`
    },
    row: {
      color: 'text',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },
  },
  box: {
    slide: {
      margin: 'auto',
      width: '100vw',
      maxWidth: `${100 * baseAspectRatio}vh`,
      height: `${100 / baseAspectRatio}vw`,
      maxHeight: '100vh',
      backgroundColor: 'primary',
      overflow: 'hidden'
    },
    section: {
      margin: 'auto',
      color: 'text',
      // backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    split_1_column: {
      p: '1em',
      borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    },
    split_2_column: {
      p: '1em',
      borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
      fontSize: '0.5em'
    },
    split_3_column: {
      p: '1em',
      borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
      fontSize: '0.35em'
    }
  }
}
