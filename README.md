# flxbx

A minimalistic flexbox library for React


[![Build Status](https://travis-ci.org/rcdexta/flxbx.svg?branch=master)](https://travis-ci.org/rcdexta/flxbx)
[![npm version](https://badge.fury.io/js/flxbx.svg)](https://badge.fury.io/js/flxbx)


## Why?

Most react libraries for flexbox are bloated. I wrote this for myself as a utility to contain the minimal directives for flexbox to quickly prototype a custom layout with container containing multiple children each with their own flex attributes

## Features

* minimalistic and light weight
* direct wrapper to flexbox specification

## Getting Started

Use npm or yarn to add this as dependency

```bash
npm install -save flxbx
```

or

```bash
yarn add flxbx
```

## Usage

`Flxbx` defined two components to describe flexbox specification for parent container as well as child components.

Consider the layout below:

![alt tag](https://github.com/rcdexta/flxbx/raw/master/assets/parent.png)

This can be defined using the following DSL. Read through the values assigned to props to better understand the layout used. Note that `Box` is just an arbitrary component used to visually represent the effect of flex layout and is not part of the library.

```jsx
<FlxBx reverse={true} justify='center' align='center'>
	<Box num={1} />
	<Box num={2} />
	<Box num={3} />
	<Box num={4} />
</FlxBx>
```

To tweak the position of individual child elements, read throught the next example

![alt tag](https://github.com/rcdexta/flxbx/raw/master/assets/child.png)



```jsx
<FlxBx>
	<FlxEl element={Box} num={1} />
	<FlxEl element={Box} num={2} align='center' />
	<FlxEl element={Box} num={3} grow='0.4' />
	<FlxEl element={Box} num={4} align='flex-end'/>
</FlxBx>
```

`FlxEl` takes a component as element prop and passes all other props not relevant to flxbx library.

Please check the examples in the [storybook](https://rcdexta.github.io/flxbx) for detailed documentation about possible prop values

## Documentation

### FlxBx

Parent component to define the container level flex properties

| Name      | Type    | Description (default value)              | Flexbox Reference                        |
| --------- | ------- | ---------------------------------------- | ---------------------------------------- |
| direction | string  | How flex items are placed in the flex container defining the main axis and the direction (row) | [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) |
| reverse   | boolean | Reverse flex direction (false)           | -                                        |
| justify   | string  | Defines how the browser distributes space between and around content items along the main axis of their container (flex-start) | [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) |
| align     | string  | defines how the browser distributes space between and around flex items along the cross-axis of their container (flex-start) | [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) |
### FlxEl

Wrapper component for defining flex properties for child elements

| Name    | Type   | Description (default value)              | Flexbox Reference                        |
| ------- | ------ | ---------------------------------------- | ---------------------------------------- |
| element | object | Actual component to be rendered as child | -                                        |
| align   | string | aligns flex items of the current flex line overriding the [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) value (auto) | [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) |
| basis   | string | specifies the flex basis which is the initial **main size** of a flex item (auto) | [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) |
| grow    | string | specifies the flex grow factor of a flex item. It specifies what amount of space inside the flex container the item should take up (0) | [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) |
| shrink  | string | specifies the flex shrink factor of a flex item. Flex items will shrink to fill the container according to the `flex-shrink` number, when the default width of flex items is wider than the flex container (1) | [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) |

## License

MIT
