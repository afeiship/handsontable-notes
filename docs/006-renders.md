# renders

```js
// register custom renderer
Handsontable.renderers.registerRenderer('my.renderer', function(instance, TD, row, col, prop, value, cellProperties) {
  TD.innerHTML = value;
});

// use it for selected column:
columns: [
  {
    // as a string with the name of build in renderer
    renderer: 'autocomplete',
    editor: 'select'
  },
  {
    // as an alias to custom renderer registered above
    renderer: 'my.renderer'
  },
  {
    // renderer as custom function
    renderer: function(hotInstance, TD, row, col, prop, value, cellProperties) {
      TD.style.color = 'blue';
      TD.innerHTML = value;
    }
  }
],
```
