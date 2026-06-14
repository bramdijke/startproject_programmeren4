import { ImageSource, Sound, Resource, Loader } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

// All the images and audios used in my project are imported here.
const Resources = {
  RailTile: new ImageSource("/images/rail_tile.png"),
  Minecart: new ImageSource("/images/minecart.png"),
  Background: new ImageSource("/images/cavebg.png"),
  Rock: new ImageSource("./images/rock.png"),
  Bat: new ImageSource("./images/bat.png"),

  BackgroundMusic: new Sound("./audio/minecart-song.mp3"),
  JumpSound: new Sound("./audio/jump.mp3"),
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
