import OfficerLayout from "../../layouts/OfficerLayout";

function FeedbackReviewPage() {
    const feedbacks = [

        {
            id: 1,
            category: "Water Supply",
            feedback:
                "Water supply has improved significantly.",
            rating: 5,
            date: "08-06-2026",
        },

        {
            id: 2,
            category: "Road Repair",
            feedback:
                "Road work is taking too much time.",
            rating: 2,
            date: "07-06-2026",
        },

        {
            id: 3,
            category: "Street Light",
            feedback:
                "Street lights are working properly.",
            rating: 4,
            date: "06-06-2026",
        },

    ];
    const totalFeedbacks =
        feedbacks.length;

    const averageRating = (

        feedbacks.reduce(

            (sum, feedback) =>

                sum + feedback.rating,

            0

        )

        /

        feedbacks.length

    ).toFixed(1);

    const positiveCount =
        feedbacks.filter(
            (f) => f.rating >= 4
        ).length;

    const neutralCount =
        feedbacks.filter(
            (f) => f.rating === 3
        ).length;

    const negativeCount =
        feedbacks.filter(
            (f) => f.rating < 3
        ).length;

    return (

        <OfficerLayout>

            <h1>
                Citizen Feedback
            </h1>
            <h2>
                Feedback Statistics
            </h2>

            <p>
                Total Feedbacks:
                {totalFeedbacks}
            </p>

            <p>
                Average Rating:
                {averageRating}
                / 5
            </p>
            <p>
                Positive:
                {positiveCount}
            </p>

            <p>
                Neutral:
                {neutralCount}
            </p>

            <p>
                Negative:
                {negativeCount}
            </p>


            <h2>
                Citizen Feedbacks
            </h2>
            {
                feedbacks.map(

                    (feedback) => (

                        <div

                            key={feedback.id}

                            style={{
                                border:
                                    "1px solid gray",

                                padding: "15px",

                                marginBottom: "15px",
                            }}
                        >

                            <h3>
                                {feedback.category}
                            </h3>

                            <p>
                                {feedback.feedback}
                            </p>

                            <p>
                                Date:
                                {" "}
                                {feedback.date}
                            </p>

                            <p>
                                Rating:
                                {" "}
                                {"⭐".repeat(
                                    feedback.rating
                                )}
                            </p>

                        </div>

                    )
                )
            }
        </OfficerLayout>

    );
}

export default FeedbackReviewPage;