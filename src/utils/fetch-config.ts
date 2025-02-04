export const fetchConfig = {
 baseUrl: process.env.BASE_URL,
};

export const fetchInstance = async (url: string, options: RequestInit) => {
 const response = await fetch(`/${url}`, options);

 if (!response.ok) {
  throw new Error("Failed to fetch");
 }

 return response.json();
};
