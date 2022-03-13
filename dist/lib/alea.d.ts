declare class AleaGen {
    c: number;
    s0: number;
    s1: number;
    s2: number;
    constructor(seed: any);
    next(): number;
    copy(f: this, t: this): this;
}
export default AleaGen;
