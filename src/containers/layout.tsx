import * as React from 'react';
import Head from 'next/head';
import {css, StyleSheet} from 'aphrodite';
import colors from '@styles/colors';

type Props = {
    children: React.ReactNode[] | React.ReactNode,
    fullBleed?: boolean,
}

const Layout = (props: Props) => {

    const { children } = props;

    return (
    <>
        <Head>
            <title>Newsletter Hub</title>
            <meta name="description" content="Rate, review, and browse newsletters that you, your friends, and the world are subscribed to." />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={css(styles.mainContent)}>{children}</div>
    </>
    );
}; 

export default Layout;

const styles = StyleSheet.create({
    mainContent: {
        minHeight: "600px",
    },
});
