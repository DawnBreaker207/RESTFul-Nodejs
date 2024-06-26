import dotnet from 'dotenv';
dotnet.config({ path: './.env.local' });

const { PORT, URI, JWT_SECRET, CLOUD_NAME, API_KEY, API_SECRET } = process.env;

export { API_KEY, API_SECRET, CLOUD_NAME, JWT_SECRET, PORT, URI };

