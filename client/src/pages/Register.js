import "../assets/CSS/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phnNumber, setPhnNumber] = useState("");
    const [thana, setThana] = useState("");
    const [district, setDistrict] = useState("");
    const [pass, setPass] = useState("");
    const [address, setAddress] = useState("");

    const isValidIndianNumber = (number) => /^[6789]\d{9}$/.test(number);
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = (password) => password.length >= 8;

    const sendRegInfo = async () => {
        try {
            const trimmedName = name.trim();
            const trimmedEmail = email.trim();
            const trimmedPhnNumber = phnNumber.trim();
            const trimmedThana = thana.trim();
            const trimmedDistrict = district.trim();
            const trimmedPass = pass.trim();
            const trimmedAddress = address.trim();

            if (!trimmedName || !trimmedEmail || !trimmedPhnNumber || !trimmedAddress || !trimmedThana || !trimmedDistrict || !trimmedPass) {
                alert("All fields are required!");
                return;
            }

            if (!isValidIndianNumber(trimmedPhnNumber)) {
                alert("Invalid phone number!");
                return;
            }

            if (!isValidEmail(trimmedEmail)) {
                alert("Invalid email format!");
                return;
            }

            if (!isValidPassword(trimmedPass)) {
                alert("Password must be at least 8 characters long!");
                return;
            }

            const regInfo = {
                Name: trimmedName,
                Email: trimmedEmail,
                Phone: trimmedPhnNumber,
                Address: `${trimmedAddress}, ${trimmedThana}, ${trimmedDistrict}`,
                Password: trimmedPass,
                UserType: ["affected"],
                Available: true,
                Community: [],
                CreationTime: new Date().toISOString()
            };

            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(regInfo)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful!");
                navigate("/auth/login");
            } else {
                alert(data.error || "Registration failed");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Network error. Try again!");
        }
    };

    return (
        <div className="RegForm">
            <h2 className="RegTitle">Fill Up The Form</h2>

            <div className="RegField">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="RegField">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="RegField">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" value={phnNumber} onChange={(e) => setPhnNumber(e.target.value)} required />
            </div>

            <div className="RegField">
                <label>Thana</label>
                <input type="text" placeholder="Enter your thana" value={thana} onChange={(e) => setThana(e.target.value)} required />
            </div>

            <div className="RegField">
                <label>District</label>
                <input type="text" placeholder="Enter your district" value={district} onChange={(e) => setDistrict(e.target.value)} required />
            </div>

            <div className="RegField">
                <label>Address</label>
                <input type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>

            <div className="RegField">
                <label>Password</label>
                <input type="password" placeholder="Give a password" value={pass} onChange={(e) => setPass(e.target.value)} required />
            </div>

            <button className="RegButton" onClick={sendRegInfo}>Register</button>
        </div>
    );
}

export default Register;
