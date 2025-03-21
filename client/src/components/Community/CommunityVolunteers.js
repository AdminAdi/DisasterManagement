import React from 'react'

export const CommunityVolunteers = () => {
    return (
        <div>
            <h1>Here's the list of volunteers in this community :</h1>
            <table style={{
                display: 'table'


            }}>
                <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Availability</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Aditya</td>
                    <td>Aditya@gmail.com</td>
                    <td>01789998838</td>
                    <td>Sehore , Bhopal</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sanskriti</td>
                    <td>Sanskriti@gmail.com</td>
                    <td>01798998838</td>
                    <td>Jhansi , UP</td>
                    <td>false</td>
                </tr>
            </table>
        </div>
    )
}