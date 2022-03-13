import MersenneTwister from './mersenne_twister'
import AleaGen from './alea'

interface range {
  min: number
  max: number
}

interface GenerateRandom extends range {
  value: string
}

interface MinMax extends range {
  random: number
}

function minMax(opts: MinMax){
  const { random, min, max } = opts
  return Math.floor(random * (max - min + 1) + min);
}


export default function randomNumber(opts: GenerateRandom){
  const { value, min, max } = opts

  const prepareSeed = new AleaGen(value)
  const seedOutput = prepareSeed.s1 * 10000000

  const mersenne = new MersenneTwister(seedOutput)

  return minMax({random: mersenne.random(), min, max})
}
