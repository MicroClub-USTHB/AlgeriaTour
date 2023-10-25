import mongoose from "mongoose"

const userSchema = mongoose.Schema(
	{
		id: { type: String, required: [true, "Id is required"] },
		lastname: { type: String, required: [true, "Name is required"] },
		firstname: { type: String, required: [true, "Name is required"] },
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: [true, "Email adress already taken"],
			match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email pattern is invalid"]
		},
		password: { type: String, required: [true, "Password is required"] },
		profilePicture: {
			type: String,
			default:
				"https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
