//このimportは絶対必要！！！
//この構文が無いと、JSXをトランスパイルする処理が走らなくなる！！
//逆を言えばJSXを使わなければ必要ない
import React from 'react';


//classはJSの予約語なのでJSXではclassNameと書く
//属性名等は全てキャメルケースでかく。
//React.FragmentはHTML上でみると表示されなくなるタグ。JSXで記述するときは親タグをつけなくてはいけないので、それをHTML上に表示させないようにするタグ。
export default class App extends React.Component {
  render() {
      return (
        <React.Fragment>
          <label htmlFor="bar">bar</label>
          <input tyor='text' onClick= { () => {console.log('aaaaaaa');} } />
        </React.Fragment>
      );
    }
};