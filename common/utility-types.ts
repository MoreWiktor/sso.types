export type DeepRequired<T> = Required<{ 
    [K in keyof T]: T[K] extends object ? DeepRequired<T[K]> : T[K]; 
}>;

export type DeepPartial<T> = Partial<{
    [k in keyof T]?: T[k] extends object ? DeepPartial<T[k]> : T[k]; 
}>;
