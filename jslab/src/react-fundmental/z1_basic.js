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

const MyReact = {
  createElement,
  render,
};

/** @jsx MyReact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById('root');

MyReact.render(element, container);
