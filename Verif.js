let hours = new Date().getHours();

function verif1(req, res, next) {
    let day = new Date().getDay();

    if (day > 0 && day < 6 && hours > 9 && hours < 17) {
        next();
    } else {
        res.send('<h1>Services are closed, please check the website during working hours</h1>');
    }
}

module.exports = verif1;
