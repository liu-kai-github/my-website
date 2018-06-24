import React from 'react';
import {Link} from 'react-router-dom';
import {WingBlank, Button, WhiteSpace, Picker, Modal} from 'antd-mobile';

import './index.less';
import RecordingList from "./RecordingList";

const alert = Modal.alert;

class Game extends React.Component {

    targetNumber = getTargetNumbers();
    pickerDataSource = getPickerDataSource();

    constructor(props) {
        super(props);

        this.state = {
            // 选择框的值
            pickerValues: [0, 0, 0, 0],
            // 用户输入记录
            recordingList: [
                // {
                //     // 用户实际输入
                //     userInput: [1, 1, 1, 1],
                //     // 系统反馈结果
                //     result: [2, 2],
                // }
            ],
        };

        this.onNumberPickerOK = this.onNumberPickerOK.bind(this);
        this.alertBox = this.alertBox.bind(this);
        // getFeedbackResult([1, 3, 5, 7], [7, 5, 3, 1]);
    }

    /**
     * @description 再次初始化游戏
     */
    initializeAgainGame() {
        this.targetNumber = getTargetNumbers();
        this.setState({
            pickerValues: [0, 0, 0, 0],
            recordingList: [],
        });
    }

    /**
     * @description 当数字选择器点击确定时
     * @param value 用户选中的值
     */
    onNumberPickerOK(value) {
        this.setState({
            recordingList: [
                ...this.state.recordingList,
                {
                    userInput: value,
                    result: getFeedbackResult(this.targetNumber, value),
                }
            ]
        });
        setTimeout(() => {
            this.judgingTheWinningOrLosing(this.state.recordingList);
        });
    }

    /**
     * @description 根据用户输入记录，判断输赢
     * @param recordingList 用户输入记录
     */
    judgingTheWinningOrLosing(recordingList) {
        const recordingLength = recordingList.length;
        const lastRecording = recordingList[recordingLength - 1];
        if (lastRecording.result[0] === 4) {
            saveTheRecording(recordingList, this.targetNumber);
            this.alertBox('恭喜您，赢了！！！', `本次猜的数字为 ${this.targetNumber.join(' ')}`);
        } else if (recordingLength === 10) {
            saveTheRecording(recordingList, this.targetNumber);
            this.alertBox('输了，再接再厉', `本次猜的数字为 ${this.targetNumber.join(' ')}`);
        }
    }

    /**
     * @description 弹出提示框
     * @param title 弹出框标题
     */
    alertBox(title, prompt) {
        alert(
            title,
            prompt,
            [
                {text: '查看记录', onPress: () => this.props.history.push('/history'), style: 'default'},
                {text: '再玩一次', onPress: () => this.initializeAgainGame()},
            ]
        );
    }

    render() {
        return (<WingBlank size='md'>
            {/*<div>{this.state.pickerValues}</div>*/}
            <RecordingList
                dataSource={this.state.recordingList}
            />

            <WhiteSpace size='md'/>

            <Picker
                data={this.pickerDataSource}
                title="选择数字组合"
                cascade={false}
                value={this.state.pickerValues}
                onChange={v => this.setState({pickerValues: v})}
                onOk={this.onNumberPickerOK}
            >
                <Button
                    onClick={() => document.body.scrollTop = document.body.scrollHeight}
                >开始输入</Button>
            </Picker>

            <div style={{
                // textAlign: 'right',
                padding: '15px 0',
            }}><Link to={'/'}> &lt;&lt; 退出游戏，返回首页</Link></div>

            <div style={{
                height: '200px',
            }}>

            </div>
        </WingBlank>);
    }
}

export default Game;

/**
 * @description 根据目标数组和用户输入的数组，得出反馈结果
 * @param targetNumbers 目标数组
 * @param userInputNumber 用户输入数组
 * @return {number[]}
 */
function getFeedbackResult(targetNumbers, userInputNumber) {
    let a = 0, b = 0;
    for (const [index, item] of userInputNumber.entries()) {
        if (targetNumbers[index] === item) {
            a++;
        } else if (targetNumbers.includes(item)) {
            b++;
        }
    }
    console.log(a, b);
    return [a, b];
}

/**
 * @description 游戏开始前，生成四个范围在 0~9 之间的不重复的随机数字
 * @return {Array}
 */
function getTargetNumbers() {
    const arr = [];
    do {
        const item = getRandom();
        if (arr.includes(item)) {
            continue;
        }
        arr.push(item);
    } while (arr.length < 4);
    console.log(arr);
    return arr;
}

/**
 * @description 获取随机数字
 * @return {number}
 */
function getRandom() {
    return Number.parseInt(Math.random() * 10, 10);
}

/**
 * @description 获取选择器的数据源
 * @return {*[]}
 */
function getPickerDataSource() {
    const sourceData = [];
    for (let i = 0; i < 4; i++) {
        const item = [];
        for (let j = 0; j < 10; j++) {
            item.push({
                label: j,
                value: j,
            });
        }
        sourceData.push(item);
    }
    return sourceData;
}

/**
 * @description 保存游戏历史纪录
 * @param recording 要保存的记录
 * @param targetNumbers 目标数字
 */
function saveTheRecording(recording, targetNumbers) {
    // 要储存的对象信息
    const history = {
        dateTime: new Date().getTime(),
        recording,
        targetNumbers,
    };
    // 以前储存的游戏历史信息
    const gameHistory = window.localStorage.getItem('gameHistory');
    // 本次组织好后要出存的信息
    let willSaveItem;

    if (gameHistory) {
        willSaveItem = [
            history,
            ...JSON.parse(gameHistory),
        ];
    } else {
        willSaveItem = [history];
    }

    window.localStorage.setItem('gameHistory', JSON.stringify(willSaveItem));
}
