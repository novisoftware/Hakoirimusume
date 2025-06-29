import React, { useEffect, useState } from 'react';
import PuzzlePiece from './PuzzlePiece';

interface PieceData {
    id: number;
    label: string;
    size: {
        width: number;
        height: number;
    };
    position: {
        x: number;
        y: number;
    };
}

interface Definition {
    width: number; // グリッドの列数
    height: number; // グリッドの行数
    pieceData: PieceData[]; // ピースのデータ
}

interface Position {
    x: number;
    y: number;
}

// 箱入り娘(大家族)
const DEFINITION_HAKOIRI_BIG_FAMILY: Definition = {
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

// 箱入り娘
const DEFINITION_HAKOIRI: Definition = {
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

// 将棋パズル
const DEFINITION_SHOGI: Definition = {
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

// 華容道
const DEFINITION_KAYOUDOU: Definition = {
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


// const boardDef = DEFINITION_HAKOIRI; // 初期定義を設定
// const boardDef = DEFINITION_SHOGI; // 初期定義を設定
const boardDef = DEFINITION_KAYOUDOU; // 初期定義を設定

const Board: React.FC = () => {
    useEffect(() => {
        const boardElement = document.querySelector('.board');
        if (boardElement) {
            boardElement.addEventListener('touchmove', (event) => event.preventDefault(), { passive: false });
        }
        return () => {
            if (boardElement) {
                boardElement.removeEventListener('touchmove', (event) => event.preventDefault());
            }
        };
    }, []);

    const [pieces, setPieces] = useState<PieceData[]>(boardDef.pieceData); // ピースの初期データを設定
    const [hoverPosition, setHoverPosition] = useState<Position | null>(null);
    const [draggedPiece, setDraggedPiece] = useState<PieceData | null>(null); // ドラッグ中のピースを保存
    const [dragStartPosition, setDragStartPosition] = useState<Position | null>(null); // ドラッグ開始位置を保存
    const [touchStartPosition, setTouchStartPosition] = useState<Position | null>(null);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>, piece: PieceData) => {
        event.preventDefault();
        const touch = event.touches[0];
        setDraggedPiece(piece);
        setTouchStartPosition({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (!draggedPiece || !touchStartPosition) return;

        const touch = event.touches[0];
        const deltaX = touch.clientX - touchStartPosition.x;
        const deltaY = touch.clientY - touchStartPosition.y;

        const newX = Math.floor(draggedPiece.position.x + deltaX / (600 / boardDef.width));
        const newY = Math.floor(draggedPiece.position.y + deltaY / (500 / boardDef.height));

        // 枠外に出ないよう補正
        const correctedX = Math.min(Math.max(newX, 1), boardDef.width - draggedPiece.size.width + 1);
        const correctedY = Math.min(Math.max(newY, 1), boardDef.height - draggedPiece.size.height + 1);

        setHoverPosition({ x: correctedX, y: correctedY });

        // setDraggedPiece({ ...draggedPiece, position: { x: correctedX, y: correctedY } });
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (!draggedPiece || !hoverPosition) return;

        // 他のピースと重なるか確認
        const isOverlap = pieces.some((piece) => {
            return (
                piece.id !== draggedPiece.id && // ドロップされたピース自身は除外
                hoverPosition.x < piece.position.x + piece.size.width &&
                hoverPosition.x + draggedPiece.size.width > piece.position.x &&
                hoverPosition.y < piece.position.y + piece.size.height &&
                hoverPosition.y + draggedPiece.size.height > piece.position.y
            );
        });

        if (!isOverlap) {
            setPieces((prevPieces) =>
                prevPieces.map((piece) =>
                    piece.id === draggedPiece.id ? { ...draggedPiece, position: { x: hoverPosition.x, y: hoverPosition.y } } : piece
                )
            );
        }
        setDraggedPiece(null);
        setTouchStartPosition(null);
    };


    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (!draggedPiece) return; // ドラッグ中のピースが存在しない場合は処理を中断
        if (!dragStartPosition) return; // ドラッグ開始位置が未設定の場合は処理を中断
        // ドラッグ開始位置を基準に相対的な位置を計算
        const X = event.clientX; // X座標
        const Y = event.clientY; // Y座標
        const relativeX = X - dragStartPosition.x; // ドラッグ操作での相対的なX座標
        const relativeY = Y - dragStartPosition.y; // ドラッグ操作での相対的なY座標

        // ドラッグ中のピースの位置を基準にホバー位置を計算
        // グリッドの位置を計算
        const rect = event.currentTarget.getBoundingClientRect();
        let hoverX = Math.floor(relativeX / (1.0 * rect.width / boardDef.width) + 0.5) + draggedPiece.position.x; // グリッドの列を計算
        let hoverY = Math.floor(relativeY / (1.0 * rect.height / boardDef.height) + 0.5) + draggedPiece.position.y; // グリッドの行を計算

        // ドロップ位置を補正
        hoverX = Math.max(hoverX, 1); // 最小値を1に設定
        hoverY = Math.max(hoverY, 1); // 最小値を1に設定
        hoverX = Math.min(Math.max(hoverX, 1), boardDef.width - draggedPiece.size.width + 1);
        hoverY = Math.min(Math.max(hoverY, 1), boardDef.height - draggedPiece.size.height + 1);

        setHoverPosition({ x: hoverX, y: hoverY });
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedPiece = JSON.parse(event.dataTransfer.getData('text/plain')); // as PieceData;
        const targetX = hoverPosition?.x || 1;
        const targetY = hoverPosition?.y || 1;

        // 他のピースと重なるか確認
        const isOverlap = pieces.some((piece) => {
            return (
                piece.id !== droppedPiece.id && // ドロップされたピース自身は除外
                targetX < piece.position.x + piece.size.width &&
                targetX + droppedPiece.size.width > piece.position.x &&
                targetY < piece.position.y + piece.size.height &&
                targetY + droppedPiece.size.height > piece.position.y
            );
        });

        // 枠の外に出ないか確認
        const isOutOfBounds = targetX < 1 || targetY < 1 || targetX + droppedPiece.size.width > boardDef.width + 1 || targetY + droppedPiece.size.height > boardDef.height + 1;

        if (!isOverlap && !isOutOfBounds) {
            setPieces((prevPieces) =>
                prevPieces.map((piece) =>
                    piece.id === droppedPiece.id
                        ? { ...piece, position: { x: targetX, y: targetY } }
                        : piece
                )
            );
        } else {
            console.log("重なりが発生しました。ドラッグをキャンセルします。");
        }

        setHoverPosition(null); // ドロップ後にホバー位置をリセット
        setDraggedPiece(null); // ドロップ後にドラッグ中のピースをリセット
    };

    const w1: string = `${boardDef.width * 100 + 10}px`; // ボードの幅 + 枠の幅
    const h1: string = `${boardDef.height * 100 + 40}px`; // ボードの高さ + 枠の幅


    const w2: string = `${boardDef.width * 100}px`; // ボードの幅
    const h2: string = `${boardDef.height * 100}px`; // ボードの高さ

    const gridTemplateColumns = `repeat(${boardDef.width}, 1fr)`;
    const gridTemplateRows = `repeat(${boardDef.height}, 1fr)`;

    return (
        <div
            style={{
                position: 'relative',
                width: `${w1}`, // ボードの幅 + 枠の幅
                height: `${h1}`, // ボードの高さ + 枠の幅
                border: '10px solid black', // 枠を追加
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                className="board"

                style={{
                    display: 'grid',
                    gridTemplateColumns: `${gridTemplateColumns}`,
                    gridTemplateRows: `${gridTemplateRows}`,
                    width: `${w2}`, // ボードの幅
                    height: `${h2}`, // ボードの高さ
                    position: 'relative',
                    backgroundColor: '#fff0',
                    margin: '5px', // 枠の幅を考慮してマージンを追加
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {pieces.map((piece, index) => (
                    <PuzzlePiece
                        key={index}
                        label={piece.label}
                        size={piece.size}
                        position={piece.position}
                        isActive={false}
                        onClick={() => console.log(`${piece.label} clicked`)}
                        onDragStart={(event) => {
                            event.dataTransfer.setData('text/plain', JSON.stringify(piece));
                            setDraggedPiece(piece); // ドラッグ中のピースを保存

                            const startX = event.clientX; // 操作開始時のX座標
                            const startY = event.clientY; // 操作開始時のY座標
                            console.log(`Drag started at X: ${startX}, Y: ${startY}`); // ログ出力
                            setDragStartPosition({ x: startX, y: startY }); // ドラッグ開始位置を保存
                        }}
                        onTouchStart={(event) => handleTouchStart(event, piece)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    />
                ))}
                {hoverPosition && draggedPiece && (
                    <div
                        style={{
                            gridColumn: `${hoverPosition.x} / span ${draggedPiece.size.width}`,
                            gridRow: `${hoverPosition.y} / span ${draggedPiece.size.height}`,
                            backgroundColor: 'rgba(128, 128, 255, 0.1)',
                            border: '1px solid rgba(128, 128, 255, 0.5)',
                            borderRadius: '7px',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                )}
            </div>
            {/* 下辺中央の出口を表現する切れ目 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px', // 2マス分の幅
                    height: '10px', // 枠の高さ
                    backgroundColor: '#fff', // 枠の切れ目を白で表現
                }}
            />
        </div>
    );
};

export default Board;