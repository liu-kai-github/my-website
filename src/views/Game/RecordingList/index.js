import React from 'react';

import {List} from 'antd-mobile';

const Item = List.Item;

function RecordingList({dataSource}) {
    return (
        <List renderHeader={() => '输入记录'} className="my-list">
            {
                dataSource.map(
                    (item, index) => {
                        return (<Item
                            key={index}
                            extra={`${item.result[0]}A ${item.result[1]}B`}
                        >
                                <span style={{
                                    display: 'inline-block',
                                    width: '25px',
                                    color: index < 7 ? '#1da57a' : '#e94f4f',
                                }}>{index + 1 + '.'}</span>
                            <div style={{
                                display: 'inline-block',
                                width: '120px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                }}>{
                                    item.userInput.map(
                                        (item1, index2) => <span key={index2}>{item1}</span>
                                    )
                                }</div>
                            </div>
                        </Item>);
                    }
                )
            }
        </List>
    );
}

export default RecordingList;
