type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
type Card = {
  suit: Suit;
  rank: Rank;
};
type Deck = Card[];
type Hand = Card[];
type Player = {
  name: string;
  hand: Hand;
};
type GameState = {
  deck: Deck;
  players: Player[];
  currentPlayerIndex: number;
  currentCard: Card | null;
  gameOver: boolean;
  winner: Player | null;
};
type GameAction = 'draw' | 'play' | 'endTurn';
type GameResult = {
  winner: Player | null;
  gameOver: boolean;
  message: string;
};
type GameError = {
  message: string;
  code: number;
};
type GameEvent = {
  type: 'gameStarted' | 'playerTurn' | 'cardPlayed' | 'gameEnded';
  payload: any;
};
type GameEventHandler = (event: GameEvent) => void;
type GameEventEmitter = {
  on: (eventType: string, handler: GameEventHandler) => void;
  off: (eventType: string, handler: GameEventHandler) => void;
    emit: (eventType: string, payload: any) => void;   

};