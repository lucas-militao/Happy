import Image from "../models/Image";


export default {
  render(image: Image) {
    return{
      id: image.id,
      url: `http://192.168.0.123:3333/uploads/${image.path}` //Lembrar de alterar para localhost quando for utilizar emulador
    };
  },

  renderMany(images: Image[]){
    return images.map(image => this.render(image));
  }
}
