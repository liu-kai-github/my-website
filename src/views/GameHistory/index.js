import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import {WingBlank, WhiteSpace} from 'antd-mobile';
import RecordingList from "../Game/RecordingList";

class GameHistory extends React.Component {
    render() {
        const localRecordingList = JSON.parse(window.localStorage.getItem('gameHistory'));
        // console.log(localRecordingList, 'localRecordingList');
        const recordingList = localRecordingList[0].recording;
        const dateTime = localRecordingList[0].dateTime;
        const targetNumbers = localRecordingList[0].targetNumbers;

        // console.log(recordingList, 'recordingList');
        return (<WingBlank size='md'>

            <WhiteSpace size='md'/>

            <div>时间：{moment(dateTime).format('YYYY-MM-DD HH:mm:ss')}</div>

            <RecordingList
                dataSource={recordingList}
            />

            <WhiteSpace size='md'/>

            <div>目标数字：{targetNumbers.join(' ')}</div>

            <WhiteSpace size='md'/>

            <div style={{textAlign: 'right'}}>{
                recordingList[recordingList.length - 1].result[0] === 4
                ? '获胜'
                : '未获胜'
            }</div>

            <WhiteSpace size='md'/>

            <Link className="am-button am-button-primary" to={'/game'}>再来一局</Link>

        </WingBlank>);
    }
}

export default GameHistory;
