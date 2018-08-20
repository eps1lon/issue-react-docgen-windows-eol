# react-docgen-windows-eol

```bash
git clone && cd
yarn
yarn start
```

### actual
**linux**
```json
```

**windows**
```json
{
  "description": "A Text component\r\nwith a newline comment",
  "displayName": "Text",
  "methods": [],
  "props": {
    "value": {
      "type": { "name": "string" },
      "required": true,
      "description": "the actual text\r\nand here is a newline comment"
    }
  }
}
```

**diff**
```json
```

### expected
No difference since the source is passed with `\n` as eol.
