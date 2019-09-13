//このimportは絶対必要！！！
//この構文が無いと、JSXをトランスパイルする処理が走らなくなる！！
//逆を言えばJSXを使わなければ必要ない
import React from 'react';


//classはJSの予約語なのでJSXではclassNameと書く
//属性名等は全てキャメルケースでかく。
//React.FragmentはHTML上でみると表示されなくなるタグ。JSXで記述するときは親タグをつけなくてはいけないので、それをHTML上に表示させないようにするタグ。

const App = () => {

  const profiles = [
    { name: 'Taro' , age : 10 },
    { name: 'Ziro' , age : 8 },
    { name: 'Hanako'},
    { name: 'Daiki' , age : 8 },
    { name: 'Yamato' },
  ];

  return (
    <div>
      {
        profiles.map((profile , index) => {
          return <User name={profile.name} age={profile.age} key={index}/>;
        })
      }
    </div>
  );
};

const User = props => {
  return <div>HI , I am {props.name} and {props.age} years old </div>;
};

//属性の値が指定されていない場合、下記の値が代入される。
User.defaultProps = {
  age :1 
};

export default App ;