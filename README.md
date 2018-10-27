# Installation

```shell
$ yarn add roman-arabic
```

# Usage

## Running the app

```javascript
import { roman, arabic } from 'roman-arabic';

roman.toArabic('XXIII'); // 23
arabic.toRoman(23); // XXIII
```

# Documentation

## roman.toArabic(number)
It returns the arabic representation of the number.

| Param | Type | Description |
| --- | --- | --- |
| number | <code>string</code> | Roman numeral |

## arabic.toRoman(number)
It returns the roman representation of the number.

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Arabic numeral |
