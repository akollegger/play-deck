import React, { FC, HTMLAttributes } from 'react';
import { useState, useEffect } from 'react';


import { Box, Flex } from 'rebass'
import { Styled } from 'theme-ui'
import { rotate, darken } from '@theme-ui/color'

import { PlayCard } from './play-card';
import { useKeyPress } from '../hooks';

export interface PlayDeckProps extends HTMLAttributes<HTMLDivElement> {
  deck: string
}

export const PlayDeck: FC<PlayDeckProps> = (props) => {
  const {deck} = props;

  const [slides, setSlides] = useState([""])
  const [currentSlide, setCurrentSlide] = useState(0)

  const gotoNextSlide = useKeyPress(39)
  const gotoPreviousSlide = useKeyPress(37)

  useEffect( () => {
    const newSlides = deck.split(/^---.*$/gm);
    const splitRows = newSlides.map( slide => {
      return slide.split(/^-\| - \|-.*$/gm).map( row => {
        const boxedColumns = row.split(/^-\| \| \|-.*$/gm).map( (col, i, cols) => `<Box key={${i}} width={1/${cols.length}} sx={{variant:'box.split_${Math.min(cols.length,3)}_column'}}>\n\n${col}\n\n</Box>`).join('\n\n');
        return `<Flex sx={{variant:'flex.row'}}>\n\n${boxedColumns}</Flex>\n\n`
      }).join('\n\n')
    });
    console.log(splitRows);
    setSlides(splitRows);
    setCurrentSlide(0);
  }, [deck])

  useEffect( () => {
    const gotoSlide = (currentSlide == (slides.length - 1)) ? 0 : currentSlide + 1;
    setCurrentSlide(gotoSlide);
  }, [gotoNextSlide])

  useEffect( () => {
    const gotoSlide = (currentSlide == 0) ? (slides.length - 1) : currentSlide - 1;
    setCurrentSlide(gotoSlide);
  }, [gotoPreviousSlide])


  return (
    <Flex sx={{variant: 'flex.deck'}}>
      <PlayCard md={slides[currentSlide]} />
    </Flex>
    )  ;
};