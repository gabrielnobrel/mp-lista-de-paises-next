const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

type GetOptions = {
  headers?: HeadersInit;
  cache?: RequestCache;
};

type ApiEnvelope<T> = {
  data: {
    objects: T;
  };
};

export async function get<T>(
  path: string,
  { headers, cache }: GetOptions = {},
): Promise<T | null> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      ...headers,
    },
    cache,
  });

  if (!response.ok) return null;

  const json: ApiEnvelope<T> = await response.json();
  return json.data.objects;
}
