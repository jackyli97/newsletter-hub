import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MODULE_MOBILE_PADDING} from "@components/Wrappers/ModuleWrapper";
import mediaQuery from "@styles/mediaQuery";

type Props = {
    leftComponent: React.ReactNode;
    rightComponent: React.ReactNode;
    widerSide: "left" | "right";
};

const SplitModule = (props: Props) => {
    const { leftComponent, rightComponent, widerSide } = props;

    return (
        <div className={css(styles.splitModuleContainer)}>
            <div className={widerSide === "left" ? css(styles.widerComponent) : css(styles.narrowerComponent)}>
                {leftComponent}
            </div>
            <div className={widerSide === "right" ? css(styles.widerComponent) : css(styles.narrowerComponent)}>
                {rightComponent}
            </div>
        </div>
    )

}

export default SplitModule;

const styles = StyleSheet.create({
    splitModuleContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        [mediaQuery("tablet-landscape-v2")]: {
            flexDirection: "row",
            paddingBottom: 81
          },
    },
    widerComponent: {
        width: "100%",
    
        [mediaQuery("tablet-landscape-v2")]: {
            width: `calc(2 * (100% / 3))`,
            paddingRight: 26,
        },
    },
    narrowerComponent: {
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
});

