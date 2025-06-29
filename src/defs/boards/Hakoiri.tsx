import { BoardDefinition } from '../BoardDefinition';

// 箱入り娘
const DEFINITION_HAKOIRI: BoardDefinition = {
    width: 4, // グリッドの列数
    height: 5, // グリッドの行数
    pieceData: [
        { id: 1, label: "父親", size: { width: 1, height: 2 }, position: { x: 1, y: 1 } },
        { id: 2, label: "娘", size: { width: 2, height: 2 }, position: { x: 2, y: 1 } },
        { id: 3, label: "母親", size: { width: 1, height: 2 }, position: { x: 4, y: 1 } },
        { id: 4, label: "祖父", size: { width: 1, height: 2 }, position: { x: 1, y: 3 } },
        { id: 5, label: "兄弟", size: { width: 2, height: 1 }, position: { x: 2, y: 3 } },
        { id: 6, label: "祖母", size: { width: 1, height: 2 }, position: { x: 4, y: 3 } },
        { id: 7, label: "華道", size: { width: 1, height: 1 }, position: { x: 2, y: 4 } },
        { id: 8, label: "茶道", size: { width: 1, height: 1 }, position: { x: 3, y: 4 } },
        { id: 9, label: "和裁", size: { width: 1, height: 1 }, position: { x: 1, y: 5 } },
        { id: 10, label: "書道", size: { width: 1, height: 1 }, position: { x: 4, y: 5 } },
    ]
}

export default DEFINITION_HAKOIRI;