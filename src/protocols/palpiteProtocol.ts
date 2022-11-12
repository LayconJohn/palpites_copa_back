export type PalpiteEntity = {
    id: number,
    username: string,
    homePlayer: string,
    visitorPlayer: string,
    homeGuess: number,
    visitorGuess: number,
};

export type novoPalpite = Partial<PalpiteEntity>;

export type Palpite = {

    id: number;
    userId: number;
    resultId: number;
    gameId: number;

}