import React from 'react';

interface PuzzlePieceProps {
    position: { x: number; y: number };
    size: { width: number; height: number };
    label: string;
    isActive: boolean;
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
    onClick: () => void;
}


const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ position, size, label, isActive, onDragStart, onClick }) => {
    let isVertical = false;
    let fontSize = '1rem';
    if (size.width === 1 && size.height === 1) {
        if (label.length == 1) {
            fontSize = '1.5rem'; // 1文字の場合は大きく
            isVertical = false; // 1文字の場合は縦書きも横書きもない
        }
        else {
            fontSize = '1.2rem'; // 2文字以上の場合は通常サイズ
            isVertical = true; // 2文字以上の場合は横書き
        }
    } else {
        if (size.height == size.width) {
            fontSize = '5rem'; // 大きく
        } else if (size.height > size.width) {
            fontSize = '2em'; // 大きく
            isVertical = true; // 縦長の場合は縦書き
        }
        else {
            fontSize = '2rem'; // 大きく
            isVertical = false; // 横長の場合は横書き
        }
    }

    return (
        <div
            className={`puzzle-piece ${isActive ? 'active' : ''}`}
            style={{
                gridColumn: `${position.x} / span ${size.width}`,
                gridRow: `${position.y} / span ${size.height}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                writingMode: isVertical ? 'vertical-rl' : 'horizontal-tb',
                border: '1.5px solid black',
                backgroundColor: '#f0f0f0',
                color: '#000', // 文字色を黒に変更
                fontSize: fontSize, // 文字サイズを調整
                cursor: 'grab',
                width: '100%', // グリッド内で幅を100%に設定
                height: '100%', // グリッド内で高さを100%に設定
            }}
            draggable="true"
            onDragStart={onDragStart}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

export default PuzzlePiece;