export class TokenStorage {
  private token: string | null;

  constructor() {
    this.token = null;
  }

  save(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    this.token = null;
  }
}
