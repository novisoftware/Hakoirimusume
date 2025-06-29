import React from 'react';

interface HeaderProps {
    header: string;
    message: string;
}


const Header: React.FC<HeaderProps> = ({header, message}) => {
    return (
        <header>
            <h1>{header}</h1>
            <p>{message}詳しくはWikipediaの<a href="https://ja.wikipedia.org/wiki/%E7%AE%B1%E5%85%A5%E3%82%8A%E5%A8%98_(%E3%83%91%E3%82%BA%E3%83%AB)">箱入り娘</a>を見よう。</p>
        </header>
    );
};

export default Header;