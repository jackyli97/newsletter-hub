import * as React from 'react';
import ReviewSide from './ReviewSide';
import { css, StyleSheet } from 'aphrodite';
import mediaQuery from '@styles/mediaQuery';
import {
    Heading,
    Button,
} from '@chakra-ui/react';
import { AlegrayaRegular } from '@styles/typography';

const MAX_REVIEW_INDEX: number = 100; 

let index: number = 0;

const allReviews: React.ReactNode[] = [];

for (let i = 0; i < MAX_REVIEW_INDEX; i++) {
    allReviews.push(<ReviewSide />);
}

const getReviews = async (): Promise<React.ReactNode[] | null> => {
    // const response = await fetch(`/api/reviews?page=${pageNumber}&limit=3`);
    // const data = await response.json();
    if (index + 3 > allReviews.length) return null;
    const oldIndex = index;
    index += 3;
    return await allReviews.slice(oldIndex, oldIndex + 3);
}

export const ReviewsSideModule = () => {
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
                    size="lg"
                    fontFamily={AlegrayaRegular.fontFamily}
                >
                    Latest Reviews for Your Newsletters
                </Heading>
            </div>
            <div className={css(
                styles.reviewsContainer,
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
            </div>

            <div>
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
