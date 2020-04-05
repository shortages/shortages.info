const baseUrl = "https://api.shortages.info/";

export default class Backend {
  static async post(path: string, data: object) {
    const result = await fetch(baseUrl + path, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return await result.json();
  }
}
