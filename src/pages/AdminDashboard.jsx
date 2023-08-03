import React, { useEffect } from "react";
import RoomMonitoring from "../component/RoomMonitoring";

function AdminDashboard() {
    useEffect(() => {
        document.title = "Admin Dashboard";
    }, []);

    const generateRooms = (totalRooms) => {
        const rooms = [];

        for (let i = 1; i <= totalRooms; i++) {
            const roomNumber = `10${i < 10 ? "0" + i : i}`;
            const availability = true; 
            rooms.push({
                id: i,
                roomNumber,
                availability,
            });
        }

        return rooms;
    };

    const totalRooms = 30;
    const rooms = generateRooms(totalRooms);

    return (
        <>
            <div style={{color: "white"}}>
                <RoomMonitoring rooms={rooms} />
            </div>
        </>
    );
}

export default AdminDashboard;

