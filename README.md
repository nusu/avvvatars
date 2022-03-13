<div align="center">
  <img src="https://github.com/nusu/avvvatars/raw/main/thumbnail.png" alt="Avvvatars" height="464">
</div>

# Avvvatars

Beautifully crafted unique avatar placeholder for your next react project

Lightweight and customizable ❤️

[Website 🧘‍♀️](https://avvvatars.com)

Built by [Nusu Alabuga](https://twitter.com/nusualabuga) and [Oguz Yagiz Kara](https://twitter.com/oguzyagizkara)

🙏 Special thanks to [Monika Michalczyk](https://www.monikamichalczyk.com/) for awesome shapes 🙏

## Features

- 🌈 **40 Colors** - Colors are so on point that most of the projects can use it without changing it
- 💠 **60 Shapes** - Beautifully crafted shapes that are unique to your user with color combination
- 🆎 **Text or Shapes** 🔸 - Use letters (eg. JD for John Doe) or unique shapes
- 🤠 **Unique to user** - Generated avatars are unique to the string that you provide, it means if you pass janedoe@gmail.com you will always get the same avatar
- 🕊 **Lightweight** - less than 20kb compressed + gzipped
- ✍️ **Customizable** - use shadows, change size, provide alternative text to display

## Installation

**With yarn**

```jsx
yarn add avvvatars-react
```

**With npm**

```jsx
npm install avvvatars-react
```

## Getting Started

Import Avvvatars to your app, then use it anywhere you want.

```jsx
import Avvvatars from 'avvvatars-react'

export default function MyAvatar() {
  return (
    <Avvvatars value="best_user@gmail.com" />
  )
}
```

## Customization

### `value: string`

This is required for plugin to work, each value generates a random avatar to unique to this value, so each time plugin renders, you will get the same results. 

```jsx
<Avvvatars value="best_user@gmail.com" />
```

### `displayValue?: string`

Override default text by providing displayValue

for example if you provide `value=”best_user@gmail.com”` the character output will be the first 2 letters of value which is “BE”, if you pass `displayValue=”BU”` you can override it to **BU**

```jsx
<Avvvatars value="best_user@gmail.com" displayValue="BE" />
```

### `size?: number  (default 32)`

Override default size (32px) by providing a number.

```jsx
<Avvvatars value="best_user@gmail.com" size={32} />
```

### `shadow?: boolean  (default false)`

Enable shadow around the avatar.

```jsx
<Avvvatars value="best_user@gmail.com" shadow={false} />
```

### `style?: character | shape  (default character)`

Use shape or character as avatar.

```jsx
<Avvvatars value="best_user@gmail.com" style="character" />
```

## Figma

If you want to access design files to change something or customize it to your own, use our [Figma File](https://www.figma.com/file/Yy0HrZrp4ue7N1II5bnqW0/Avvvatars.com---Open-Source-React-UI-Avatar-Library-(Community)?node-id=1%3A2086)

## License

MIT