import House from '../../models/House';

export default function useFetch() {
  async function get(path: string) {
    try {
      let response = await fetch(`/api/${path}`);
      return response.json();
    } catch (error: any) {
      console.log({ error });
      return error;
    }
  }

  async function post(path: string, payload: House) {
    try {
      let response = await fetch(`/api/${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      return response.json();
    } catch (error: any) {
      console.log({ error });
      return error;
    }
  }

  return { get, post };
}
