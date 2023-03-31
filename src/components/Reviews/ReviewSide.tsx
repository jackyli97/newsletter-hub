import * as React from "react";
import { StyleSheet, css } from "aphrodite";
import mediaQuery from "@styles/mediaQuery";
import colors from "@styles/colors";
import Image from "next/image";
import { 
    Text,
    Button,
} from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';


const ReviewSide = () => {

    const sampleNewsletterTitle = "Bookbear Express";
    const sampleNewsletterReviewText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";
    const sampleNewsletterAuthor = "Torento";
    

    return (
        <div className={css(styles.reviewContainer)}>
                <div className={css(styles.newsletterDetailsContainer)}>
                    <div className={css(styles.newsletterTitleWrapper,
                        )}>
                        <Text fontSize="lg">
                            {sampleNewsletterTitle}
                        </Text>
                    </div>
                    <div className={css(styles.newsletterAuthorWrapper,
                        )}>
                        <Text fontSize="sm">
                            {sampleNewsletterAuthor}
                        </Text>
                    </div>
                    <div className={css(styles.newsletterRatingWrapper,
                        )}>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                        <StarIcon color="#F7B500"/>
                    </div>
                </div>

                <div>
                    {/* @ts-ignore */}
                    <Text fontSize="sm" style={{textAlign: "justify"}} noOfLines={3}>
                        {sampleNewsletterReviewText}
                    </Text>
                </div>
        </div>
    )
}


export default ReviewSide;

const styles = StyleSheet.create({
    reviewContainer: {
        display: "flex",
        flexDirection: "column",
    
        alignItems: "flex-start",
        [mediaQuery("tablet-landscape-v2")]: {
            padding: "25px 30px",
            marginBottom: 31,
        },
        background: "#F1F2F3",
        borderRadius: 17,
    },
    newsletterDetailsContainer: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingBottom: 24,
        },
    },
    newsletterTitleWrapper: {
    },
    newsletterAuthorWrapper: {
        [mediaQuery("tablet-landscape-v2")]: {
            paddingBottom: 8,
        },
    },
    newsletterRatingWrapper: {
        display: "flex",
        flexDirection: "row",
        [mediaQuery("tablet-landscape-v2")]: {
            paddingBottom: 8,
        },
    },
})
