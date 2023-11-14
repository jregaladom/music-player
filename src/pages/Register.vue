<script>
import logoLogin from '@/assets/images/logo_platzi.jpg'
export default {
    name: 'LoginPage',
    data() {
        return {
            logoLogin
        }
    },
}
</script>
<template>
    <section class="bg-white w-full h-full">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-auto lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-full h-auto" :src="logoLogin" alt="logo">
            </a>
            <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
                    <h1 class="text-2xl font-bold leading-tight tracking-tight md:text-2xl text-sky-800">
                        Registro Estación Platzi
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-left text-orange-400">Nombre</label>
                            <input id="name" type="name" name="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="" required="">
                        </div>
                        <div>
                            <label for="last-name"
                                class="block mb-2 text-sm font-medium text-left text-orange-400">Apellidos</label>
                            <input id="last-name" type="last-name" name="last-name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="" required="">
                        </div>
                        <div>
                            <label for="position"
                                class="block mb-2 text-sm font-medium text-left text-orange-400">Cargo</label>
                            <input id="position" type="position" name="position"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="" required="">
                        </div>
                        <div class="w-full flex justify-end">
                            <button
                                class="bg-sky-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-1/2">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>