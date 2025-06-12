import { createContext, Dispatch, SetStateAction } from "react";

type counterContextType = {
    estado : boolean;
    setEstado: Dispatch<SetStateAction<boolean>>; // Dispatch é um tipo de função de um estado que retorna vazio, o SetStateAction diz que o tipo setter
}

export const CounterContext = createContext <counterContextType | undefined >(undefined);