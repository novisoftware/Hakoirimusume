import { BoardDefinition } from '../BoardDefinition';

// 華容道
const DEFINITION_KAYOUDOU: BoardDefinition = {
    width: 4, // グリッドの列数
    height: 5, // グリッドの行数
    pieceData: [
        { id: 1, label: "黄忠", size: { width: 1, height: 2 }, position: { x: 1, y: 1 } },
        { id: 2, label: "曹操", size: { width: 2, height: 2 }, position: { x: 2, y: 1 } },
        { id: 3, label: "張飛", size: { width: 1, height: 2 }, position: { x: 4, y: 1 } },
        { id: 4, label: "兵", size: { width: 1, height: 1 }, position: { x: 1, y: 3 } },
        { id: 5, label: "馬超", size: { width: 1, height: 2 }, position: { x: 1, y: 4 } },
        { id: 6, label: "関羽", size: { width: 2, height: 1 }, position: { x: 2, y: 3 } },
        { id: 7, label: "趙雲", size: { width: 1, height: 2 }, position: { x: 4, y: 3 } },
        { id: 9, label: "兵", size: { width: 1, height: 1 }, position: { x: 4, y: 5 } },
        { id: 8, label: "兵", size: { width: 1, height: 1 }, position: { x: 2, y: 4 } },
        { id: 9, label: "兵", size: { width: 1, height: 1 }, position: { x: 3, y: 4 } },
    ]
}

export default DEFINITION_KAYOUDOU;
