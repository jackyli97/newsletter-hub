import * as React from "react";
import { StyleSheet, css } from "aphrodite";
import mediaQuery from "@styles/mediaQuery";
import colors from "@styles/colors";
import Image from "next/image";
import { 
    Text,
    Heading,
    Button,
    IconButton,
    Icon,
} from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';

export const HeartIcon = (
    <Icon
        width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M7.07145 12.2333L6.10479 11.3533C2.67145 8.24 0.404785 6.18 0.404785 3.66667C0.404785 1.60667 2.01812 0 4.07145 0C5.23145 0 6.34479 0.54 7.07145 1.38667C7.79812 0.54 8.91145 0 10.0715 0C12.1248 0 13.7381 1.60667 13.7381 3.66667C13.7381 6.18 11.4715 8.24 8.03812 11.3533L7.07145 12.2333Z" fill="#293B65"
        />
    </Icon>
);


export const BookmarkIcon = (
    <Icon
        width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_50_2528)">
        <path d="M4.38184 13.4597V1.75137C4.38184 1.08243 4.92411 0.540161 5.59305 0.540161H12.8603C13.5293 0.540161 14.0715 1.08243 14.0715 1.75137V13.4597L9.22668 10.6335L4.38184 13.4597Z" fill="#293B65"/>
        </g>
        <defs>
        <filter id="filter0_d_50_2528" x="0.381836" y="0.540161" width="17.6897" height="20.9196" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_50_2528"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_50_2528" result="shape"/>
        </filter>
        </defs>
    </Icon>
);

const ReviewMain = () => {
    const sampleNewsletterImage = "/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F72aad7d4-3198-4232-8c76-d317a93a0861_415x415.png";
    const sampleNewsletterTitle = "Bookbear Express";
    const sampleNewsletterReviewText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.Read Newletter";
    const sampleNewsletterAuthor = "Torento";
    const sampleDaysAgo = Math.round(Math.random() * 10);
    const daysAgoText = sampleDaysAgo === 0 ? "today" : sampleDaysAgo === 1 ? "yesterday" : `${sampleDaysAgo} days ago`;
    const sampleNewsletterRating = 5;

    return (
        <div className={css(styles.reviewContainer)}>
            <div className={css(styles.leftSideReviewContainer)}>
                <div className={css(styles.newsletterImageWrapper)}>
                    <Image
                        src={sampleNewsletterImage}
                        alt="newsletter image"
                        width={64}
                        height={64}
                    />
                </div>
                <div className={css(styles.newsletterDetailsContainer)}>
                    <div className={css(styles.newsletterTitleWrapper)}>
                        <Text fontSize="lg">
                            {sampleNewsletterTitle}
                        </Text>
                    </div>
                    <div className={css(styles.newsletterAuthorWrapper)}>
                        <Text fontSize="sm">
                            {sampleNewsletterAuthor}
                        </Text>
                    </div>
                    <div className={css(styles.newsletterRatingWrapper)}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                    <div className={css(styles.newsletterDateWrapper)}>
                        <Text>
                            {daysAgoText}
                        </Text>
                    </div>
                </div>
            </div>

            <div className={css(styles.rightSideReviewContainer)}>
                <div className={css(styles.newsletterReviewTextWrapper)}>

                </div>

                <div className={css(styles.iconsAndButtonContainer)}>
                    <div className={css(styles.iconsContainer)}>
                        <IconButton
                                aria-label="heart"
                                icon={HeartIcon}
                        />
                        <IconButton
                                aria-label="bookmark"
                                icon={BookmarkIcon}
                        />
                    </div>
                    <div className={css(styles.buttonWrapper)}>
                        <Button
                            variant="solid"
                            backgroundColor={colors.buttonColor}
                            color="white"
                        >
                            READ NEWSLETTER
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReviewMain;

const styles = StyleSheet.create({
    reviewContainer: {
        display: "flex",
        flexDirection: "column",

        margin: "0 auto",
        [mediaQuery("tablet-landscape-v2")]: {
            flexDirection: "row",
        },
    },
    leftSideReviewContainer: {
        display: "flex",
        flexDirection: "row",
    },
    rightSideReviewContainer: {
        display: "flex",
        flexFlow: "column wrap",
    },
    iconsAndButtonContainer: {
        display: "flex",
        flexDirection: "row",
    },
    iconsContainer: {
        display: "flex",
        flexDirection: "row",
    },
    buttonWrapper: {

    },
    newsletterImageWrapper: {

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
})
