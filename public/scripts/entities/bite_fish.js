class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/bitefish.gif";
    this.isTasty = false;
  }

  updateOneTick() {
    let denizens = Object.keys(window.fishtank.denizens);

    denizens.forEach((key) => {
      let denizen = window.fishtank.denizens[key];

      // We don't want to kill other BiteFish
      if (denizen.constructor.name.endsWith("Fish") && denizen.isTasty) {
        // Is the denizen within 50 positions (pixels?) from us
        // Just using the absolute value so we don't have to check for + AND - separately
        if (
          Math.abs(this.position.x - denizen.position.x) <= 10 ||
          Math.abs(this.position.y - denizen.position.y) <= 10
        ) {
          // Do some logging
          console.log("Killing | ", denizen);
          console.log(
            `BiteFish | x: ${this.position.x}, y: ${this.position.y}`
          );
          console.log(
            `Denizen | x: ${denizen.position.x}, y: ${denizen.position.y}`
          );

          // Time to die
          denizen.kill();
        }
      }
    });
  }
}
