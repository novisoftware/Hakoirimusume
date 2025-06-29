import React, { useState } from 'react';
import Board from './components/Board';
import DEFINITION_HAKOIRI_BIG_FAMILY from './defs/boards/HakoiriBigFamily';
import DEFINITION_HAKOIRI from './defs/boards/Hakoiri';
import DEFINITION_SHOGI from './defs/boards/Shogi';
import DEFINITION_KAYOUDOU from './defs/boards/Kayoudou';
import Header from './components/Header';
import './styles/App.css';

const puzzleOptions = [
    { label: '箱入り娘(大家族)', value: 'big', definition: DEFINITION_HAKOIRI_BIG_FAMILY, header: '箱入り娘(大家族)', message: '大家族の箱入り娘を外に出そう。' },
    { label: '箱入り娘', value: 'hakoiri', definition: DEFINITION_HAKOIRI, header: '箱入り娘', message: '箱入り娘を外に出そう。' },
    { label: '将棋パズル', value: 'shogi', definition: DEFINITION_SHOGI, header: '将棋パズル', message: '王を出陣させよう。'},
    { label: '華容道', value: 'kayou', definition: DEFINITION_KAYOUDOU, header: '華容道', message: '華容道を解こう。' },
];
const App: React.FC = () => {
    const [selected, setSelected] = useState('hakoiri'); // 初期値を箱入り娘に設定
    const current = puzzleOptions.find(opt => opt.value === selected) || puzzleOptions[2];
    return (
        <div className="App">
            <Header header={current.header} message={current.message} />
            <div style={{ margin: '16px 0' }}>
                <label>
                    パズルを選択：
                    <select value={selected} onChange={e => setSelected(e.target.value)}>
                        {puzzleOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </label>
            </div>
            <Board boardDef={current.definition} />
        </div>
    );
};

export default App;