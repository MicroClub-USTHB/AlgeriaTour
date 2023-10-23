const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		id: { type: String, required: [true, "Id is required"] },
		lastname: { type: String, required: [true, "Name is required"] },
		firstname: { type: String, required: [true, "Name is required"] },
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: [true, "Email adress already taken"],
		},
		password: { type: String, required: [true, "Password is required"] },
		profilepicture: {
			type: String,
			default:
				"https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
