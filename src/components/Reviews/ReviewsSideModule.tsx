import * as React from 'react';
import ReviewSide from './ReviewSide';
import { css, StyleSheet } from 'aphrodite';
import mediaQuery from '@styles/mediaQuery';
import {
    Heading
} from '@chakra-ui/react';

export const ReviewsSideModule = () => {
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.titleWrapper)}>
                {/* @ts-ignore */}
                <Heading as="h2" color="black" fontWeight="normal" size="lg">
                    Reviews for Your Newsletters
                </Heading>
            </div>
            <div className={css(
                styles.reviewsContainer,
            )
            }>
                <ReviewSide />
                <ReviewSide />
                <ReviewSide />
                <ReviewSide />
                <ReviewSide />
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
            paddingBottom: 15,
        },
    },
    reviewsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
});
