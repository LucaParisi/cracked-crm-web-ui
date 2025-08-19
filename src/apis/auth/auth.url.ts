

export class AuthUrl{
  public static readonly BASE_URL: string = 'http://127.0.0.1:8080';
  public static readonly BASE_PATH: string = 'auth';
  public static readonly LOGIN_URL = `${AuthUrl.BASE_URL}/${AuthUrl.BASE_PATH}/login`;
}

