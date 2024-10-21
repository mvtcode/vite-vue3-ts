import axios from '../utils/axios.ts';

const GET_ENDPOINT_URL =
  import.meta.env.VITE_GET_ENDPOINT_URL || 'localhost';
const TOKEN_INSIDE =
  import.meta.env.VITE_INSIDE_TOKEN || 'TOKEN_INSIDE';
const GET_SYSTEM_CONFIG_URL = import.meta.env.VITE_GET_SYSTEM_CONFIG_URL || 'localhost'


export async function getEndpointUrl() {
  try {
    const { data } = await axios.post(
      GET_ENDPOINT_URL,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + TOKEN_INSIDE,
        },
      }
    );
    return data;
  } catch (error) {
    return { error };
  }
}

export async function getConfigSystem() {
  try {
    const { data } = axios.post(GET_SYSTEM_CONFIG_URL)
    return data

  } catch (error) {
    return { error };
  }
}

