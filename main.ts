import { Plugin, Notice } from "obsidian";
import { EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { Extension } from "@codemirror/state";

export default class ReturnToAnkiPlugin extends Plugin {
	private editorExtension: Extension;

	async onload() {
		// console.log("ReturnToAnkiPlugin 正在加载...");
		this.editorExtension = this.timestampClickExtension();
		this.registerEditorExtension(this.editorExtension);
		// console.log("编辑器扩展已注册");
	}

	onunload() {
		// console.log("ReturnToAnkiPlugin 正在卸载...");
		// 清理工作会自动完成，因为我们使用了 this.registerEditorExtension
	}

	timestampClickExtension(): Extension {
		const plugin = this;
		return ViewPlugin.fromClass(
			class {
				constructor(view: EditorView) {
					// 构造函数
				}

				update(update: ViewUpdate) {
					// 更新方法
				}

				destroy() {
					// 销毁方法
				}
			},
			{
				eventHandlers: {
					dblclick: (e: MouseEvent, view: EditorView) => {
						// console.log("检测到点击事件");
						const pos = view.posAtDOM(e.target as Node);
						const line = view.state.doc.lineAt(pos);
						const lineText = line.text;
						// console.log("点击的行文本:", lineText);

						const timestampRegex = /(\^\d+)/g;
						let match;
						while (
							(match = timestampRegex.exec(lineText)) !== null
						) {
							const start = line.from + match.index;
							const end = start + match[0].length;
							/* 	console.log(
								`找到时间戳:${match[0]} 位置: ${start}-${end}`
							); */
							if (pos >= start && pos < end) {
								const timestamp = match[1].replace("^", "nid:");
								plugin.callAnkiConnect(timestamp);
								// console.log("时间戳被点击:", timestamp);
								return true;
							}
						}
						// console.log("未找到匹配的时间戳");
						return false;
					},
				},
			}
		);
	}

	async callAnkiConnect(timestamp: string) {
		try {
			const response = await fetch("http://127.0.0.1:8765", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "guiBrowse",
					version: 6,
					params: {
						query: timestamp,
					},
				}),
			});
			// const result = await response.json();
			// console.log("AnkiConnect 响应:", result);
			new Notice(`已发送查询到 Anki: ${timestamp.replace("nid:", "")}`);
		} catch (error) {
			// console.error("调用 AnkiConnect 时出错:", error);
			new Notice("无法连接到 Anki，请确保 AnkiConnect 插件已启用");
		}
	}
}
