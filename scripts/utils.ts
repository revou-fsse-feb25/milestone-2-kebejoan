export default function getRandomNumber(range : number, offset : number) : number {
    return Math.floor(Math.random() * range) + offset;
}