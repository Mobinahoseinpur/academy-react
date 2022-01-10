import http from "./httpService";
import config from "./config.json";

export const registerUser = async  user => {
    return await http.post(
        `${config.academyapi}api/auth/register`,
        JSON.stringify(user)
    );
};

export const loginUser = user => {
    return http.post(`${config.academyapi}api/auth/login`, JSON.stringify(user));
};


