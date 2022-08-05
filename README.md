# react-hotjar
Small component to implement Hotjar into your react application

# Installation
```bash
npm install react-hotjar --save
```

# Use / Example
```javascript
import { hotjar } from 'react-hotjar';

hotjar.initialize(hjid, hjsv);

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
- hjid: Stands for 'Hotjar ID' - Your site's ID. This is the ID which tells Hotjar which site settings it should load and where it should save the data collected.

- hjsv: Stands for 'Hotjar Snippet Version' - The version of the Tracking Code you are using. This is only needed if Hotjar ever updates the Tracking Code and needs to discontinue older ones. Knowing which version your site includes allows hotjar team to contact you and inform you accordingly.

You can learn more from [Understanding the Tracking Code](https://docs.hotjar.com/v1.0/docs/understanding-the-tracking-code) of Hotjar docs
