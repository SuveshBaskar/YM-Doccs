# Yes or No Validator

## Description

There will be cases in which we need to ask user basic yes/no or agree/disagree question. The following validator function can be used as a universal function to validate all such questions.

`app.context['paramExpected']` is used to get the name of the step currently being dealt with.

Since the user can say anything that mean agreeing we cannot use the sentiment to validate the user utterance. We'll be using `global_model` to get the user response.

If the user utterance does not match with `yes`, `okay` and `no` global_model, we'll check if the user is asking about something else that we can answer by using `app.prediction`. If there is a prediction with a pretty good confidence we'll trigger that journey using `app.triggerIntent('journey-slug')`.

## Code Snippet

<!-- prettier-ignore -->
```js
return new Promise(resolve => {

    let step = app.context['paramExpected'] // Step Slug name

    if (app.prediction.global_model.intent === 'yes' || app.prediction.global_model.intent === 'okay' && app.prediction.global_model.confidence >= 0.80) {
        app.setStep(step, "YES").then(() => { resolve() }) // Step the step and resolve
    } else if (app.prediction.global_model.intent === 'no' && app.prediction.global_model.confidence >= 0.80) {
        app.setStep(step, "NO").then(() => { resolve() }) // Step the step and resolve
    } else if (app.prediction.intent&& app.prediction.confidence >= 0.80) {
        return app.triggerIntent(app.prediction.intent) // Check if user asks something else we can answer
    } else {
        return resolve({
            success: false, // Didn't got the required response so ask the user again
            customHandler: () => {
                return app.sendQuickReplies({
                    title: 'Sorry, I cannot understand your choice. Can you please choose one of the following options?',
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
            }
        });
    }
});
```

<CodeCopy>

<!-- prettier-ignore -->
return new Promise(resolve => {
    let step = app.context['paramExpected'] // Step Slug name
    if (app.prediction.global_model.intent === 'yes' || app.prediction.global_model.intent === 'okay' && app.prediction.global_model.confidence >= 0.80) {
        app.setStep(step, "YES").then(() => { resolve() })
    } else if (app.prediction.global_model.intent === 'no' && app.prediction.global_model.confidence >= 0.80) {
        app.setStep(step, "NO").then(() => { resolve() })
    } else if (app.prediction.intent&& app.prediction.confidence >= 0.80) {
        return app.triggerIntent(app.prediction.intent) 
    } else {
        return resolve({
            success: false,
            customHandler: () => {
                return app.sendQuickReplies({
                    title: 'Sorry, I cannot understand your choice. Can you please choose one of the following options?',
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
            }
        });
    }
});

</CodeCopy>
