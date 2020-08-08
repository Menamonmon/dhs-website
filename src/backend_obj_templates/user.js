export default class User {
  constructor(name, age, imgSrc, permissions=[]) {
    this.name = name;
    this.age = age;
    this.imgSrc = imgSrc;
    this.permissions = permissions;
  }
}