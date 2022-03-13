interface MersenneInitialTypes {
    N: number;
    M: number;
    MATRIX_A: number;
    UPPER_MASK: number;
    LOWER_MASK: number;
    mt: Array<number>;
    mti: number;
    init_genrand: (seed: number) => void;
    random: () => number;
}
declare const MersenneTwister: new (seed: number) => MersenneInitialTypes;
export default MersenneTwister;
