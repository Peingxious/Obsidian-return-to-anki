/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ReturnToAnkiPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_view = require("@codemirror/view");
var ReturnToAnkiPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.editorExtension = this.timestampClickExtension();
    this.registerEditorExtension(this.editorExtension);
  }
  onunload() {
  }
  timestampClickExtension() {
    const plugin = this;
    return import_view.ViewPlugin.fromClass(
      class {
        constructor(view) {
        }
        update(update) {
        }
        destroy() {
        }
      },
      {
        eventHandlers: {
          dblclick: (e, view) => {
            const pos = view.posAtDOM(e.target);
            const line = view.state.doc.lineAt(pos);
            const lineText = line.text;
            const timestampRegex = /(\^\d+)/g;
            let match;
            while ((match = timestampRegex.exec(lineText)) !== null) {
              const start = line.from + match.index;
              const end = start + match[0].length;
              if (pos >= start && pos < end) {
                const timestamp = match[1].replace("^", "nid:");
                plugin.callAnkiConnect(timestamp);
                return true;
              }
            }
            return false;
          }
        }
      }
    );
  }
  async callAnkiConnect(timestamp) {
    try {
      const response = await fetch("http://127.0.0.1:8765", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "guiBrowse",
          version: 6,
          params: {
            query: timestamp
          }
        })
      });
      new import_obsidian.Notice(`\u5DF2\u53D1\u9001\u67E5\u8BE2\u5230 Anki: ${timestamp.replace("nid:", "")}`);
    } catch (error) {
      new import_obsidian.Notice("\u65E0\u6CD5\u8FDE\u63A5\u5230 Anki\uFF0C\u8BF7\u786E\u4FDD AnkiConnect \u63D2\u4EF6\u5DF2\u542F\u7528");
    }
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IEVkaXRvclZpZXcsIFZpZXdQbHVnaW4sIFZpZXdVcGRhdGUgfSBmcm9tIFwiQGNvZGVtaXJyb3Ivdmlld1wiO1xuaW1wb3J0IHsgRXh0ZW5zaW9uIH0gZnJvbSBcIkBjb2RlbWlycm9yL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHVyblRvQW5raVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG5cdHByaXZhdGUgZWRpdG9yRXh0ZW5zaW9uOiBFeHRlbnNpb247XG5cblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiUmV0dXJuVG9BbmtpUGx1Z2luIFx1NkI2M1x1NTcyOFx1NTJBMFx1OEY3RC4uLlwiKTtcblx0XHR0aGlzLmVkaXRvckV4dGVuc2lvbiA9IHRoaXMudGltZXN0YW1wQ2xpY2tFeHRlbnNpb24oKTtcblx0XHR0aGlzLnJlZ2lzdGVyRWRpdG9yRXh0ZW5zaW9uKHRoaXMuZWRpdG9yRXh0ZW5zaW9uKTtcblx0XHQvLyBjb25zb2xlLmxvZyhcIlx1N0YxNlx1OEY5MVx1NTY2OFx1NjI2OVx1NUM1NVx1NURGMlx1NkNFOFx1NTE4Q1wiKTtcblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiUmV0dXJuVG9BbmtpUGx1Z2luIFx1NkI2M1x1NTcyOFx1NTM3OFx1OEY3RC4uLlwiKTtcblx0XHQvLyBcdTZFMDVcdTc0MDZcdTVERTVcdTRGNUNcdTRGMUFcdTgxRUFcdTUyQThcdTVCOENcdTYyMTBcdUZGMENcdTU2RTBcdTRFM0FcdTYyMTFcdTRFRUNcdTRGN0ZcdTc1MjhcdTRFODYgdGhpcy5yZWdpc3RlckVkaXRvckV4dGVuc2lvblxuXHR9XG5cblx0dGltZXN0YW1wQ2xpY2tFeHRlbnNpb24oKTogRXh0ZW5zaW9uIHtcblx0XHRjb25zdCBwbHVnaW4gPSB0aGlzO1xuXHRcdHJldHVybiBWaWV3UGx1Z2luLmZyb21DbGFzcyhcblx0XHRcdGNsYXNzIHtcblx0XHRcdFx0Y29uc3RydWN0b3IodmlldzogRWRpdG9yVmlldykge1xuXHRcdFx0XHRcdC8vIFx1Njc4NFx1OTAyMFx1NTFGRFx1NjU3MFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dXBkYXRlKHVwZGF0ZTogVmlld1VwZGF0ZSkge1xuXHRcdFx0XHRcdC8vIFx1NjZGNFx1NjVCMFx1NjVCOVx1NkNENVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVzdHJveSgpIHtcblx0XHRcdFx0XHQvLyBcdTk1MDBcdTZCQzFcdTY1QjlcdTZDRDVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZXZlbnRIYW5kbGVyczoge1xuXHRcdFx0XHRcdGRibGNsaWNrOiAoZTogTW91c2VFdmVudCwgdmlldzogRWRpdG9yVmlldykgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJcdTY4QzBcdTZENEJcdTUyMzBcdTcwQjlcdTUxRkJcdTRFOEJcdTRFRjZcIik7XG5cdFx0XHRcdFx0XHRjb25zdCBwb3MgPSB2aWV3LnBvc0F0RE9NKGUudGFyZ2V0IGFzIE5vZGUpO1xuXHRcdFx0XHRcdFx0Y29uc3QgbGluZSA9IHZpZXcuc3RhdGUuZG9jLmxpbmVBdChwb3MpO1xuXHRcdFx0XHRcdFx0Y29uc3QgbGluZVRleHQgPSBsaW5lLnRleHQ7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIlx1NzBCOVx1NTFGQlx1NzY4NFx1ODg0Q1x1NjU4N1x1NjcyQzpcIiwgbGluZVRleHQpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCB0aW1lc3RhbXBSZWdleCA9IC8oXFxeXFxkKykvZztcblx0XHRcdFx0XHRcdGxldCBtYXRjaDtcblx0XHRcdFx0XHRcdHdoaWxlIChcblx0XHRcdFx0XHRcdFx0KG1hdGNoID0gdGltZXN0YW1wUmVnZXguZXhlYyhsaW5lVGV4dCkpICE9PSBudWxsXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3RhcnQgPSBsaW5lLmZyb20gKyBtYXRjaC5pbmRleDtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZW5kID0gc3RhcnQgKyBtYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdC8qIFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0XHRcdFx0YFx1NjI3RVx1NTIzMFx1NjVGNlx1OTVGNFx1NjIzMzoke21hdGNoWzBdfSBcdTRGNERcdTdGNkU6ICR7c3RhcnR9LSR7ZW5kfWBcblx0XHRcdFx0XHRcdFx0KTsgKi9cblx0XHRcdFx0XHRcdFx0aWYgKHBvcyA+PSBzdGFydCAmJiBwb3MgPCBlbmQpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBtYXRjaFsxXS5yZXBsYWNlKFwiXlwiLCBcIm5pZDpcIik7XG5cdFx0XHRcdFx0XHRcdFx0cGx1Z2luLmNhbGxBbmtpQ29ubmVjdCh0aW1lc3RhbXApO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiXHU2NUY2XHU5NUY0XHU2MjMzXHU4OEFCXHU3MEI5XHU1MUZCOlwiLCB0aW1lc3RhbXApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIlx1NjcyQVx1NjI3RVx1NTIzMFx1NTMzOVx1OTE0RFx1NzY4NFx1NjVGNlx1OTVGNFx1NjIzM1wiKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRhc3luYyBjYWxsQW5raUNvbm5lY3QodGltZXN0YW1wOiBzdHJpbmcpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODc2NVwiLCB7XG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdGFjdGlvbjogXCJndWlCcm93c2VcIixcblx0XHRcdFx0XHR2ZXJzaW9uOiA2LFxuXHRcdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdFx0cXVlcnk6IHRpbWVzdGFtcCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pO1xuXHRcdFx0Ly8gY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJBbmtpQ29ubmVjdCBcdTU0Q0RcdTVFOTQ6XCIsIHJlc3VsdCk7XG5cdFx0XHRuZXcgTm90aWNlKGBcdTVERjJcdTUzRDFcdTkwMDFcdTY3RTVcdThCRTJcdTUyMzAgQW5raTogJHt0aW1lc3RhbXAucmVwbGFjZShcIm5pZDpcIiwgXCJcIil9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IoXCJcdThDMDNcdTc1MjggQW5raUNvbm5lY3QgXHU2NUY2XHU1MUZBXHU5NTE5OlwiLCBlcnJvcik7XG5cdFx0XHRuZXcgTm90aWNlKFwiXHU2NUUwXHU2Q0Q1XHU4RkRFXHU2M0E1XHU1MjMwIEFua2lcdUZGMENcdThCRjdcdTc4NkVcdTRGREQgQW5raUNvbm5lY3QgXHU2M0QyXHU0RUY2XHU1REYyXHU1NDJGXHU3NTI4XCIpO1xuXHRcdH1cblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUErQjtBQUMvQixrQkFBbUQ7QUFHbkQsSUFBcUIscUJBQXJCLGNBQWdELHVCQUFPO0FBQUEsRUFHdEQsTUFBTSxTQUFTO0FBRWQsU0FBSyxrQkFBa0IsS0FBSyx3QkFBd0I7QUFDcEQsU0FBSyx3QkFBd0IsS0FBSyxlQUFlO0FBQUEsRUFFbEQ7QUFBQSxFQUVBLFdBQVc7QUFBQSxFQUdYO0FBQUEsRUFFQSwwQkFBcUM7QUFDcEMsVUFBTSxTQUFTO0FBQ2YsV0FBTyx1QkFBVztBQUFBLE1BQ2pCLE1BQU07QUFBQSxRQUNMLFlBQVksTUFBa0I7QUFBQSxRQUU5QjtBQUFBLFFBRUEsT0FBTyxRQUFvQjtBQUFBLFFBRTNCO0FBQUEsUUFFQSxVQUFVO0FBQUEsUUFFVjtBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsUUFDQyxlQUFlO0FBQUEsVUFDZCxVQUFVLENBQUMsR0FBZSxTQUFxQjtBQUU5QyxrQkFBTSxNQUFNLEtBQUssU0FBUyxFQUFFLE1BQWM7QUFDMUMsa0JBQU0sT0FBTyxLQUFLLE1BQU0sSUFBSSxPQUFPLEdBQUc7QUFDdEMsa0JBQU0sV0FBVyxLQUFLO0FBR3RCLGtCQUFNLGlCQUFpQjtBQUN2QixnQkFBSTtBQUNKLG9CQUNFLFFBQVEsZUFBZSxLQUFLLFFBQVEsT0FBTyxNQUMzQztBQUNELG9CQUFNLFFBQVEsS0FBSyxPQUFPLE1BQU07QUFDaEMsb0JBQU0sTUFBTSxRQUFRLE1BQU0sQ0FBQyxFQUFFO0FBSTdCLGtCQUFJLE9BQU8sU0FBUyxNQUFNLEtBQUs7QUFDOUIsc0JBQU0sWUFBWSxNQUFNLENBQUMsRUFBRSxRQUFRLEtBQUssTUFBTTtBQUM5Qyx1QkFBTyxnQkFBZ0IsU0FBUztBQUVoQyx1QkFBTztBQUFBLGNBQ1I7QUFBQSxZQUNEO0FBRUEsbUJBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBRUEsTUFBTSxnQkFBZ0IsV0FBbUI7QUFDeEMsUUFBSTtBQUNILFlBQU0sV0FBVyxNQUFNLE1BQU0seUJBQXlCO0FBQUEsUUFDckQsUUFBUTtBQUFBLFFBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxRQUM5QyxNQUFNLEtBQUssVUFBVTtBQUFBLFVBQ3BCLFFBQVE7QUFBQSxVQUNSLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNSO0FBQUEsUUFDRCxDQUFDO0FBQUEsTUFDRixDQUFDO0FBR0QsVUFBSSx1QkFBTyw4Q0FBZ0IsVUFBVSxRQUFRLFFBQVEsRUFBRSxHQUFHO0FBQUEsSUFDM0QsU0FBUyxPQUFQO0FBRUQsVUFBSSx1QkFBTyx3R0FBa0M7QUFBQSxJQUM5QztBQUFBLEVBQ0Q7QUFDRDsiLAogICJuYW1lcyI6IFtdCn0K
