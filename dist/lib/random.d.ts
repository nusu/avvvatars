interface range {
    min: number;
    max: number;
}
interface GenerateRandom extends range {
    value: string;
}
export default function randomNumber(opts: GenerateRandom): number;
export {};
