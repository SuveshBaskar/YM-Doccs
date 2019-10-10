# Code Snippets

This is page where you can find all the code snippets that can be useful while developing the chatbots

## Send Text Message

```js
app.sendTextMessage('message');
```

## Send Quick Replies

```js
app.sendQuickReplies({
  title: `text`,
  options: [
    {
      title: 'text',
      text: 'text'
    },
    {
      title: 'text',
      text: 'text'
    }
  ]
});
```

## Send Cards

```js
app.sendCards({
  title: 'text',
  image: 'image-url',
  text: 'text',
  actions: [
    {
      title: 'text',
      text: 'text'
    }
  ]
});
```
