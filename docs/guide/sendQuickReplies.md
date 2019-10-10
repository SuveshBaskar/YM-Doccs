# Send Quick Replies

Send text responses along with Options.

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

::: tip
Consider using same messages in both `title` and `text`
:::
