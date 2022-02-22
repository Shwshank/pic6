/* eslint-disable */
import { fireEvent, getByText, findByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve('./', './dist/index.html'), 'utf8');

let dom;
let container;

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('renders website name', () => {
    const navTitle = container.querySelector('.nav-title');
    expect(navTitle).toHaveTextContent('Pic6');
    expect(findByText(container, 'Pic6')).toBeTruthy;
  });

  it('theme button function', ()=>{
    container.querySelector('#theme').click()
    expect(container.querySelector('.nav-title')).toHaveStyle("color: #")
  })
});
