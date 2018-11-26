export class Recipe {
  /*
    We don't HAVE to put access modifiers, but we will for readability and so that we have a clear understanding
    of what properties can and cannot be accessed from other components
  */
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}
