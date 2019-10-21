# Send Cards

Send rich carousel responses with call to action buttons.

```js
app.sendCards({
  title: 'message', // Optional
  image: 'image_link', // Optional
  text: 'description', // Optional
  actions: [
    {
      title: 'Know More',
      text: 'Know More' // For text options
    },
    {
      title: 'Know More',
      url: 'url' // For url redirects
    }
  ]
});
```

<CodeCopy>

<!-- prettier-ignore -->
app.sendCards(
    {
        title: 'message',
        image: 'image_link',
        text: 'description',
        actions: [
        {
          title: 'Know More',
          text: 'Know More' // For text options
        },
        {
          title: 'Know More',
          url: 'url' // For url redirects
        }
      ]
    }
);

</CodeCopy>

---

::: tip
Consider using same messages in both `title` and `text`
:::
