# `easy-messenger`

> easy to use MessageChannel 


## Install
``` js
// npm
npm install @easy-messenger/server-connection -S
npm install @easy-messenger/client-connection -S
// yarn
yarn add @easy-messenger/server-connection -S 
yarn add @easy-messenger/client-connection -S
```

## Usage
#### 
```js
//parent.html

import { ServerConnection } from '@easy-messenger/server-connection';
const frame = document.querySelector('iframe');
const connection = new ServerConnection(frame);
connection.emit('test', {code: 'xxxxxx'});
frame.src = "./frame.html";
```

```js
//frame.html

import { ClientConnection } from '@easy-messenger/client-connection';
const connection = new ClientConnection();
connection.on('test', (payload)=>{ 
  console.log(payload)  // {code: 'xxxxxx'} 
});
```
#### Request
```js
//parent.html

import { ServerConnection } from '@easy-messenger/serve-connection';
const connection = new ServerConnection(frame); 
connection.request('some-data')
  .then(payload => { 
    // {hello: "world"}
    console.log(payload)
  })
// close connection
connection.close();
```
```js
//frame.html

import { ClientConnection } from '@easy-messenger/client-connection';
const connection = new ClientConnection();
connection.on('some-data', (payload, resolve, reject)=>{
  resolve({hello: 'world'})
});
```
#### Options

```json
{
  targetOrigin: '*' 
  onload: true, 
  timeout: 2000, 
  debug: false,  
  connectionTimeout: 2000
  clientInitiates: false 
}
```