export default class Credits extends Phaser.Scene {
    constructor() {
      super("Credits");
    }
  // simular boton en imagen
    init() {
     
    }
  
  
    create() {
      this.add.image(400,300,"CredBack").setScale(0.45);
      const backOption = this.add.image(400,460,"back").setScale(0.2).setInteractive();
      backOption.on("pointerover", () => {
  
        backOption.setTint(0x285866);
      });
      backOption.on("pointerout", () => {
  
        backOption.clearTint();
      });
             backOption.on("pointerup", () => {
                this.scene.start("PrincipalMenu");
            })

    }
  
    update() {
   
    }
  }