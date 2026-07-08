import OfficerLayout from "../../layouts/OfficerLayout";

function ViewAnnouncementsPage() {

    const announcements = [
        {
            id: 1,
            title: "Water Supply Maintenance",
            content:
                "Water supply will be unavailable on Sunday.",
            date: "2026-06-08",
            image: "https://via.placeholder.com/400"
        },

        {
            id: 2,
            title: "Village Cleanliness Drive",
            content:
                "All citizens are requested to participate.",
            date: "2026-06-05",
        },

        {
            id: 3,
            title: "Health Camp",
            content:
                "Free health check-up camp on Monday.",
            date: "2026-06-01",
        },
    ];
    const sortedAnnouncements =
        [...announcements].sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );
    return (
        <OfficerLayout>
            <h1>Announcements</h1>
            <div
                style={{
                    maxHeight: "500px",
                    overflowY: "auto",
                }}
            >


                {
                    sortedAnnouncements.map((announcement) => (

                        <div key={announcement.id}>

                            <h3>{announcement.title}</h3>
                            {
                                announcement.image && (
                                    <img
                                        src={announcement.image}
                                        alt="announcement"
                                        width="300"
                                    />
                                )
                            }

                            <p>{announcement.content}</p>

                            <small>
                                {announcement.date}
                            </small>


                            <hr />

                        </div>
                    ))
                }
            </div>
        </OfficerLayout>

    );
}

export default ViewAnnouncementsPage;