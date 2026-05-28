import { ImageSource, Sound, Resource, Loader } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

// All the images used in my project are imported here.
const Resources = {
  RailTile: new ImageSource("/images/rail_tile.png"),
  Minecart: new ImageSource("/images/minecart.png"),
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
  ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
