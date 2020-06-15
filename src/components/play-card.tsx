import React, { FC, HTMLAttributes } from 'react';

import MDX from '@mdx-js/runtime'

// import { PlayMdx } from './play-mdx';

import { Box, Flex } from 'rebass'
import { rotate, darken } from '@theme-ui/color'
// import Prism from '@theme-ui/prism'

const remarkEmoji = require('remark-emoji');
const remarkMath = require('remark-math')

const remarkPlugins: any[] = [
  [remarkEmoji, {padSpaceAfter:true}],
  [remarkMath]
];

// const rehypeHighlight = require('rehype-highlight');
// const rehypeKatex = require('rehype-katex')
const rehypePlugins: any[] = [
  // rehypeHighlight,
  // rehypeKatex
];

const components = {
  // pre: ({ children }:{children:any}) => <>{children}</>,
  // code: Prism,
  Box: Box,
  Flex: Flex
}

export interface PlayCardProps extends HTMLAttributes<HTMLDivElement> {
  md: string
}

export const PlayCard: FC<PlayCardProps> = (props) => {
  const {md} = props;

  return <Box sx={{
    variant: 'box.slide', 
    backgroundColor: rotate('primary', Math.floor(Math.random() * 30) * 12
    )}}>
      <MDX remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
        { md }
      </MDX>
  </Box>
    ;
};