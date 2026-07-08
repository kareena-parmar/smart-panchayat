import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

function AnnouncementMonitoringPage() {
    const initialAnnouncements = [

        {
            id: 1,
            title: "Water Supply Maintenance",
            content:
                "Water supply will remain closed tomorrow from 10 AM to 2 PM.",
            officer: "Rajesh Sharma",
            date: "10-06-2026",
        },

        {
            id: 2,
            title: "Village Cleanliness Drive",
            content:
                "All citizens are requested to participate in the cleanliness campaign.",
            officer: "Anita Verma",
            date: "09-06-2026",
        },

    ];
    const [announcements,
        setAnnouncements] =
        useState(
            initialAnnouncements
        );
    const deleteAnnouncement =
        (id) => {

            const updatedAnnouncements =
                announcements.filter(
                    (announcement) =>
                        announcement.id !== id
                );

            setAnnouncements(
                updatedAnnouncements
            );

            alert(
                "Announcement Deleted"
            );

        };
        const [editingId,
setEditingId] =
useState(null);
const [editedContent,
setEditedContent] =
useState("");

const saveEdit = (id) => {

const updatedAnnouncements =
announcements.map(
(announcement) =>

announcement.id === id

? {
...announcement,

content:
editedContent,
}

: announcement
);

setAnnouncements(
updatedAnnouncements
);

setEditingId(null);

alert(
"Announcement Updated"
);

};

    return (

        <AdminLayout>

            <h1>
                Announcement Monitoring
            </h1>
            <p>
                Total Announcements:
                {
                    announcements.length
                }
            </p>
            {
                announcements.map(
                    (announcement) => (

                        <div
                            key={announcement.id}
                            style={{
                                border:
                                    "1px solid gray",
                                padding: "15px",
                                marginBottom: "15px",
                            }}
                        >

                            <h3>
                                {announcement.title}
                            </h3>

                            <p>
                                {announcement.content}
                            </p>

                            <p>
                                Posted By:
                                {" "}
                                {announcement.officer}
                            </p>

                            <p>
                                Date:
                                {" "}
                                {announcement.date}
                            </p>
                            <button
onClick={() => {

setEditingId(
announcement.id
);

setEditedContent(
announcement.content
);

}}
>
Edit
</button>
{
editingId ===
announcement.id && (

<>

<textarea
rows="4"
value={
editedContent
}
onChange={(e) =>
setEditedContent(
e.target.value
)
}
/>

<br /><br />

<button
onClick={() =>
saveEdit(
announcement.id
)
}
>
Save
</button>

</>

)
}
                            <button
                                onClick={() =>
                                    deleteAnnouncement(
                                        announcement.id
                                    )
                                }
                            >
                                Delete
                            </button>

                        </div>

                    )
                )
            }

        </AdminLayout>

    );
}

export default AnnouncementMonitoringPage;