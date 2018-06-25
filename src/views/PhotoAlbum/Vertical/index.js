import React from 'react';
import {Card, WhiteSpace} from 'antd-mobile';

import './index.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';

const cards = [
    {
        img: pic1,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
    {
        img: pic2,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
    {
        img: pic3,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
    {
        img: pic4,
        title: 'Europe Street beat',
        description: 'www.instagram.com',
    },
];

function Vertical() {
    return (<div className="vertical">
        {
            cards.map(
                (item, index) => {
                    return (<div>
                        <WhiteSpace size="md"/>
                        <Card key={index}>
                            <Card.Header
                                title="这是刘豫静"
                                // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                extra={<span>我最爱的人</span>}
                            />
                            <Card.Body>
                                <div><img src={item.img}/></div>
                            </Card.Body>
                            <Card.Footer content="刘豫静" extra={<div>大美女</div>}/>
                        </Card>
                    </div>);
                }
            )
        }
    </div>);
}

export default Vertical;
