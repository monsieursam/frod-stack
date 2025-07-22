import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { authClient } from "@/lib/auth/auth-client";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const handleLogin = async () => {
		await authClient.signUp.email({
			email,
			password,
			name,
		});
	};

	return (
		<View>
			<TextInput placeholder="Name" value={name} onChangeText={setName} />
			<TextInput placeholder="Email" value={email} onChangeText={setEmail} />
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
			/>
			<Button title="Login" onPress={handleLogin} />
		</View>
	);
}
