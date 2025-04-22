var Choice;
(function (Choice) {
    Choice[Choice["rock"] = 0] = "rock";
    Choice[Choice["paper"] = 1] = "paper";
    Choice[Choice["scissors"] = 2] = "scissors";
    Choice[Choice["default"] = 3] = "default";
})(Choice || (Choice = {}));
class Update {
    constructor() {
        this.gameMessage = document.getElementById("game-message");
        this.playerRock = document.getElementById("p-rock");
        this.playerPaper = document.getElementById("p-paper");
        this.playerScissors = document.getElementById("p-scissors");
        this.computerRock = document.getElementById("c-rock");
        this.computerPaper = document.getElementById("c-paper");
        this.computerScissors = document.getElementById("c-scissors");
    }
    choice(computer, player) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        (_a = this.playerRock) === null || _a === void 0 ? void 0 : _a.classList.remove("animate-pulse");
        (_b = this.playerPaper) === null || _b === void 0 ? void 0 : _b.classList.remove("animate-pulse");
        (_c = this.playerScissors) === null || _c === void 0 ? void 0 : _c.classList.remove("animate-pulse");
        (_d = this.playerRock) === null || _d === void 0 ? void 0 : _d.classList.add("pointer-events-none");
        (_e = this.playerPaper) === null || _e === void 0 ? void 0 : _e.classList.add("pointer-events-none");
        (_f = this.playerScissors) === null || _f === void 0 ? void 0 : _f.classList.add("pointer-events-none");
        switch (computer) {
            case Choice.rock:
                (_g = this.computerRock) === null || _g === void 0 ? void 0 : _g.classList.remove("grayscale-100");
                (_h = this.computerRock) === null || _h === void 0 ? void 0 : _h.classList.remove("opacity-60");
                break;
            case Choice.paper:
                (_j = this.computerPaper) === null || _j === void 0 ? void 0 : _j.classList.remove("grayscale-100");
                (_k = this.computerPaper) === null || _k === void 0 ? void 0 : _k.classList.remove("opacity-60");
                break;
            case Choice.scissors:
                (_l = this.computerScissors) === null || _l === void 0 ? void 0 : _l.classList.remove("grayscale-100");
                (_m = this.computerScissors) === null || _m === void 0 ? void 0 : _m.classList.remove("opacity-60");
                break;
        }
        switch (player) {
            case Choice.rock:
                (_o = this.playerRock) === null || _o === void 0 ? void 0 : _o.classList.remove("grayscale-100");
                (_p = this.playerPaper) === null || _p === void 0 ? void 0 : _p.classList.add("opacity-60");
                (_q = this.playerScissors) === null || _q === void 0 ? void 0 : _q.classList.add("opacity-60");
                break;
            case Choice.paper:
                (_r = this.playerPaper) === null || _r === void 0 ? void 0 : _r.classList.remove("grayscale-100");
                (_s = this.playerScissors) === null || _s === void 0 ? void 0 : _s.classList.add("opacity-60");
                (_t = this.playerRock) === null || _t === void 0 ? void 0 : _t.classList.add("opacity-60");
                break;
            case Choice.scissors:
                (_u = this.playerScissors) === null || _u === void 0 ? void 0 : _u.classList.remove("grayscale-100");
                (_v = this.playerRock) === null || _v === void 0 ? void 0 : _v.classList.add("opacity-60");
                (_w = this.playerPaper) === null || _w === void 0 ? void 0 : _w.classList.add("opacity-60");
                break;
        }
    }
    newRound() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        (_a = this.playerRock) === null || _a === void 0 ? void 0 : _a.classList.add("animate-pulse");
        (_b = this.playerRock) === null || _b === void 0 ? void 0 : _b.classList.add("grayscale-100");
        (_c = this.playerRock) === null || _c === void 0 ? void 0 : _c.classList.remove("pointer-events-none");
        (_d = this.playerRock) === null || _d === void 0 ? void 0 : _d.classList.remove("opacity-60");
        (_e = this.playerPaper) === null || _e === void 0 ? void 0 : _e.classList.add("animate-pulse");
        (_f = this.playerPaper) === null || _f === void 0 ? void 0 : _f.classList.add("grayscale-100");
        (_g = this.playerPaper) === null || _g === void 0 ? void 0 : _g.classList.remove("pointer-events-none");
        (_h = this.playerPaper) === null || _h === void 0 ? void 0 : _h.classList.remove("opacity-60");
        (_j = this.playerScissors) === null || _j === void 0 ? void 0 : _j.classList.remove("pointer-events-none");
        (_k = this.playerScissors) === null || _k === void 0 ? void 0 : _k.classList.remove("opacity-60");
        (_l = this.playerScissors) === null || _l === void 0 ? void 0 : _l.classList.add("animate-pulse");
        (_m = this.playerScissors) === null || _m === void 0 ? void 0 : _m.classList.add("grayscale-100");
        (_o = this.computerRock) === null || _o === void 0 ? void 0 : _o.classList.add("grayscale-100");
        (_p = this.computerRock) === null || _p === void 0 ? void 0 : _p.classList.add("opacity-60");
        (_q = this.computerPaper) === null || _q === void 0 ? void 0 : _q.classList.add("grayscale-100");
        (_r = this.computerPaper) === null || _r === void 0 ? void 0 : _r.classList.add("opacity-60");
        (_s = this.computerScissors) === null || _s === void 0 ? void 0 : _s.classList.add("grayscale-100");
        (_t = this.computerScissors) === null || _t === void 0 ? void 0 : _t.classList.add("opacity-60");
        if (this.gameMessage) {
            this.gameMessage.textContent = "Choose Your Weapon";
        }
    }
}
export default Update;
