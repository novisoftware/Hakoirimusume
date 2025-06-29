import React from 'react';

const TITLE = "箱入り娘";
const MESSAGE = "箱入り娘を外に出そう。";

const Header: React.FC = () => {
    return (
        <header>
            <h1>{TITLE}</h1>
            <p>{MESSAGE}詳しくはWikipediaの<a href="https://ja.wikipedia.org/wiki/%E7%AE%B1%E5%85%A5%E3%82%8A%E5%A8%98_(%E3%83%91%E3%82%BA%E3%83%AB)">箱入り娘</a>を見よう。</p>
        </header>
    );
};

export default Header;