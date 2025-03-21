
import React from 'react'
import "../../assets/CSS/Communities.css"
import { Link, useNavigate } from 'react-router-dom'

export const Communities = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 style={{ marginLeft: '25px' }}>Here's the current list of communities :</h1>
            <table style={{
                display: 'table'
            }}>
                <tr>
                    <th>ComID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Date Created</th>
                    <th>Type</th>
                    <th>Details</th>
                    <th>Number of Users</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Quota Movement 2024</td>
                    <td>India</td>
                    <td>2024-07-15 7:45:30 PM</td>
                    <td>Others</td>
                    <td style={{ maxWidth: '180px' }} >
                        Indian students are expressing their concerns about the quota system, which could lead to a broader movement advocating for educational reforms</td>
                    <td>whole India</td>
                    <td>
                        <button className='action-btn' onClick={() => {
                            navigate(`/community/${1}`);
                        }}>See Insights</button>
                        <button className='action-btn'>Leave</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Remove the waste</td>
                    <td>India</td>
                    <td>2024-07-25 7:45:30 PM</td>
                    <td>Others</td>
                    <td style={{ maxWidth: '180px' }} >
                        A poltics free campus movement all over the country</td>
                    <td>whole India</td>
                    <td>
                        <button className='action-btn' >Join</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
