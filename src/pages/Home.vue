<script>
import moviesLogo from "@/assets/images/movies_logo.jpg";
import LayoutFooter from "@/components/layout/LayoutFooter.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    LayoutFooter,
  },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  data() {
    return {
      msg: "Hello Vue.js App",
      moviesLogo,

      isMenuOpen: false,
      username: "Nombre de Usuario",
      selectedItem: null,
      menuItems: [
        { text: "Elemento 1" },
        { text: "Elemento 2" },
        { text: "Elemento 3" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleSubMenu: function (event) {
      console.log(event.currentTarget.getAttribute("id-element"));
      const parent = event.currentTarget.getAttribute("id-element");
      const submenu = document.querySelector(`[id-parent="${parent}"]`);
      if (submenu) {
        submenu.classList.toggle("hidden");
      }
    },

  },
};
</script>
<template>
  <nav class="bg-white border-gray-200 shadow-md fixed top-0 w-full mb-10">
    <div class="w-full flex justify-between items-center p-5">
      <a href="https://flowbite.com/" class="flex items-center">
        <img src="../assets/images/movies_logo.jpg" class="h-8 mr-3" />
      </a>
      <div class="items-center justify-between w-2/3 flex">
        <input type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Buscar" />
      </div>
      <div class="flex items-center">
        <div class="relative">
          <!-- Avatar circular -->
          <button class="focus:outline-none" @click="toggleMenu">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {{ username.charAt(0) }}
              </div>
            </div>
          </button>
          <!-- Menú de opciones (oculto inicialmente) -->
          <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
            <div class="px-4 py-3 text-sm text-gray-900 ">
              <div>{{ username }}</div>
              <div class="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
            </ul>
            <div class="py-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign
                out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="w-full grid grid-cols-5 mt-20 pt-3">
    <div class="w-full">
      <div class="sidebar fixed overflow-y-auto text-centerh-full shadow-lg h-full w-1/5 bg-white">
        <div
          class="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-gray-600 text-gray-700 hover:text-white">
          <i class="bi bi-house-door-fill"></i>
          <span class="ml-4">Home</span>
        </div>
        <div
          class="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-gray-600 text-gray-700 hover:text-white">
          <i class="bi bi-bookmark-fill"></i>
          <span class="text-[15px] ml-4">Bookmark</span>
        </div>
        <hr class="h-px my-8 border-0 bg-gray-200">
        <div
          class="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-gray-600 text-gray-700 hover:text-white"
          id="mainMenu" @click="toggleSubMenu" id-element="id1020">
          <i class="bi bi-chat-left-text-fill"></i>
          <div class="flex justify-between w-full items-center">
            <span class="text-[15px] ml-4">Chatbox</span>
            <span class="text-sm rotate-180" id="arrow">
              <i class="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 hidden" id="submenu" id-parent="id1020">
          <h1
            class="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-gray-600 text-gray-700 hover:text-white">
            Social
          </h1>
          <h1
            class="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-gray-600 text-gray-700 hover:text-white">
            Personal
          </h1>
          <h1
            class="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-gray-600 text-gray-700 hover:text-white">
            Friends
          </h1>
        </div>
        <div
          class="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer hover:bg-gray-600 text-gray-700 hover:text-white">
          <i class="bi bi-box-arrow-in-right"></i>
          <span class="text-[15px] ml-4 ">Logout</span>
        </div>
      </div>
    </div>
    <div class="col-start-2 col-end-6 overflow-y-auto">
      <div class="grid grid-cols-3 gap-2 mr-3 p-4">
        <div class="bg-white border border-gray-200 rounded-lg shadow-md">
          <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg shadow-md">
          <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg shadow-md">
          <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg shadow-md">
          <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <layout-footer />
</template>
