import * as React from "react";
import Image from "next/image";
import { StyleSheet, css } from "aphrodite";
import colors from "@styles/colors";

import {
    Text,
    Button,
    Heading
} from '@chakra-ui/react';

import {
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
                    <div className={css(styles.headlineWrapper)}>
                        <Heading as="h1" size="3xl" lineHeight={1.1} fontWeight="normal">
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
          maxWidth: 615,
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
        aspectRatio: "375 / 320",
    },
});
