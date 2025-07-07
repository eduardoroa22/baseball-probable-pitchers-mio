const probables = require('./probables');

const getProbablePitchers = async () => {
    return new Promise((resolve, reject) => {
        try {
            const d = new Date();
            const day = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

            probables.mlbpitchers.getPitchers(day, (data) => {
                if (data) {
                    resolve(data);
                } else {
                    reject(new Error("No se pudo obtener pitchers"));
                }
            });
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = getProbablePitchers;
