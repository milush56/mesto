export default class UserInfo {
  constructor(name, info, avatar) {
    this._name = name;
    this._info = info;
    this._avatar = avatar;
  }

  getUserInfo() {
    this._userValue = {};
    this._userValue.name = this._name.textContent;
    this._userValue.info = this._info.textContent;

    return this._userValue;
  }

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._info.textContent = item.about;
  }

  setUserAvatar(item) {
    this._avatar.src = item.avatar;
  }
}