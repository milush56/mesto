class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getProfile() {
    return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  editProfile(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });  
  }

  addCardMesto(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  deleteCardMesto(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  deleteLike(id) {
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  addLike(id) {
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this.headers
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  editAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar
        })
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });  
  }


}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'e128ba14-9a08-452a-b8ca-3e74921f493b',
    'Content-Type': 'application/json'
  }
});