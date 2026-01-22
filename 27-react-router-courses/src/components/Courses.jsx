import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useState, useEffect } from "react";

const SORT_KEYS = ["title", "id", "slug"];

function sortCourses(courses, sortKey) {
    let sortedCourses = [...courses];
    if (!sortKey || !SORT_KEYS.includes(sortKey)) return sortedCourses;
    sortedCourses.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
    return sortedCourses;
}

function Courses({ courses }) {
    const location = useLocation();
    const navigator = useNavigate();
    const parsed = queryString.parse(location.search);
    const [sortKey, setSortKey] = useState(parsed.sort);

    const [sortedCourses, setSortedCourses] = useState(
        sortKey ? sortCourses(courses, sortKey) : courses,
    );

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigator(".", { replace: true });
            setSortKey();
            setSortedCourses([...courses]);
        }
    }, [sortKey, navigator]);

    return (
        <>
            <h1>
                {!SORT_KEYS.includes(sortKey)
                    ? `Courses sorted by ${sortKey}`
                    : "Courses"}
            </h1>
            {sortedCourses.map((elem) => {
                return (
                    <div key={elem.id}>
                        <Link
                            className="courseLink"
                            to={elem.slug}
                        >
                            {elem.title}
                        </Link>
                    </div>
                );
            })}
        </>
    );
}

export default Courses;
