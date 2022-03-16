
<div align="center">
  <a href="https://avvvatars.com"><img src="https://github.com/nusu/avvvatars/raw/main/thumbnail.png" alt="Avvvatars" height="464"></a>
</div>

# Avvvatars

Beautifully crafted unique avatar placeholder for your next react project

Lightweight and customizable ❤️

https://user-images.githubusercontent.com/1702215/158075475-c23004ab-827a-45ad-bdba-aee29ac5b582.mp4

[Live Demo 🧩](https://avvvatars-demo-nusualabuga.vercel.app/) | [Website 🧘‍♀️](https://avvvatars.com)

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

### `style?: character | shape  (default character)`

Use shape or character as avatar.

```jsx
<Avvvatars value="best_user@gmail.com" style="character" />
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

### `radius?: number` (default [size](https://github.com/nusu/avvvatars#size-number--default-32))

Override the radius of the avatar, it takes `size` by default to always turn it to a circle

```jsx
<Avvvatars value="best_user@gmail.com" radius={10} />
```

### `border?: boolean  (default false)`

Toggle border

```jsx
<Avvvatars value="best_user@gmail.com" border={false} />
```

### `borderSize?: number  (default 2)`

Override border width

```jsx
<Avvvatars value="best_user@gmail.com" borderSize={2} />
```

### `borderColor?: string  (default #fff)`

Override border color

```jsx
<Avvvatars value="best_user@gmail.com" borderColor="#fff" />
```

## Figma

If you want to access design files to change something or customize it to your own, use our [Figma File](https://www.figma.com/community/file/1084861895116393858/Avvvatars.com---Open-Source-React-UI-Avatar-Library-(Community))

## License

MIT
