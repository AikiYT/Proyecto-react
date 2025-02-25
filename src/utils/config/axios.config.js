import axios from 'axios'; // primero lo importo

// condiguracion por default de axios
    // luego de axios. tenemos un monton de funciones investigalas
export default axios.create({
    baseURL: 'https://randomuser.me/api',
    responseType: 'json',  // aqui bacamente cree un axios.create para tener las configuraciones basicas su urlbase sera tal api,  su resppuesta sera tipo json y en 6 segundos dara la respuesta cada vez que llame a  esa api
    // hay mas confi pero use estas
    timeout: 6000,
}
)