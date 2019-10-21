# Custom Handler

In validator functions, when the validation fails and we need to ask the question again we'll be using custom handler function

## Code Snippet

### Send Text Message

<!-- prettier-ignore -->
```js
return resolve({
  success: false,
  customHandler: () => {
    return app.sendTextMessage('Sorry, I cannot understand your choice. Can you please try again?');
  }
});
```

<CodeCopy>

<!-- prettier-ignore -->
return resolve({
  success: false,
  customHandler: () => {
    return app.sendTextMessage('message');
  }
});

</CodeCopy>

### Send Quick Replies

```js
return resolve({
  success: false,
  customHandler: () => {
    return app.sendQuickReplies({
      title:
        'Sorry! I could not understand your choice. Could you please choose a language from the following?',
      options: [
        {
          title: 'English',
          text: 'English'
        },
        {
          title: 'Hindi',
          text: 'Hindi'
        }
      ]
    });
  }
});
```

<CodeCopy>

<!-- prettier-ignore -->
return resolve({
  success: false,
  customHandler: () => {
    return app.sendQuickReplies({
      title:
        'Sorry! I could not understand your choice. Could you please choose a language from the following?',
      options: [
        {
          title: 'English',
          text: 'English'
        },
        {
          title: 'Hindi',
          text: 'Hindi'
        }
      ]
    });
  }
});

</CodeCopy>

### Send Cards

```js
return resolve({
  success: false,
  customHandler: () => {
    return app.sendCards({
      title: 'About Us', // Optional
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
  }
});
```

<CodeCopy>

<!-- prettier-ignore -->
return resolve({
  success: false,
  customHandler: () => {
    return app.sendCards({
      title: 'About Us', // Optional
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
  }
});

</CodeCopy>
