import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ons-page id="menuPage">

    <ons-list-title>Links</ons-list-title>
    <ons-list id="links">
      <ons-list-item tappable modifier="longdivider chevron"
        onclick="window.open('https://github.com/frandiox/OnsenUI-Todo-App')"
      >
        <div className="left">
          <ons-icon icon="fa-external-link"></ons-icon>
        </div>
        <div className="center">
          Github repo
        </div>
      </ons-list-item>
      <ons-list-item tappable modifier="longdivider chevron"
        onclick="window.open('https://onsen.io/')"
      >
        <div className="left">
          <ons-icon icon="fa-external-link"></ons-icon>
        </div>
        <div className="center">
          Onsen UI 2.0
        </div>
      </ons-list-item>
      <ons-list-item tappable modifier="longdivider chevron"
        onclick="window.open('https://community.onsen.io/')"
      >
        <div className="left">
          <ons-icon icon="fa-external-link"></ons-icon>
        </div>
        <div className="center">
          Community Forum
        </div>
      </ons-list-item>
    </ons-list>


    <ons-list-title>Default</ons-list-title>
    <ons-list id="default-category-list">
      <ons-list-item tappable>
        <div className="left">
          <ons-radio name="categoryGroup" input-id="r-all" checked></ons-radio>
        </div>
        <label className="center" for="r-all">All</label>
      </ons-list-item>
      <ons-list-item tappable category-id="">
        <div className="left">
          <ons-radio name="categoryGroup" input-id="r-no"></ons-radio>
        </div>
        <label className="center" for="r-no">No category</label>
      </ons-list-item>
    </ons-list>

    <ons-list-title>Custom categories</ons-list-title>
    <ons-list id="custom-category-list">
    </ons-list>
    </ons-page>
  );
}

export default App;
