import { useState } from "react";
import OfficerLayout from "../../layouts/OfficerLayout";

function PostAnnouncementPage() {
    const [title, setTitle] =
        useState("");

    const [content, setContent] =
        useState("");

    const [image, setImage] =
        useState(null);

    const [announcements,
        setAnnouncements] =
        useState([]);

    const [editingId, setEditingId] = useState(null);

    const [editTitle, setEditTitle] = useState("");

    const [editContent, setEditContent] = useState("");

    const handlePost = (e) => {

        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert("Please fill all required fields");
            return;
        }

        const newAnnouncement = {

            id: Date.now(),

            title,

            content,

            image,

            date:
                new Date()
                    .toLocaleDateString(),

            createdAt: Date.now(),
        };

        setAnnouncements([
            newAnnouncement,
            ...announcements,
        ]);

        alert(
            "Announcement Posted Successfully"
        );

        setTitle("");
        setContent("");
        setImage(null);

    };

    const saveEdit = (id) => {

        const updatedAnnouncements =
            announcements.map(
                (announcement) =>

                    announcement.id === id

                        ? {
                            ...announcement,
                            title: editTitle,
                            content: editContent,
                        }

                        : announcement
            );

        setAnnouncements(
            updatedAnnouncements
        );

        setEditingId(null);

        alert(
            "Announcement Updated Successfully"
        );
    };

    return (
        <OfficerLayout>
            <h1>Post Announcement</h1>
            <form onSubmit={handlePost}>

                <input
                    type="text"
                    placeholder="Announcement Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <br /><br />

                <textarea
                    rows="5"
                    placeholder="Announcement Content"
                    value={content}
                    onChange={(e) =>
                        setContent(e.target.value)
                    }
                />

                <br /><br />


                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setImage(
                            e.target.files[0]
                        )
                    }
                />

                <br /><br />

                <button>
                    Post Announcement
                </button>

            </form>

            <h2>
                Posted Announcements
            </h2>

            {
                announcements.map(
                    (announcement) => {

                        const canEdit =
                            Date.now() -
                            announcement.createdAt
                            <
                            30 * 60 * 1000;

                        return (

                            <div
                                key={announcement.id}
                                style={{
                                    border: "1px solid gray",
                                    padding: "15px",
                                    marginBottom: "20px",
                                }}
                            >

                                <h3>
                                    {announcement.title}
                                </h3>

                                <p>
                                    {announcement.content}
                                </p>

                                <small>
                                    {announcement.date}
                                </small>

                                <br />
                                <br />
                                <p>
                                    Edit Allowed For:
                                    {" "}
                                    {
                                        Math.max(
                                            0,
                                            Math.floor(
                                                (
                                                    30 * 60 * 1000 -
                                                    (
                                                        Date.now() -
                                                        announcement.createdAt
                                                    )
                                                ) / 60000
                                            )
                                        )
                                    }
                                    {" "}minutes
                                </p>

                                {canEdit ? (

                                    <button
                                        onClick={() => {

                                            setEditingId(
                                                announcement.id
                                            );

                                            setEditTitle(
                                                announcement.title
                                            );

                                            setEditContent(
                                                announcement.content
                                            );

                                        }}
                                    >
                                        Edit
                                    </button>

                                ) : (

                                    <p>
                                        Edit Window Expired
                                    </p>

                                )}

                                {
                                    editingId ===
                                    announcement.id && (

                                        <div>

                                            <br />

                                            <input
                                                type="text"
                                                value={editTitle}
                                                onChange={(e) =>
                                                    setEditTitle(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <br />
                                            <br />

                                            <textarea
                                                rows="4"
                                                value={editContent}
                                                onChange={(e) =>
                                                    setEditContent(
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <br />
                                            <br />

                                            <button
                                                onClick={() =>
                                                    saveEdit(
                                                        announcement.id
                                                    )
                                                }
                                            >
                                                Save Changes
                                            </button>

                                        </div>

                                    )
                                }

                                <hr />

                            </div>

                        );
                    }
                )
            }
        </OfficerLayout>
    );
}

export default PostAnnouncementPage;