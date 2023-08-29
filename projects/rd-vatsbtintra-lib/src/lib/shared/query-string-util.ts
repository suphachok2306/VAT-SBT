export class QueryStringUtils {
  public static get(params: any): string {
    return (params) ? `?${Object.keys(params).map(key => key + '=' + (params[key] ? params[key] : '')).join('&')}` : '';

  }
}
