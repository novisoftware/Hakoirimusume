import { BoardDefinition } from '../BoardDefinition';

// 箱入り娘(大家族)
const DEFINITION_HAKOIRI_BIG_FAMILY: BoardDefinition = {
    width: 6, // グリッドの列数
    height: 5, // グリッドの行数
    pieceData: [
        { id: 1, label: "父", size: { width: 1, height: 2 }, position: { x: 3, y: 1 } },
        { id: 2, label: "娘", size: { width: 2, height: 2 }, position: { x: 4, y: 1 } },
        { id: 3, label: "母", size: { width: 1, height: 2 }, position: { x: 6, y: 1 } },
        { id: 4, label: "丁稚", size: { width: 1, height: 1 }, position: { x: 1, y: 3 } },
        { id: 5, label: "手代", size: { width: 1, height: 1 }, position: { x: 2, y: 3 } },
        { id: 6, label: "大番頭", size: { width: 4, height: 1 }, position: { x: 3, y: 3 } },
        { id: 7, label: "丁稚", size: { width: 1, height: 1 }, position: { x: 1, y: 4 } },
        { id: 8, label: "番頭", size: { width: 2, height: 1 }, position: { x: 2, y: 4 } },
        { id: 9, label: "女中", size: { width: 2, height: 1 }, position: { x: 4, y: 4 } },
        { id: 10, label: "兄嫁", size: { width: 1, height: 1 }, position: { x: 6, y: 4 } },
        { id: 11, label: "番犬", size: { width: 1, height: 1 }, position: { x: 1, y: 5 } },
        { id: 12, label: "祖父", size: { width: 2, height: 1 }, position: { x: 2, y: 5 } },
        { id: 13, label: "祖母", size: { width: 2, height: 1 }, position: { x: 4, y: 5 } },
        { id: 14, label: "丁稚", size: { width: 1, height: 1 }, position: { x: 6, y: 5 } },
    ]
}

export default DEFINITION_HAKOIRI_BIG_FAMILY;