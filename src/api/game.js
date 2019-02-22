import request from "superagent";
const baseURL = "https://storage.googleapis.com";

export default {
    getGame: function({payload}) {
        return new Promise((resolve, reject) => {
            request
                .get(`${baseURL}/replaypoker-dummy-api/tables/${payload}.json`)
                .end((err, {body}) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(body);
                    }
                });
        })
    },
};
