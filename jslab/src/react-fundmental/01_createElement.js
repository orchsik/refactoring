const React = require('react');

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)

/**
 * 마이스타일 React.createElement를 만들어보자.
 * JSX를 JS로 바꿔주는 기능을해주는거야
 */
// #0 JSX형태
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

// #1 React.createElement를 이용해서 JS 형식으로 바꾸기
const element = React.createElement(
  'div',
  { id: 'foo' },
  React.createElement('a', null, 'bar'),
  React.createElement('b')
);

// #2-1 마이스타일 createElement 만들기
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

// #2-2 children 배열은 string, number와 같은 기본 타입의 값들을 포함할 수 있다.
// 객체가 아닌 모든것을 감싸서 자체 엘리먼트 안에 넣고,
// 이를 TEXT_ELEMENT라는 특별한 타입으로 생성할 수 있다.
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// #3 바벨이 내가 만든 createElement를 쓰게 하자~.
const MyReact = {
  createElement,
};

const element = MyReact.createElement(
  'div',
  { id: 'foo' },
  MyReact.createElement('a', null, 'bar'),
  MyReact.createElement('b')
);

/** @jsx MyReact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
