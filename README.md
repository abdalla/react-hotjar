# react-hotjar
Small component to implement Hotjar into your react application

# Installation
```bash
npm install react-hotjar --save
```

# Use / Example
```javascript
import { hotjar } from 'react-hotjar';

hotjar.initialize(options);

// Identify the user
hotjar.identify('USER_ID', { userProperty: 'value' });

// Add an event
hotjar.event('button-click');

// Update SPA state
hotjar.stateChange('/my/page');

// Check if Hotjar has been initialized before calling its methods
if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}
```
`Options` is an object with the following properties:

- `id`: Stands for 'Hotjar ID' - Your site's ID. This is the ID which tells Hotjar which site settings it should load and where it should save the data collected.

- `sv`: Stands for 'Hotjar Snippet Version' - The version of the Tracking Code you are using. This is only needed if Hotjar ever updates the Tracking Code and needs to discontinue older ones. Knowing which version your site includes allows hotjar team to contact you and inform you accordingly.

- `debug`: Stands for 'Debug' - This is a boolean value that tells Hotjar whether to enable the debug mode for the Tracking Code. When set to true, the debug mode will send data to Hotjar regardless of any privacy settings. This is useful when you want to test the Tracking Code and see if it's working as expected. Optional.

- `nonce`: Stands for 'Nonce' - This is a string value that allows you to control the nonce attribute of the Hotjar script tag. This is useful when you want to implement a Content Security Policy (CSP) on your site. Optional.

You can learn more from [Understanding the Tracking Code](https://docs.hotjar.com/v1.0/docs/understanding-the-tracking-code) of Hotjar docs
