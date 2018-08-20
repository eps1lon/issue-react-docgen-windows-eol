# react-docgen-windows-eol

```bash
git clone https://github.com/eps1lon/issue-react-docgen-windows-eol.git && cd issue-react-docgen-windows-eol
yarn
yarn start
```

### actual
**linux**
```json
{
  "description": "A Text component\nwith a newline comment",
  "displayName": "Text",
  "methods": [],
  "props": {
    "value": {
      "type": { "name": "string" },
      "required": true,
      "description": "the actual text\nand here is a newline comment"
    }
  }
}
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
```diff
--- linux.json  2018-08-20 10:11:28.541885179 +0200
+++ windows.json        2018-08-20 10:09:19.838189006 +0200
@@ -1,12 +1,12 @@
 {
-  "description": "A Text component\nwith a newline comment",
+  "description": "A Text component\r\nwith a newline comment",
   "displayName": "Text",
   "methods": [],
   "props": {
     "value": {
       "type": { "name": "string" },
       "required": true,
-      "description": "the actual text\nand here is a newline comment"
+      "description": "the actual text\r\nand here is a newline comment"
     }
   }
 }
```

### expected
No difference since the source is passed with `\n` as eol.
