import * as React from 'react';
import Review from './Review';
import { css, StyleSheet } from 'aphrodite';
import mediaQuery from '@styles/mediaQuery';
import {
    Button,
    Heading
} from '@chakra-ui/react';
import { AlegrayaRegular } from '@styles/typography';

type Props = {
    fullSize?: boolean,
}

const MAX_REVIEW_INDEX: number = 100; 

let index: number = 0;

const allReviews: React.ReactNode[] = [];

for (let i = 0; i < MAX_REVIEW_INDEX; i++) {
    allReviews.push(<Review />);
}

const getReviews = async (): Promise<React.ReactNode[] | null> => {
    // const response = await fetch(`/api/reviews?page=${pageNumber}&limit=4`);
    // const data = await response.json();
    if (index + 4 > allReviews.length) return null;
    const oldIndex = index;
    index += 4;
    return await allReviews.slice(oldIndex, oldIndex + 4);
}

export const ReviewsModule = (props: Props) => {
    const { fullSize } = props;
    const [reviews, setReviews] = React.useState<React.ReactNode[]>([]);

    const fetchReviews = async () => {
        const newReviews = await getReviews();
        if (newReviews === null) return;
        setReviews([...reviews, ...newReviews]);
    }

    React.useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className={css(styles.container)}>
            <div className={css(styles.titleWrapper)}>
                {/* @ts-ignore */}
                <Heading 
                    as="h2"
                    fontWeight="medium"
                    fontFamily={AlegrayaRegular.fontFamily}
                >
                    Latest Reviews
                </Heading>
            </div>
            <div className={css(
                styles.reviewsContainer,
                fullSize === true ? styles.fullPadding : styles.mainPadding
            )
            }>
                {reviews.map((review, index) => {
                    return (
                        <div key={index}>
                            {review}
                        </div>
                    );
                }
                )}
                <div className={css(styles.buttonWrapper)}>
                    <Button 
                        variant="solid" 
                        color="white" 
                        backgroundColor="black" 
                        width="100%"
                        onClick={fetchReviews}
                        >
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
        padding: 50,
    },
    fullPadding: {
        padding: 72,
    },
    buttonWrapper: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingTop: 40,
        },
    },
});
