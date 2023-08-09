const production = process.env.NODE_ENV === "production"

export const SITE_URL = production ? 'https://www.discoreon.com': 'http://localhost:3000'