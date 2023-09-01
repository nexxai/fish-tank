class RacerFish extends Fish {
  constructor(options) {
    super(options);
    this.speedCounter = 100;
    this.maxSwimSpeed = randRangeInt(10000, 100000);
  }

  updateOneTick() {
    this.position.x += 10;
  }
}
