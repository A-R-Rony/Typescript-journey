const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

export class Rational {
  public numerator: number;
  public denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator < 0) {
      numerator = -numerator;
      denominator = -denominator;
    }
    const commonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
    
    this.numerator = numerator / commonDivisor;
    this.denominator = denominator / commonDivisor;
  }

  add(other: Rational): Rational {
    const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  sub(other: Rational): Rational {
    const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  mul(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  div(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(n: number): Rational {
    return n >= 0 ? new Rational(this.numerator ** n, this.denominator ** n) : new Rational(this.denominator ** -n, this.numerator ** -n);
  }

  expreal(base: number): number {
    return base ** (this.numerator / this.denominator);
  }
  reduce() {
     return new Rational(this.numerator, this.denominator);
  }
}