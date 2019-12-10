# Send Text Message edit

## Description

Send a simple text response to the user

Add the message you want to display within the `'message'` section.

## Code Snippet

```js
app.sendTextMessage('message');
```

<CodeCopy>
app.sendTextMessage('message');
</CodeCopy>

## Example

<!-- prettier-ignore -->
```js
app.sendTextMessage('Hey, I am your Insurance Expert. What would you like to know')
  .then(() => {
    resolve();
  });
```

---

::: tip
All the functions are promisified by default so if you want to avoid any async behaviour please consider using **`.then()`** or ** `async await`**
:::
