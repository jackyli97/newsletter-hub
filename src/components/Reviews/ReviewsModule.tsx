import * as React from 'react';
import Review from './Review';
import { css, StyleSheet } from 'aphrodite';
import mediaQuery from '@styles/mediaQuery';
import {
    Button,
    Heading
} from '@chakra-ui/react';

type Props = {
    fullSize?: boolean,
}

export const ReviewsModule = (props: Props) => {
    const { fullSize } = props;
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.titleWrapper)}>
                {/* @ts-ignore */}
                <Heading as="h2" color="black" fontWeight="normal">
                    Latest Reviews
                </Heading>
            </div>
            <div className={css(
                styles.reviewsContainer,
                fullSize === true ? styles.fullPadding : styles.mainPadding
            )
            }>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <div className={css(styles.buttonWrapper)}>
                    <Button variant="solid" color="white" backgroundColor="black" width="100%">
                        See More
                    </Button>
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    titleWrapper: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingBottom: 10,
        },
    },
    reviewsContainer: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 3px 14px rgba(74, 58, 255, 0.03), 0px -2px 4px rgba(20, 20, 43, 0.02), 0px 12px 24px rgba(20, 20, 43, 0.04)',
        borderRadius: 18,
    },
    mainPadding: {
        padding: 37.5,
    },
    fullPadding: {
        padding: 54,
    },
    buttonWrapper: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingTop: 40,
        },
    },
});
