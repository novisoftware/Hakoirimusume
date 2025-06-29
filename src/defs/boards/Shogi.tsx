import { BoardDefinition } from '../BoardDefinition';

// 将棋パズル
const DEFINITION_SHOGI: BoardDefinition = {
    width: 4, // グリッドの列数
    height: 5, // グリッドの行数
    pieceData: [
        { id: 1, label: "角行", size: { width: 1, height: 2 }, position: { x: 1, y: 1 } },
        { id: 2, label: "王", size: { width: 2, height: 2 }, position: { x: 2, y: 1 } },
        { id: 3, label: "飛車", size: { width: 1, height: 2 }, position: { x: 4, y: 1 } },
        { id: 4, label: "香車", size: { width: 1, height: 1 }, position: { x: 1, y: 3 } },
        { id: 5, label: "桂馬", size: { width: 1, height: 1 }, position: { x: 2, y: 3 } },
        { id: 6, label: "桂馬", size: { width: 1, height: 1 }, position: { x: 3, y: 3 } },
        { id: 7, label: "香車", size: { width: 1, height: 1 }, position: { x: 4, y: 3 } },
        { id: 8, label: "金", size: { width: 2, height: 1 }, position: { x: 1, y: 4 } },
        { id: 9, label: "銀", size: { width: 2, height: 1 }, position: { x: 3, y: 4 } },
        { id: 10, label: "歩兵", size: { width: 1, height: 1 }, position: { x: 1, y: 5 } },
        { id: 11, label: "歩兵", size: { width: 1, height: 1 }, position: { x: 4, y: 5 } },
    ]
}

export default DEFINITION_SHOGI;
