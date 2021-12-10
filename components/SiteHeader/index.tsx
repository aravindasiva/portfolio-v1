import React, { useState } from "react";
import {
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  Box,
  VStack,
  Image,
  Button,
  Text,
  Container,
  textDecoration,
  Center
} from "@chakra-ui/react";
import { Link } from 'react-scroll';
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { BiMoon, BiSun } from "react-icons/bi";
import {
  AiFillGithub,
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import useScrollDirection from "../../hooks/useScrollDirection";
import { easing, menuAnim, scaleUp, simpleOpacity } from "../../config/animation";


const LogoImages = {
  DarkMode: '/logo_dark.png',
  LightMode: './logo_light.png',
}


const SiteHeader = () => {
  const direction = useScrollDirection()
  const mobileNav = useDisclosure();
  const MotionBox = motion(Box)
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const imgLogo = useColorModeValue(
    LogoImages.LightMode,
    LogoImages.DarkMode
  )

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const headerTextColor = useColorModeValue("site.light", "site.dark");
  const reverseSwitchColor = useColorModeValue("site.dark", "site.light");
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);
  const { colorMode } = useColorMode()
  const MotionContainer = motion(Container)
  const MotionImage = motion(Image)

  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef<HTMLInputElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current?.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const MobileNavContent = (
    <VStack
      pos="fixed"
      zIndex={2}
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={6}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Link activeClass="active" to='siteHeader' spy={true} smooth={true} duration={1000}>
        <Text as={'a'} cursor="pointer" fontSize={20} _hover={{ color: colorMode }}>
          About
        </Text>
      </Link>
      <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
        <Text as={'a'} cursor="pointer" fontSize={20} _hover={{ color: colorMode }}>
          Works
        </Text>
      </Link>
      <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
        <Text as={'a'} cursor="pointer" fontSize={20} _hover={{ color: colorMode }}>
          Contact
        </Text>
      </Link>
    </VStack>
  );

  const SideNav = (
    <MotionContainer
      display={{ base: 'none', sm: 'block', lg: 'block' }}
      w='100%'
      initial={direction.isTop && "hide"}
      animate="show"
      ease={easing}
      variants={menuAnim}
    >
      <VStack
        pos="fixed"
        top={0}
        right={0}
        display={direction.isTop ? "none" : "flex"}
        flexDirection="column"
        p={10}
        pt={16}
        m={2}
        spacing={6}
        alignItems='flex-start'
        fontFamily={'Inter'}
        fontWeight={500}
      >
        <Link activeClass="active" to='siteHeader' spy={true} smooth={true} duration={1000}>
          <Text as={'a'} cursor="pointer" fontSize={18} _hover={{ color: headerTextColor, textDecorationLine: "line-through" }}>
            About
          </Text>
        </Link>
        <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
          <Text as={'a'} cursor="pointer" fontSize={18} _hover={{ color: headerTextColor, textDecorationLine: "line-through" }}>
            Works
          </Text>
        </Link>
        <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
          <Text as={'a'} cursor="pointer" fontSize={18} _hover={{ color: headerTextColor, textDecorationLine: "line-through" }}>
            Contact
          </Text>
        </Link>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.8,
              yoyo: Infinity
            }
          }}
        >
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            _hover={{ color: reverseSwitchColor }}
            isRound
            ml={{ base: "0", md: "3" }}
            onClick={toggleMode}
            icon={<SwitchIcon size={24} />}
          />
        </motion.div>
      </VStack>
    </MotionContainer>
  )


  return (
    <Box id='siteHeader' pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" >
          <Flex w="full" h="full" px={{ base: 6, sm: 24 }} align="center" justify="space-between">
            <Flex align="center">
              <AnimatePresence>
                <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={1000}>
                  <MotionImage
                    boxSize={{ base: '30px', sm: '60px', lg: '60px' }}
                    objectFit="cover"
                    src={imgLogo}
                    alt="Siva Logo"
                    fallbackSrc={imgLogo}
                    variants={simpleOpacity}
                    initial="initial"
                    animate={isLogoLoaded && 'animate'}
                    onLoad={() => setLogoLoaded(true)}
                    zIndex={2}
                  />
                </Link>
              </AnimatePresence>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              fontFamily={'Inter'}
              fontWeight={600}
            >
              <HStack spacing="12" display={{ base: "none", md: "flex" }}>
                <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
                  <Text as={'a'} cursor="pointer" _hover={{ color: headerTextColor, textDecorationLine: "line-through" }}>
                    About
                  </Text>
                </Link>
                <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
                  <Text as={'a'} cursor="pointer" _hover={{ color: headerTextColor, textDecorationLine: "line-through" }}>
                    Works
                  </Text>
                </Link>
                <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
                  <Text as={'a'} cursor="pointer" _hover={{ color: headerTextColor, textDecorationLine: "line-through" }}>
                    Contact
                  </Text>
                </Link>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      duration: 0.8,
                      yoyo: Infinity
                    }
                  }}
                >
                  <IconButton
                    size="md"
                    isRound
                    fontSize="lg"
                    aria-label={`Switch to ${text} mode`}
                    variant="ghost"
                    color="current"
                    _hover={{ color: reverseSwitchColor }}
                    _focus={{ outline: 'none' }}
                    ml={{ base: "0", md: "3" }}
                    onClick={toggleMode}
                    icon={<SwitchIcon size={24} />}
                  />
                </motion.div>
              </HStack>
              <IconButton
                display={{ base: "flex", md: "none" }}
                size="md"
                isRound
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                _hover={{ color: reverseSwitchColor }}
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon size={24} />}
              />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
          <MotionBox
            id={direction.isTop}
            initial='hide'
            animate='show'
            ease={easing}
            variant={menuAnim}
          >
            <motion.div
              id="side nav"
              animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
            >
              {SideNav}
            </motion.div>
          </MotionBox >

        </chakra.div>
      </chakra.header>
    </Box >
  );
};

export default SiteHeader