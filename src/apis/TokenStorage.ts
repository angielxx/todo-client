export class TokenStorage {
  private access_token: string | null;
  private refresh_token: string | null;

  constructor() {
    this.access_token = null;
    this.refresh_token = null;
  }

  save(access_token: string, refresh_token: string) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  }

  get() {
    return localStorage.getItem('access_token');
    return this.access_token;
  }

  remove() {
    this.access_token = null;
    this.refresh_token = null;
  }
}
