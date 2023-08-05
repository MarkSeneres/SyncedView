import React from "react";

function AdminNav() {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <nav
            style={{
                background: "linear-gradient(79deg, #7439db, #9f7bdd, #c039db)",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "white",
            }}
        >
            <div>
                <button
                    onClick={handleGoBack}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "white",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M18 11H7.41l5.3-5.29A1 1 0 1 0 11.3 4.29L4.59 11l6.71 6.71a1 1 0 0 0 1.42-1.42L7.41 13H18a1 1 0 0 0 0-2z" />
                    </svg>
                </button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    type="text"
                    placeholder="Search"
                    style={{ marginRight: " 10px", padding: "5px" }}
                />
                <button className="btn btn-light" style={{ marginRight: " 50px", padding: "5px" }}>Go</button>
                <a href="" style={{ marginRight: " 50px", padding: "5px", color: "white", textDecoration: "none" }}>Logout</a>
                {/* Add other elements or icons */}
            </div>
        </nav>
    );
}

export default AdminNav;
