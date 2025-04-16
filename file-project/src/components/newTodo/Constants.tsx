export const data: Array<{ id: number; task: string; isDone: boolean }> = []
for (let i = 0; i < 1000; i++) {
	data.push({
		id: i,
		task: 'Tasks',
		isDone: false,
	})
}
