import React, { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomePage() {
  const sliderRef = useRef(null); // Use useRef for the slider reference

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'The Immunity Boost',
      text:
        "Boost your immune system and vitality with nature's strongest antioxidant - Natural Astaxanthin",
      image:
        'https://nack.life/cdn/shop/files/asta_desktop_banner_1280x.jpg?v=1695813834',

      button: 'Shop Now',
    },
    {
      title: 'The Power Of Plant Proteins',
      text:
        "Explore ways to optimize protein intake as a vegetarian",
      image:
        'https://nack.life/cdn/shop/files/desktopcover_copy_1280x.jpg?v=1695814498',

      button: 'Shop Now',
    },
    {
      title: 'Rapid recovery. Effective hydration',
      text:
        "Boost performance and hydration with a unique blend of full-spectrum Essential Amino Acids and electrolytes",
      image:
        'https://nack.life/cdn/shop/files/desktopbanner_1280x.jpg?v=1692342864',

      button: 'Shop Now',
    },
  ];

  const slideToNext = () => {
    sliderRef.current.slickNext();
  };

  const slideToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box position={'relative'} height={'600px'} width={'100%'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text.css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={slideToPrev}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={slideToNext}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="600px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w="full"
                maxW="lg"
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="#ffffff">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="#ffffff">
                  {card.text}
                </Text>
                <Button
                  style={{
                    width:'50%',
                    padding:'20px, 20px',
                    background: 'black',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0px',
                    cursor: 'pointer',
                    margin:'auto',
                  }}
                >
                  {card.button}
                </Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
