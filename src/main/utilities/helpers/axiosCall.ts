import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ForAxiosDefs } from "../../commonTypes";

interface AxiosProps {
    path: string;
    payload: {};
    contentType?: string;
    params?: {};
    method: ForAxiosDefs;
    onUploadProgress?: (progressEvent: any) => void;
}

interface Config extends AxiosRequestConfig {
    contentType?: string;
    data: {};
    json: boolean;
}

interface ReturnAxiosDef extends AxiosResponse {
    data: any;
}

function LocalErrorHandler(message: string | {}) {
    return message;
}

interface HeaderType {
    Authorization?: string;
    "Content-Type": string;
}

export const axiosCall = async (props: AxiosProps) => {
    const headers: HeaderType = {
        "Content-Type": props.contentType || "application/json",
    };

    const url = `${process.env.BASE_URL}${props.path}`;

    const axiosData: Config = {
        method: props.method,
        data: props.payload,
        params: props.params ?? {},
        json: true,
        url,
        headers,
    };

    if (props.onUploadProgress) {
        axiosData.onUploadProgress = props.onUploadProgress;
    }

    try {
        const response = await axios(axiosData);
        return response;
    } catch (error) {
        if (error.response) {
            const errResponse = error.response.data;

            throw LocalErrorHandler(errResponse);
        }
    }
};
