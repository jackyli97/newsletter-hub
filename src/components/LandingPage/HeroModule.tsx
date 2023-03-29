import * as React from "react";
import Image from "next/image";
import { StyleSheet, css } from "aphrodite";
import colors from "@styles/colors";

import {
    Text,
    Button,
    ButtonGroup,
    Heading
} from '@chakra-ui/react';

import { MODULE_DESKTOP_PADDING,
    MODULE_MOBILE_PADDING,
} from "@components/Wrappers/ModuleWrapper";
import mediaQuery from "@styles/mediaQuery";


const HeroModule = () => {
    const title = "Your Hub for Newsletter Reviews and Discovery";
    const descrption = "Rate, review, and browse newsletters that you, your friends, and the world are subscribed to.";
    const ctaText = "Create Your Profile";
    return (
        <div className={css(styles.heroContainer)}>
            <div className={css(styles.leftHero)}>
                <div className={css(styles.leftHeroContentWrapper)}>
                    <div className={css(styles.eyebrowWrapper)}>
                        <Image
                            style={{
                                marginRight: "10px",
                                maxHeight: 30,
                                [mediaQuery("tablet-portrait-v2")]: {
                                  maxHeight: 40,
                                  marginRight: 13,
                            
                                  ":nth-child(1n) svg": {
                                    display: "block",
                                    height: 40,
                                    width: "auto",
                                  },
                                },
                            }}
                            src="/icon.svg"
                            alt="Newsletter Hub Icon"
                            width={39}
                            height={36}

                        />
                        <Text fontSize="sm" fontWeight="bold">
                            Newsletter Hub
                        </Text>
                    </div>
                    <div className={css(styles.headlineWrapper)}>
                        <Heading as="h1" size="xl" lineHeight={1.1}>
                            {title}
                        </Heading>
                    </div>
                    <Text fontSize="lg">{descrption}</Text>
                    <div className={css(styles.ctaButtonWrapper)}>  
                        <Button size="lg" fontSize="lg" color="white" backgroundColor={colors.buttonColor} variant="solid">{ctaText}</Button>
                    </div>
                </div>
            </div>

            <div className={css(styles.rightHero)}>
                <div className={css(styles.imageWrapper)}>
                    <Image 
                        src="/subscribe-symbol.png" 
                        alt="Subscribe symbol"
                        width={448}
                        height={475}
                    />
                </div>
            </div>
        </div>
    )    
}

export default HeroModule;

const styles = StyleSheet.create({
    heroContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        [mediaQuery("tablet-landscape-v2")]: {
            flexDirection: "row",
          },
      
    },
    leftHero: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
    
        width: "100%",
        paddingTop: 55,
        paddingBottom: 55,
    
        [mediaQuery("tablet-landscape-v2")]: {
        width: `calc(2 * (100% / 3))`,
          padding: "70px 20px 70px 0",
        },
    },
    leftHeroContentWrapper: {
        [mediaQuery("tablet-landscape-v2")]: {
          maxWidth: 474,
        },
      },
    rightHero: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `calc(100% + ${MODULE_MOBILE_PADDING * 2}px)`,
        marginLeft: -MODULE_MOBILE_PADDING,
    
        [mediaQuery("tablet-portrait-v2")]: {
          width: "100%",
          marginLeft: 0,
        },
    
        [mediaQuery("tablet-landscape-v2")]: {
            width: `calc(100% / 3)`,
        },
      },
      eyebrowWrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: 15,
    
        [mediaQuery("tablet-landscape-v2")]: {
          marginBottom: 30,
        },
      },
    headlineWrapper: {
        marginBottom: 15,

        [mediaQuery("tablet-portrait-v2")]: {
          marginBottom: 10,
        },
    
        [mediaQuery("desktop")]: {
          marginBottom: 15,
        },
    },
    ctaButtonWrapper: {
        marginTop: 30,
    },
    imageWrapper: {
        top: "auto",
        width: "100%",
        /* eslint-disable-next-line flexport-static-site/no-unknown-styles */
        aspectRatio: "375 / 320",
    },
});
