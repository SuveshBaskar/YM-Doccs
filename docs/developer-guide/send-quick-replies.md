# Send Quick Replies

## Description

Send text responses along with Options.

**`options`** takes an array of objects. Each of the objects specifies whether that quick reply is a text or url redirect response.

## Code Snippet

```js
app.sendQuickReplies({
  title: `text`,
  options: [
    {
      title: 'text',
      text: 'text' // For text options
    },
    {
      title: 'text',
      url: 'url' // For url redirects
    }
  ]
});
```

<CodeCopy>

<!-- prettier-ignore -->
app.sendQuickReplies({
  title: 'text',
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

</CodeCopy>

## Example

```js
app.sendQuickReplies({
  title: `Can you please choose any one of the following options?`,
  options: [
    {
      title: 'Yes',
      text: 'Yes'
    },
    {
      title: 'No',
      text: 'No'
    }
  ]
});
```

---

::: tip
Consider using same messages in both `title` and `text`
:::
