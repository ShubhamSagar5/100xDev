const User = require('../models/user.model'); // Adjust the path as necessary
const zod = require('zod');

const Schema = zod.object({
    name: zod.string(),
    userName: zod.string(),
    password: zod.string()
});

const registerUser = async (req, res) => {
    try {
        const { name, userName, password } = req.body;

        // Check if all required fields are present
        if (!name || !userName || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill in fields"
            });
        }

        // Validate input data types
        const checkInputDataType = Schema.safeParse({
            name: name,
            userName: userName,
            password: password
        });

        if (!checkInputDataType.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid data types. Expected strings for name, userName, and password."
            });
        }

        // Check if user already exists
        const alreadyUserExists = await User.findOne({ userName: userName });

        if (alreadyUserExists) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        // Create new user
        const newUser = await User.create({ name: name, userName: userName, password: password });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: newUser
        });

    } catch (error) {
        console.error("Error at User Registration:", error);
        return res.status(500).json({
            success: false,
            message: "Error at User Registration"
        });
    }
};

module.exports = registerUser;
