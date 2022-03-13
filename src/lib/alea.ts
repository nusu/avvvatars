class AleaGen {
  c: number;
  s0: number;
  s1: number;
  s2: number;
  
  constructor(seed: any) {
    if (seed == null) seed = +(new Date);

    let n = 0xefc8249d;

    // Apply the seeding algorithm from Baagoe.
    this.c = 1;
    this.s0 = mash(' ');
    this.s1 = mash(' ');
    this.s2 = mash(' ');
    this.s0 -= mash(seed);
    if (this.s0 < 0) { this.s0 += 1; }
    this.s1 -= mash(seed);
    if (this.s1 < 0) { this.s1 += 1; }
    this.s2 -= mash(seed);
    if (this.s2 < 0) { this.s2 += 1; }

    function mash(data: string) {
      data = String(data);
      for (let i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        let h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    }
  }

  next() {
    let {c,s0,s1,s2} = this;
    let t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
    this.s0 = s1;
    this.s1 = s2;
    return this.s2 = t - (this.c = t | 0);
  }

  copy(f: this, t: this) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }
}

export default AleaGen