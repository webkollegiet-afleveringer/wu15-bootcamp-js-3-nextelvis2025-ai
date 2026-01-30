document.addEventListener("DOMContentLoaded", () => {
	const main = document.querySelector("main");
	const links = document.querySelectorAll(".primaryNavigation a");

	links.forEach(link => {
		link.addEventListener("click", event => {
			event.preventDefault();

			const page = link.dataset.page;
			loadPage(page);
		});
	});

	function loadPage(url) {
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error("Kunne ikke hente siden");
				}
				return response.text();
			})
			.then(html => {
				main.innerHTML = html;
			})
	}
});
