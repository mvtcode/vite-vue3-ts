import { getEndpointUrl } from '@/api';
import gzip from 'gzip-js';
import { ENDPOINT } from '@/constants';
import { useEndpointStore } from '@/stores/endpoint.ts';

class AppService {
  async getEndpoint() {
    const res = await getEndpointUrl();
    if (res) {
      const gzipData = gzip.zip(res.toString(), {
        level: 9,
      });
      const encodedString = btoa(String.fromCharCode(...gzipData));
      localStorage.setItem(ENDPOINT, encodedString);
      useEndpointStore().endPoint = encodedString;
    }
  }
}

export default new AppService();
