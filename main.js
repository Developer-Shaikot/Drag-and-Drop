const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

const getBgColor = (elem) => {
	return window.getComputedStyle(elem).backgroundColor;
}

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});

		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			currentBoxColor = getBgColor(draggedItem)
			currentRowColors = [];
			this.querySelectorAll('.list-item').forEach((elem) => {
				currentRowColors.push(getBgColor(elem));
			});
			if (currentRowColors.includes(currentBoxColor)) {
				console.log("Same color box already exists");
			} else {
				this.append(draggedItem);
			}
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}