export interface Position {
    x: number;
    y: number;
}

export interface PieceData {
    id: number;
    label: string;
    size: {
        width: number;
        height: number;
    };
    position: Position;
}

export interface BoardDefinition {
    width: number;
    height: number;
    pieceData: PieceData[];
}