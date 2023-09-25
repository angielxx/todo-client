export class TokenStorage {
  private token: string | null;

  constructor() {
    this.token = null;
  }

  save(token: string) {
    this.token = token;
  }

  get() {
    return this.token;
  }

  remove() {
    this.token = null;
  }
}
