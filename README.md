#react-mst-dashboard

until webpack-dev-server fixes it, need to add this to their DevServer.js

```js
ws.on("error", err => {
  if (err.code === "ECONNRESET") return;
  log.error(err);
});
```

to use 0.0.0.0 as server address need to change hostname option to let websocket connect back
in node_modules/webpack-dev-server/lib/client/js/socket.js line 14

```js
hostname: options.host === "0.0.0.0" ? window.location.hostname : options.host,
```
