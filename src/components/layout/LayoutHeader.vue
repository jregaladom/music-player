<script>
export default {
    name: 'LayoutHeader',
}
</script>
<template>
    <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-600">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://flowbite.com" class="flex items-center">
                    <svg viewBox="0 0 1024 1024" class="w-12 h-12 mr-4" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M910.5 844.7H175.2c-27.4 0-49.6-22.3-49.6-49.6V299.6c0-27.4 22.3-49.6 49.6-49.6h735.3c27.4 0 49.6 22.3 49.6 49.6v495.5c0 27.3-22.3 49.6-49.6 49.6z"
                                fill="#A7B8C6"></path>
                            <path
                                d="M912 739.3V257.9c0-26.6-22.3-48.2-49.6-48.2h-341v577.9h340.9c27.4 0 49.7-21.7 49.7-48.3z"
                                fill="#D97D4A"></path>
                            <path
                                d="M159.6 209.7c-32.1 0-58.1 21.6-58.1 48.2v481.5c0 26.6 26.1 48.2 58.1 48.2h462V209.7h-462z"
                                fill="#75BFAB"></path>
                            <path
                                d="M862.3 801.1H127.1c-34.8 0-63.2-28.3-63.2-63.2V242.5c0-34.8 28.3-63.2 63.2-63.2h735.3c34.8 0 63.2 28.3 63.2 63.2V738c-0.1 34.8-28.4 63.1-63.3 63.1zM127.1 206.4c-19.9 0-36.1 16.2-36.1 36.1V738c0 19.9 16.2 36.1 36.1 36.1h735.3c19.9 0 36.1-16.2 36.1-36.1V242.5c0-19.9-16.2-36.1-36.1-36.1H127.1z"
                                fill="#3E3A39"></path>
                            <path d="M414.9 490.2m-239.1 0a239.1 239.1 0 1 0 478.2 0 239.1 239.1 0 1 0-478.2 0Z"
                                fill="#8A7D96"></path>
                            <path
                                d="M414.9 742.8c-139.3 0-252.6-113.3-252.6-252.6s113.3-252.6 252.6-252.6 252.6 113.3 252.6 252.6-113.2 252.6-252.6 252.6z m0-478.2c-124.4 0-225.6 101.2-225.6 225.6s101.2 225.6 225.6 225.6c124.4 0 225.6-101.2 225.6-225.6S539.3 264.6 414.9 264.6z"
                                fill="#FFFFFF"></path>
                            <path d="M414.9 490.2m-88.5 0a88.5 88.5 0 1 0 177 0 88.5 88.5 0 1 0-177 0Z" fill="#F1E1CC">
                            </path>
                            <path
                                d="M414.9 592.2c-56.2 0-102-45.8-102-102s45.8-102 102-102 102 45.8 102 102-45.7 102-102 102z m0-176.9c-41.3 0-74.9 33.6-74.9 74.9 0 41.3 33.6 74.9 74.9 74.9s74.9-33.6 74.9-74.9c0.1-41.3-33.5-74.9-74.9-74.9z"
                                fill="#EFC467"></path>
                            <path
                                d="M712 761.2c-50.3 0-91.3-41-91.3-91.3s41-91.3 91.3-91.3 91.3 41 91.3 91.3c0 50.4-41 91.3-91.3 91.3z m0-164.6c-40.4 0-73.3 32.9-73.3 73.3s32.9 73.3 73.3 73.3 73.3-32.9 73.3-73.3c-0.1-40.4-32.9-73.3-73.3-73.3z"
                                fill="#D49967"></path>
                            <path d="M712 669.9m-35 0a35 35 0 1 0 70 0 35 35 0 1 0-70 0Z" fill="#DB9C69"></path>
                            <path
                                d="M437.6 658.2l-23.9-14.6-7.3 12.2 27.3 16.6c3.7 2.2 7.9 3.4 12.2 3.4h252.9v-14.3h-249c-4.3 0.1-8.5-1.1-12.2-3.3z"
                                fill="#F5EDC7"></path>
                            <path
                                d="M562 678.2v-16.5c0-6.6 5.4-12 12-12h130.1c11.2 0 20.3 9.1 20.3 20.3 0 11.2-9.1 20.3-20.3 20.3H574c-6.6-0.1-12-5.5-12-12.1z"
                                fill="#EBB447"></path>
                            <path
                                d="M425.3 651.7l-6.1 10.1c-0.6 1-2.2 1.3-4.1 0.8l-17.4-5.5c-3.1-1-5.4-4-4.3-5.8l10.4-17.3c1.1-1.8 4.8-1.2 7.1 1.1l13.1 12.7c1.4 1.2 1.9 2.8 1.3 3.9z"
                                fill="#E78341"></path>
                            <path
                                d="M410.4 639.5l-8.6 14.7c-2.4 4-7.5 5.4-11.6 3l-2-1.2c-4-2.4-5.4-7.5-3-11.6l8.6-14.7c2.4-4 7.5-5.4 11.6-3l2 1.2c4 2.3 5.4 7.5 3 11.6z"
                                fill="#EAB545"></path>
                            <path d="M760.9 418h34.2v174.4h-34.2z" fill="#AA4A23"></path>
                            <path d="M760.9 418h8.6v174.4h-8.6z" fill="#E9A675"></path>
                            <path d="M744 486.7h73.3v30.1H744z" fill="#E6E7E5"></path>
                            <path d="M744 507.2h73.3v8.8H744z" fill="#C4C4C4"></path>
                            <path d="M760.9 371.9m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#BE2E2D">
                            </path>
                            <path
                                d="M760.9 408.7c-20.3 0-36.8-16.5-36.8-36.8 0-20.3 16.5-36.8 36.8-36.8 20.3 0 36.8 16.5 36.8 36.8 0 20.3-16.5 36.8-36.8 36.8z m0-58.6c-12 0-21.8 9.8-21.8 21.8s9.8 21.8 21.8 21.8 21.8-9.8 21.8-21.8-9.8-21.8-21.8-21.8z"
                                fill="#EFDFCB"></path>
                            <path d="M712 276.1m-56.1 0a56.1 56.1 0 1 0 112.2 0 56.1 56.1 0 1 0-112.2 0Z" fill="#BFBEBD">
                            </path>
                            <path
                                d="M712 338.3c-34.3 0-62.2-27.9-62.2-62.2S677.7 214 712 214c34.3 0 62.2 27.9 62.2 62.2s-28 62.1-62.2 62.1z m0-112.3c-27.6 0-50.1 22.5-50.1 50.1s22.5 50.1 50.1 50.1 50.1-22.5 50.1-50.1S739.6 226 712 226z"
                                fill="#E1E0DF"></path>
                            <path d="M702.9 238.6h18.5v65.6h-18.5z" fill="#B1B0AF"></path>
                            <path d="M716.7 238.6h4.7v65.6h-4.7z" fill="#AAA9A8"></path>
                            <path
                                d="M452.8 508.1l0.1-61.7v-0.2h-0.1l-60 8V503c-2.4-0.8-5-1.1-7.8-0.8-8.8 0.9-15.4 7.1-14.7 14 0.7 6.9 8.4 11.8 17.2 10.9 8.8-0.9 15.4-7.1 14.7-14 0-0.1 0-0.2-0.1-0.3h0.1v-42.3l41.4-6v33.8c-2.4-0.8-5-1.1-7.8-0.8-8.8 0.9-15.4 7.1-14.7 14 0.7 6.9 8.4 11.8 17.2 10.9 8.8-0.9 15.4-7.1 14.7-14-0.1-0.1-0.2-0.2-0.2-0.3z"
                                fill="#DC5854"></path>
                        </g>
                    </svg>
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">App Music</span>
                </a>
                <div class="flex items-center lg:order-2">
                    <!-- <a href="#"
                        class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
                        in</a>
                    <a href="#"
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
                        started</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button> -->
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <router-link to="/"
                                class="block py-2 pr-4 pl-3 text-gray-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                                aria-current="page">Search</router-link>
                        </li>
                        <li>
                            <router-link to="/about"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">About</router-link>
                        </li>
                        <!-- <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Marketplace</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Features</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Team</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Contact</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>