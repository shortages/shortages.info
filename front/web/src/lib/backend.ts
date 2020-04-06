const baseUrl = "https://us-central1-shortages-39407.cloudfunctions.net/api";

export default class Backend {
  static async post(path: string, data: object, authorization?: string) {
    let headers: { [value: string]: string } = {
      "Content-Type": "application/json"
    };
    if (authorization) {
      headers = {
        ...headers,
        Authorization: authorization
      };
    }
    const result = await fetch(baseUrl + path, {
      method: "POST",
      cache: "no-cache",
      headers,
      body: JSON.stringify(data)
    });

    return await result.json();
  }
}
