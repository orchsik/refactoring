const React = require('react');
const { JSDOM } = require('jsdom');
const { document } = new JSDOM().window;

// 아래 React Code를 vanila JS로 바꿔보자
// const element = <h1 title="foo">Hello</h1>;
// const container = document.getElementById('root');
// ReactDOM.render(element, container);

/**
 * 엘리먼트 정의
 */
var element;
// React JSX
// element = <h1 title="foo">Hello</h1>;
// JS가 읽을 수 있게 바닐라JS로 만들기
element = React.createElement('h1', { title: 'foo' }, 'Hello');
// 결과
element = {
  type: 'h1', // DOM 노드 타입
  props: {
    title: ' foo',
    children: 'Hello', // 일반적으로 많은 엘리멘티의 배열 형태.
  },
};

/**
 * DOM에서 노드 얻기
 */
const container = document.getElementById('root');

/**
 * 노드에 엘리먼트 생성하기
 * 바벨이 어떻게 React 소스를 JS로 바꿔주는지 봐보자~.
 */
// render는 React가 DOM을 변경하는 지점.
ReactDOM.render(element, container);

// #1 element의 type을 이용해 노드 생성
const node = document.createElement(element.type);

// #2 모든 element의 props를 노드에 할당.
Object.entries(element.props).forEach(([key, value]) => {
  if (key !== 'children') {
    node[key] = value;
  }
});

// #3 children 노드를 생성
const text = document.createTextNode('');
text['nodeValue'] = element.props.children;

// #4 textNode를 h1에 추가하고, 이 h1을 container에 추가한다.
node.appendChild(text);
container.appendChild(node);
