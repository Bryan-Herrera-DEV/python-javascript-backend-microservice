export interface CommonResponse {
    status:  number;
    message: string;
    data:    Conversions[];
}

export interface Conversions {
    id:    number;
    date:  string;
    high:  string;
    low:   string;
    open:  string;
    close: string;
}
