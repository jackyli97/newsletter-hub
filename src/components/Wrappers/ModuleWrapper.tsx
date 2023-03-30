import * as React from "react";
import { StyleSheet, css } from "aphrodite";
import mediaQuery from "@styles/mediaQuery";

type Props = {
    children: React.ReactNode[] | React.ReactNode,
    fullBleed?: boolean,
}

const ModuleWrapper = (props: Props) => {
    const { children, fullBleed } = props;
    const mode = fullBleed ? styles.fullBleed : styles.moduleLayout;
    return (
        <section className={css(mode)}>
            {children}
        </section>
    )
}

export const MODULE_MAX_WIDTH = 1920;
export const MODULE_MOBILE_PADDING = 20;
export const MODULE_TABLET_PADDING = 40;
export const MODULE_TABLET_LANDSCAPE_PADDING = 42;
export const MODULE_DESKTOP_PADDING = 126;

export default ModuleWrapper;

const styles = StyleSheet.create({
    moduleLayout: {
        maxWidth: MODULE_MAX_WIDTH,
        margin: "0 auto",
        padding: `0 ${MODULE_MOBILE_PADDING}px`,
    
        [mediaQuery("tablet-portrait-v2")]: {
          paddingLeft: MODULE_TABLET_PADDING,
          paddingRight: MODULE_TABLET_PADDING,
        },
    
        [mediaQuery("tablet-landscape-v2")]: {
          paddingLeft: MODULE_TABLET_LANDSCAPE_PADDING,
          paddingRight: MODULE_TABLET_LANDSCAPE_PADDING,
        },
    
        [mediaQuery("desktop")]: {
          paddingLeft: MODULE_DESKTOP_PADDING,
          paddingRight: MODULE_DESKTOP_PADDING,
        },
      },
      fullBleed: {
        width: "100%",
        maxWidth: "none",
        padding: "0",
      },
});