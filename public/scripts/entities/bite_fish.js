class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/bitefish.gif";
  }

  updateOneTick() {
    let denizens = Object.keys(window.fishtank.denizens);

    denizens.forEach((key) => {
      let denizen = window.fishtank.denizens[key];

      // We don't want to kill other BiteFish
      if (
        denizen.constructor.name.endsWith("Fish") &&
        denizen.constructor.name !== "BiteFish" &&
        denizen.constructor.name !== "Shark"
      ) {
        // Is the denizen within 50 positions (pixels?) from us
        // Just using the absolute value so we don't have to check for + AND - separately
        if (
          Math.abs(this.position.x - denizen.position.x) <= 50 ||
          Math.abs(this.position.y - denizen.position.y) <= 50
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
