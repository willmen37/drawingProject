import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/auth": "https://drawingproject.onrender.com",
			"/api": "https://drawingproject.onrender.com",
		},
	},
	plugins: [react()],
});
