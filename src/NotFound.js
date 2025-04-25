import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <p>Please check the URL or return to the homepage.</p>
                <Link className="go-home" to="/">Go to Homepage</Link>
            </div>
        </div>
    );
}

export default NotFound;
