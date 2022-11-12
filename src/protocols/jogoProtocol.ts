export type JogoEntity = {
    id: number,
    homePlayer: string,
    visitorPlayer: string,
    finished: boolean,
    homeResult: number,
    visitorResult: number,
    createAt: string | Date 
};

export type Jogo = Omit<JogoEntity, "id" | "finished" | "homeResult" | "visitorResult" | "createAt">;

export type novoJogo = Partial<JogoEntity>;