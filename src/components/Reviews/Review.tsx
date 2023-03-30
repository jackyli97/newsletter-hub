import * as React from "react";
import { StyleSheet, css } from "aphrodite";
import mediaQuery from "@styles/mediaQuery";
import colors from "@styles/colors";
import Image from "next/image";
import { 
    Text,
    Button,
    IconButton,
    Icon,
} from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';
import { RiStarFill, RiBookmarkFill } from 'react-icons/ri'

type Props = {
    fullSize?: boolean,
}

const Review = (props: Props) => {
    const { fullSize } = props;
    const sampleNewsletterImage = "/bear.png";
    const sampleNewsletterTitle = "Bookbear Express";
    const sampleNewsletterReviewText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";
    const sampleNewsletterAuthor = "Torento";
    const [sampleDaysAgo, setSampleDaysAgo] = React.useState(0);

    React.useEffect(() => {
        const daysAgo = Math.floor(Math.random() * 10);
        setSampleDaysAgo(daysAgo);
    }, []);

    const daysAgoText = sampleDaysAgo === 0 ? "today" : sampleDaysAgo === 1 ? "yesterday" : `${sampleDaysAgo} days ago`;
    const sampleNewsletterRating = 5;

    return (
        <div className={css(styles.reviewContainer)}>
            <div className={css(
                styles.leftSideReviewContainer,
                )}>
                <div className={css(
                    styles.newsletterImageWrapper,
                    fullSize === true ? styles.fullSizeImagePadding : styles.imagePadding,
                    )}>
                    <Image
                        src={sampleNewsletterImage}
                        alt="newsletter image"
                        width={64}
                        height={64}
                    />
                </div>
                <div className={css(styles.newsletterDetailsContainer)}>
                    <div className={css(styles.newsletterTitleWrapper,
                        fullSize === true ? styles.fullSizeNewsletterDetailsItemPadding : styles.newsletterDetailsItemPadding,
                        )}>
                        <Text fontSize="lg">
                            {sampleNewsletterTitle}
                        </Text>
                    </div>
                    <div className={css(styles.newsletterAuthorWrapper,
                        fullSize === true ? styles.fullSizeNewsletterDetailsItemPadding : styles.newsletterDetailsItemPadding,
                        )}>
                        <Text fontSize="sm">
                            {sampleNewsletterAuthor}
                        </Text>
                    </div>
                    <div className={css(styles.newsletterRatingWrapper,
                        fullSize === true ? styles.fullSizeNewsletterDetailsItemPadding : styles.newsletterDetailsItemPadding,
                        )}>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                    </div>
                    <div className={css(styles.newsletterDateWrapper)}>
                        <Text fontSize="xs">
                            {daysAgoText}
                        </Text>
                    </div>
                </div>
            </div>

            <div className={css(styles.rightSideReviewContainer)}>
                <div className={css(styles.newsletterReviewTextWrapper
                    )}>
                    {/* @ts-ignore */}
                    <Text fontSize="sm" style={{textAlign: "justify"}} noOfLines={3}>
                        {sampleNewsletterReviewText}
                    </Text>
                </div>

                <div className={css(styles.iconsAndButtonContainer)}>
                    <div className={css(styles.iconsContainer)}>
                        <IconButton
                                aria-label="bookmark"
                                icon={<Icon as={RiBookmarkFill} color="#293B65" />}
                                variant="ghost"
                        />
                        <IconButton
                                aria-label="star"
                                icon={<Icon as={RiStarFill} color="#293B65" />}
                                variant="ghost"
                        />
                    </div>
                    <div className={css(styles.buttonWrapper)}>
                        <Button
                            variant="solid"
                            backgroundColor={colors.buttonColor}
                            color="white"
                            size="sm"
                            fontSize="xs"
                        >
                            READ NEWSLETTER
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Review;

const styles = StyleSheet.create({
    reviewContainer: {
        display: "flex",
        flexDirection: "column",
        
        [mediaQuery("tablet-landscape-v2")]: {
            flexDirection: "row",
            padding: "12px 0",
        },
        borderBottom: "1.44271px solid #E6E7EA",
    },
    leftSideReviewContainer: {
        display: "flex",
        flexDirection: "row",
        [mediaQuery("tablet-landscape-v2")]: {
            width: `calc(100% / 3)`,
        },
    },
    rightSideReviewContainer: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        [mediaQuery("tablet-landscape-v2")]: {
            width: `calc(2 * (100% / 3))`,
        },
    },
    iconsAndButtonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    iconsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonWrapper: {
        paddingLeft: "10px",
    },
    newsletterImageWrapper: {
        [mediaQuery("tablet-landscape-v2")]: {
            flexDirection: "row",
        },
    },
    imagePadding: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingRight: 32,
        },
    },
    fullSizeImagePadding: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingRight: 46,
        },
    },
    newsletterDetailsContainer: {
        
    },
    newsletterTitleWrapper: {
    },
    newsletterAuthorWrapper: {
    },
    newsletterDateWrapper: {

    },
    newsletterRatingWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    newsletterReviewTextWrapper: {
    },
    newsletterDetailsItemPadding: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingBottom: 8,
        },
    },
    fullSizeNewsletterDetailsItemPadding: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingBottom: 12,
        },
    },
})
