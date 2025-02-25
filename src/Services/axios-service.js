import axios from "axios";
import axiosConfig from "../utils/config/axios.config";
// exporte mi otro js el config


export default function getRandomUser() {
    return axiosConfig.get('/', { // Ahora sí usa la configuración personalizada
        validateStatus: function (status) {
            return status < 500; // Acepta respuestas con status < 500
        }
    });
}
