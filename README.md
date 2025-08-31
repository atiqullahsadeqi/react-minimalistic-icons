# React Minimalistic Icons

A comprehensive collection of minimalistic SVG icons for React and Next.js applications. This package contains over 500+ carefully crafted icons across multiple categories with different style variants.

## Installation

```bash
npm install react-minimalistic-icons
# or
yarn add react-minimalistic-icons
# or
pnpm add react-minimalistic-icons
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import { ArrowLeftLinear, HomeLinear, UserLinear } from 'react-minimalistic-icons';

function App() {
  return (
    <div>
      <ArrowLeftLinear size={24} color="#000" />
      <HomeLinear size={32} color="#007bff" />
      <UserLinear size={20} />
    </div>
  );
}
```

### With Custom Props

```jsx
import { HeartLinear } from 'react-minimalistic-icons';

function LikeButton() {
  return (
    <HeartLinear 
      size={24}
      color="red"
      className="like-icon"
      style={{ cursor: 'pointer' }}
    />
  );
}
```

### Category-based Imports

```jsx
import { Arrow, Essetional, Users } from 'react-minimalistic-icons';

function Navigation() {
  return (
    <div>
      <Arrow.ArrowLeftLinear size={20} />
      <Essetional.HomeLinear size={20} />
      <Users.UserLinear size={20} />
    </div>
  );
}
```

## Icon Variants

Each icon comes in 6 different style variants:

- **Linear**: Clean line-based design
- **Outline**: Outlined version
- **Bold**: Thicker stroke weight
- **Bulk**: Filled with transparency
- **Broken**: Stylized broken lines
- **Twotone**: Two-color design

Example:
```jsx
import { 
  ArrowLeftLinear,
  ArrowLeftOutline,
  ArrowLeftBold,
  ArrowLeftBulk,
  ArrowLeftBroken,
  ArrowLeftTwotone
} from 'react-minimalistic-icons';
```

## Categories

The icons are organized into the following categories:

- **Arrow** - Navigation and directional icons
- **Essetional** - Essential UI elements
- **Users** - User and profile related icons
- **Business** - Business and analytics icons
- **Money** - Finance and payment icons
- **Security** - Security and privacy icons
- **Content** - Content and document icons
- **Design Tools** - Design and creative tools
- **Programming** - Development and coding icons
- **Video Audio Image** - Media and entertainment icons
- **Computers Devices Electronics** - Technology icons
- **Time** - Time and calendar icons
- **Location** - Maps and location icons
- **Weather** - Weather and climate icons
- **Building** - Architecture and buildings
- **Delivery** - Shipping and logistics
- **Shop** - E-commerce and shopping
- **Call** - Communication icons
- **Emails Messages** - Messaging and email
- **Notifications** - Alerts and notifications
- **Support Like Question** - Support and feedback
- **School Learning** - Education icons
- **Astrology** - Zodiac and astrology
- **Files** - File management icons
- **Search** - Search and discovery
- **Settings** - Configuration and settings
- **Grid** - Layout and grid icons
- **Crypto Currency** - Cryptocurrency icons
- **Archive** - Archive and storage icons

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Icon color |
| `className` | `string` | `undefined` | CSS class name |
| `style` | `React.CSSProperties` | `undefined` | Inline styles |

## TypeScript Support

This package includes full TypeScript support with proper type definitions.

```tsx
import { IconProps, ArrowLeftLinear } from 'react-minimalistic-icons';

const MyIcon: React.FC<IconProps> = (props) => {
  return <ArrowLeftLinear {...props} />;
};
```

## Next.js Usage

Works seamlessly with Next.js:

```jsx
// pages/index.js or app/page.js
import { HomeLinear, UserLinear } from 'react-minimalistic-icons';

export default function Home() {
  return (
    <div>
      <HomeLinear size={24} />
      <UserLinear size={24} />
    </div>
  );
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

Icons designed with attention to minimalistic design principles and modern UI standards.
