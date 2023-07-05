export default class TranSg extends Phaser.Scene {
    constructor() {
      super("TranSg");
    }
  
    init({ score }) {
     this.finalScoreSg = score || 0;
     this.Hscore = 0;
     this.stairs = 0;
     console.log(this.finalScorePr);
    }
  
    
  
    create() {
      this.add.image(400,300,"PrLvl").setScale(0.45);
      
      const backOption = this.add.image(205,457,"back").setScale(0.165).setInteractive();
      backOption.on("pointerover", () => {
  
        backOption.setTint(0x285866);
      });
      backOption.on("pointerout", () => {
  
        backOption.clearTint();
      });
             backOption.on("pointerup", () => {
                this.stairsSg()
            })
      const RetryOption = this.add.image(600,455,"reint").setScale(0.26).setInteractive();
            RetryOption.on("pointerover", () => {
        
              RetryOption.setTint(0x285866);
            });
              RetryOption.on("pointerout", () => {
        
              RetryOption.clearTint();
            });
              RetryOption.on("pointerup", () => {
              this.scene.start("Game");
              })
      this.scoreText = this.add.text(415, 284, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

      this.HscoreText = this.add.text(413, 342, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

      this.noSt = this.add.image(400,228,"noSt")
      .setScale(0.18)
      .setVisible(false);

       this.oneSt = this.add.image(400,220,"onSt")
      .setScale(0.16)
      .setVisible(false);

      this.twoSt = this.add.image(400,220,"twSt")
      .setScale(0.18)
      .setVisible(false);

      this.thSt = this.add.image(400,222,"thSt")
      .setScale(0.16)
      .setVisible(false);

    }
  
    update() {
      this.scoreText.setText(
        this.finalScoreSg
      );
    if (this.finalScoreSg > this.Hscore) {
      this.Hscore = this.finalScoreSg
    };
    this.HscoreText.setText(
      this.Hscore
    );
    if (this.finalScoreSg >= 1200) {
      this.thSt.setVisible(true);
      this.stairs = 4;
    }
    if (this.finalScoreSg < 1200 && this.finalScoreSg >= 700) {
      this.twoSt.setVisible(true);
      this.stairs = 3;
    }
    if (this.finalScoreSg < 700 && this.finalScoreSg >= 300 ) {
      this.oneSt.setVisible(true);
      this.stairs = 2;
    }
    if (this.finalScoreSg < 300 ) {
      this.noSt.setVisible(true);
      this.stairs = 1;
    }
    }
    stairsSg() {
    this.scene.start("Select", {
      SgNivel: this.stairs,
    });
    }
  }