// class TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

//const hc = new TakePhoto("test","test");  //cannot create an instance of an abstract class
//abstract classes are like blueprints

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia called");
  }
}

const hc = new Instagram("test", "test", 3); //can create an instance of a class that extends an abstract class
hc.getReelTime();
