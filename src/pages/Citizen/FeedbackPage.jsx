import { useState } from "react";
import CitizenLayout from "../../layouts/CitizenLayout";

function FeedbackPage() {
    const [subject, setSubject] =
        useState("");

    const [feedback, setFeedback] =
        useState("");

    const [rating, setRating] =
        useState("");

    const [feedbackList,
        setFeedbackList] =
        useState([]);

    const generateSuggestion =
        () => {

            if (!feedback.trim()) {

                alert(
                    "Write some feedback first"
                );

                return;
            }

            alert(
                "AI Suggestion: Your feedback has been noted and will help improve Panchayat services."
            );
        };

    const handleSubmit =
        (e) => {

            e.preventDefault();

            if (
                !subject ||
                !feedback ||
                !rating
            ) {

                alert(
                    "Please fill all fields"
                );

                return;
            }

            const newFeedback = {

                id: Date.now(),

                subject,

                feedback,

                rating,
            };

            setFeedbackList([
                newFeedback,
                ...feedbackList,
            ]);

            alert(
                "Feedback Submitted"
            );

            setSubject("");
            setFeedback("");
            setRating("");
        };


    return (
        <CitizenLayout>
            <h1>Feedback</h1>
            <form
                onSubmit={
                    handleSubmit
                }
            >
                <input
                    type="text"
                    placeholder="Feedback Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <br /><br />

                <textarea
                    rows="5"
                    placeholder="Write your feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />

                <br /><br />

                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="">Select Rating</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐">⭐</option>
                </select>

                <br /><br />

                <button
                    type="button"
                    onClick={generateSuggestion}
                >
                    AI Suggestion
                </button>

                <br /><br />

                <button type="submit">
                    Submit Feedback
                </button>
            </form>
            <br /><br />

            <h2>
                Submitted Feedback
            </h2>
            {
                feedbackList.map(
                    (item) => (

                        <div
                            key={item.id}
                        >

                            <h3>
                                {item.subject}
                            </h3>

                            <p>
                                {item.feedback}
                            </p>

                            <p>
                                Rating:
                                {" "}
                                {item.rating}
                            </p>

                            <hr />

                        </div>

                    )
                )
            }
        </CitizenLayout>
    );

}


export default FeedbackPage;