import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SingleCours({ courses }) {
    const { slug } = useParams();
    const navigate = useNavigate();
    const course = courses.find((course) => course.slug === slug);

    useEffect(() => {
        if (!course) {
            navigate("..", { relative: "path" });
        }
    }, [course, navigate]);

    return (
        <>
            <h1>{course?.title}</h1>
            <h3>{course?.slug}</h3>
            <h3>{course?.id}</h3>
            <Link
                to=".."
                relative="path"
            >
                Back to Courses
            </Link>
        </>
    );
}

export default SingleCours;
