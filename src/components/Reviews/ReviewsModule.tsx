import * as React from 'react';
import ReviewMain from './ReviewMain';
import { css, StyleSheet } from 'aphrodite';
import colors from '@styles/colors';
import mediaQuery from '@styles/mediaQuery';
import {
    Text,
    Button,
    Heading
} from '@chakra-ui/react';

type Props = {
    type: "main" | "side"
}

export const ReviewsModule = (props: Props) => {

    return (
        props.type === "main" ? (
            <div className={css(styles.container)}>
                <div className={css(styles.titleWrapper)}>
                    <Heading as="h2" color="black">
                        Latest Reviews
                    </Heading>
                </div>
                <div className={css(styles.reviewsContainer)}>
                    <ReviewMain />
                    <ReviewMain />
                    <ReviewMain />
                    <ReviewMain />
                    <ReviewMain />
                </div>
                <div className={css(styles.buttonWrapper)}>
                    <Button variant="solid" color="white" backgroundColor="black">
                        See More
                    </Button>
                </div>
            </div>
        ) : null
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    titleWrapper: {

    },
    reviewsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonWrapper: {

    },
});
