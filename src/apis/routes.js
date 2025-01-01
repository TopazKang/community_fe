const BASE_URL = process.env.REACT_APP_SERVER_URL;
const API_URL = `${BASE_URL}/api`;

export const API = {
    BASE_URL,
    LOGIN: `${BASE_URL}/login`,
    MEMBER: `${API_URL}/members/`,
    NICKNAME: `${API_URL}/members/nickname`,
    EMAIL: `${API_URL}/members/email`,

    POST: `${API_URL}/posts/`,

    COMMENT: `${API_URL}/comments`
}