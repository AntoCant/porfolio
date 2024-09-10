// Add your javascript here

window.darkMode = false;

const stickyClasses = ["fixed", "h-14"];
const unstickyClasses = ["absolute", "h-20"];
const stickyClassesContainer = [
	"border-neutral-300/50",
	"bg-white/80",
	"dark:border-neutral-600/40",
	"dark:bg-neutral-900/60",
	"backdrop-blur-2xl",
];
const unstickyClassesContainer = ["border-transparent"];
let headerElement = null;

document.addEventListener("DOMContentLoaded", () => {
	headerElement = document.getElementById("header");

	if (
		localStorage.getItem("dark_mode") &&
		localStorage.getItem("dark_mode") === "true"
	) {
		window.darkMode = true;
		showNight();
	} else {
		showDay();
	}
	stickyHeaderFuncionality();
	applyMenuItemClasses();
	evaluateHeaderPosition();
	mobileMenuFunctionality();
});

// window.toggleDarkMode = function(){
//     document.documentElement.classList.toggle('dark');
//     if(document.documentElement.classList.contains('dark')){
//         localStorage.setItem('dark_mode', true);
//         window.darkMode = true;
//     } else {
//         window.darkMode = false;
//         localStorage.setItem('dark_mode', false);
//     }
// }

window.stickyHeaderFuncionality = () => {
	window.addEventListener("scroll", () => {
		evaluateHeaderPosition();
	});
};

window.evaluateHeaderPosition = () => {
	if (window.scrollY > 16) {
		headerElement.firstElementChild.classList.add(...stickyClassesContainer);
		headerElement.firstElementChild.classList.remove(
			...unstickyClassesContainer,
		);
		headerElement.classList.add(...stickyClasses);
		headerElement.classList.remove(...unstickyClasses);
		document.getElementById("menu").classList.add("top-[56px]");
		document.getElementById("menu").classList.remove("top-[75px]");
	} else {
		headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
		headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
		headerElement.classList.add(...unstickyClasses);
		headerElement.classList.remove(...stickyClasses);
		document.getElementById("menu").classList.remove("top-[56px]");
		document.getElementById("menu").classList.add("top-[75px]");
	}
};

document.getElementById("darkToggle").addEventListener("click", () => {
	document.documentElement.classList.add("duration-300");

	if (document.documentElement.classList.contains("dark")) {
		localStorage.removeItem("dark_mode");
		showDay(true);
	} else {
		localStorage.setItem("dark_mode", true);
		showNight(true);
	}
});

function showDay(animate) {
	document.getElementById("sun").classList.remove("setting");
	document.getElementById("moon").classList.remove("rising");

	let timeout = 0;

	if (animate) {
		timeout = 500;

		document.getElementById("moon").classList.add("setting");
	}

	setTimeout(() => {
		document.getElementById("dayText").classList.remove("hidden");
		document.getElementById("nightText").classList.add("hidden");

		document.getElementById("moon").classList.add("hidden");
		document.getElementById("sun").classList.remove("hidden");

		if (animate) {
			document.documentElement.classList.remove("dark");
			document.getElementById("sun").classList.add("rising");
		}
	}, timeout);
}

function showNight(animate) {
	document.getElementById("moon").classList.remove("setting");
	document.getElementById("sun").classList.remove("rising");

	let timeout = 0;

	if (animate) {
		timeout = 500;

		document.getElementById("sun").classList.add("setting");
	}

	setTimeout(() => {
		document.getElementById("nightText").classList.remove("hidden");
		document.getElementById("dayText").classList.add("hidden");

		document.getElementById("sun").classList.add("hidden");
		document.getElementById("moon").classList.remove("hidden");

		if (animate) {
			document.documentElement.classList.add("dark");
			document.getElementById("moon").classList.add("rising");
		}
	}, timeout);
}

window.applyMenuItemClasses = () => {
	const menuItems = document.querySelectorAll("#menu a");
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].pathname === window.location.pathname) {
			menuItems[i].classList.add("text-neutral-900", "dark:text-white");
		}
	}
	//:class="{ 'text-neutral-900 dark:text-white': window.location.pathname == '{menu.url}', 'text-neutral-700 dark:text-neutral-400': window.location.pathname != '{menu.url}' }"
};

function mobileMenuFunctionality() {
	document.getElementById("openMenu").addEventListener("click", () => {
		openMobileMenu();
	});

	document.getElementById("closeMenu").addEventListener("click", () => {
		closeMobileMenu();
	});
}

window.openMobileMenu = () => {
	document.getElementById("openMenu").classList.add("hidden");
	document.getElementById("closeMenu").classList.remove("hidden");
	document.getElementById("menu").classList.remove("hidden");
	document.getElementById("mobileMenuBackground").classList.add("opacity-0");
	document.getElementById("mobileMenuBackground").classList.remove("hidden");

	setTimeout(() => {
		document
			.getElementById("mobileMenuBackground")
			.classList.remove("opacity-0");
	}, 1);
};

window.closeMobileMenu = () => {
	document.getElementById("closeMenu").classList.add("hidden");
	document.getElementById("openMenu").classList.remove("hidden");
	document.getElementById("menu").classList.add("hidden");
	document.getElementById("mobileMenuBackground").classList.add("hidden");
};

export function loadDynamicContent(jsonFile) {
  const menu = document.getElementById('menu-dinamic');
  const titleElement = document.getElementById('section-title');
  const contentElement = document.getElementById('section-content');
  const contentElement2 = document.getElementById('section-content2');

  fetch(jsonFile)
    .then(response => response.json())
    .then(contentMap => {
      if (menu) {
        const menuItems = document.querySelectorAll('.menu-item');
        const firstContent = contentMap.find(item => item.id === '1');
        if (firstContent) {
          titleElement.textContent = firstContent.title;
          contentElement.textContent = firstContent.content1;
          contentElement2.textContent = firstContent.content2;
        }
        menuItems.forEach((item, index) => {
          if (index === 0) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
        menu.addEventListener('click', function (event) {
          const target = event.target;
          if (target && target.tagName === 'BUTTON') {
            const categoryId = target.getAttribute('data-id');
            const selectedContent = contentMap.find(item => item.id === categoryId);

            if (selectedContent) {
              titleElement.textContent = selectedContent.title;
              contentElement.textContent = selectedContent.content1;
              contentElement2.textContent = selectedContent.content2;
            }
            menuItems.forEach(i => i.classList.remove('active'));
            target.classList.add('active');
          }
        });
      }
    })
    .catch(error => console.error('Error al cargar el contenido del JSON:', error));
}

window.loadDynamicContent = loadDynamicContent;
