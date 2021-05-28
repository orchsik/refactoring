const React = require('react');
const { JSDOM } = require('jsdom');
const { document } = new JSDOM().window;

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

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

const MyReact = {
  createElement,
};

/** @jsx MyReact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById('root');
ReactDOM.render(element, container);

/**
 * 마이스타일 ReactDOM.render를 만들어보자.
 * DOM을 변경시켜주는거야~
 */
// #0 ReactDOM.render
ReactDOM.render(element, container);

// #1 DOM에 추가, 갱신, 삭제 되게 해보자~
const MyReact = {
  createElement,
  render,
};

MyReact.render(element, container);

// #2-1 element 타입을 이용해서 DOM 노드를 생성해보자.
function render(element, container) {
  const dom = document.createElement(element.type);
  container.appendChild(dom);
}

// #2-2 이 과정을 각각의 자식들 모두에게 재귀적으로 수행해라~
function render(element, container) {
  const dom = document.createElement(element.type);

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

// #2-3 타입이 TEXT_ELEMENT 인 경우, 텍스트 노드로 생성
function render(element, container) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

// #2-4 노드에 엘리먼트 속성을 부여하자.
function render(element, container) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter((key) => key !== 'children')
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}
